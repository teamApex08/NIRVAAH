// Routes known to the custom client-side router. Add a path here when a new
// page should be handled without a full browser reload.
export const appRoutes = ["/", "/command-centre", "/projects"];

// Used by useCurrentRoute to decide whether a clicked link should be routed
// inside React or left to the browser.
export function isAppRoute(pathname) {
  return appRoutes.includes(pathname);
}
