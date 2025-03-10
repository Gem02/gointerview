import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  console.log("Token in middleware:", token); // Log the token
  console.log("Pathname in middleware:", pathname); // Log the pathname

  if (!token) {
    console.log("No token found, redirecting to /signin"); // Log no token
    if (pathname === "/signin" || pathname === "/signup") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (token && (pathname === "/signin" || pathname === "/signup")) {
    console.log("Token found, redirecting to /dashboard"); // Log token found
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  console.log("Token found, allowing access to:", pathname); // Log access granted
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile", "/interview/:path*", "/signin", "/signup"],
};