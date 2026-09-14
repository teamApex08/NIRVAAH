import { useEffect, useState } from "react";
import { isAppRoute } from "../lib/navigation.js";

function getCurrentPath() {
  return window.location.pathname || "/";
}

export function useCurrentRoute() {
  const [path, setPath] = useState(getCurrentPath);

  useEffect(() => {
    const handlePopState = () => setPath(getCurrentPath());
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
