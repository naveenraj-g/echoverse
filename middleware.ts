import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isProtectedRoutes = createRouteMatcher([
  "/app(.*)",
  "/quiz(.*)",
  "/coding/problems-list(.*)",
]);
const isPublicRoute = createRouteMatcher(["/api/uploadthing"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return NextResponse.next(); // Allow public access
  }
  // Protect all routes starting with `/admin`

  if (
    isAdminRoute(req) &&
    (await auth()).sessionClaims?.metadata?.role !== "admin"
  ) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url); // protect admin to public access
  }

  if (isProtectedRoutes(req)) {
    await auth.protect(); // protect public access
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

/*
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isProtectedRoute = createRouteMatcher(["/app(.*)"]);
const isPublicRoute = createRouteMatcher(["/api/uploadthing"]);

export default clerkMiddleware(async (auth, req) => {
  // Allow public routes without authentication
  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  // Get user session and metadata only once
  const session = await auth();
  const role = session?.sessionClaims?.metadata?.role;

  // Protect admin routes
  if (isAdminRoute(req)) {
    if (!session || role !== "admin") {
      const url = new URL("/", req.url);
      url.searchParams.set("error", "unauthorized"); // Optional query param for better UX
      return NextResponse.redirect(url);
    }
  }

  // Protect application routes
  if (isProtectedRoute(req)) {
    if (!session) {
      return await auth.protect(); // Ensures only authenticated users can access
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
*/
