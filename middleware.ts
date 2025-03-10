import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (!token) {
    if (pathname === "/signin" || pathname === "/signup") {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (token && (pathname === "/signin" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile", "/interview/:path*", "/signin", "/signup"],
};
