import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // ví dụ: logging
  console.log("Request:", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
