import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/contato",
    "/ferramentas",
    "/api/stripe/webhook",
    "/api/redirector",
    "/api/redirector/(.*)",
    "/api/group",
    "/api/group/(.*)",
    "/api/redirect/(.*)",
    "/api/s3-upload",
    "/api/wapp/webhook"
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};