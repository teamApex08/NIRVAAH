import { useEffect, useState } from "react";
import { isAppRoute } from "../lib/navigation.js";

// Reads the browser's current path and normalizes the empty path to "/".
function getCurrentPath() {
  return window.location.pathname || "/";
}

/**
 * Lightweight client-side routing hook.
 *
 * It intercepts clicks on links that point to known in-app routes, updates the
 * browser history, and returns the active path so App.jsx can render the right
 * page without bringing in a full router library yet.
 */
export function useCurrentRoute() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const handlePopState = () => setPath(getCurrentPath());

    // Keep normal browser behavior for external links and modified clicks
    // such as Cmd-click/Ctrl-click, which users expect to open a new tab.
    const handleDocumentClick = (event) => {
      const link = event.target.closest("a[href]");

      if (!link) return;

      const url = new URL(link.href);
      const isSameOrigin = url.origin === window.location.origin;
      const shouldIntercept =
        isSameOrigin && isAppRoute(url.pathname) && !event.metaKey && !event.ctrlKey && !event.shiftKey;

      if (!shouldIntercept) return;

      event.preventDefault();
      window.history.pushState({}, "", `${url.pathname}${url.hash}`);
      setPath(url.pathname);

      // Hash links on the landing page should still scroll to their section
      // even though the router intercepted the click.
      if (url.hash) {
        requestAnimationFrame(() => {
          document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
        });
        return;
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return path;
}
