import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT } from "./util/routes";
const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const { nextUrl, url } = req;
  const isAuthenticated = !!req.auth;
  const isPublicRoute = nextUrl.pathname.startsWith(PUBLIC_ROUTES);

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL(PUBLIC_ROUTES, nextUrl));
  }

  if (isAuthenticated && isPublicRoute) {
    return Response.redirect(new URL(ROOT, nextUrl));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
