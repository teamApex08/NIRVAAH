export const appRoutes = ["/", "/command-centre", "/projects"];

export function isAppRoute(pathname) {
  return appRoutes.includes(pathname);
}
