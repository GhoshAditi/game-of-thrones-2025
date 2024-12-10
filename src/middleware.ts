import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)',
  ],
};
