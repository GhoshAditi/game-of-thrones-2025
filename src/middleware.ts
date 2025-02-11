import { NextResponse, type NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './lib/types/supabase';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const url = new URL(req.nextUrl);

  // Redirect if there's no session for admin or profile routes.
  if (!session) {
    if (
      url.pathname.startsWith('/admin') ||
      url.pathname.startsWith('/profile')
    ) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return res;
  }

  // Only perform the role check if the user is trying to access an admin route.
  if (url.pathname.startsWith('/admin')) {
    const { data: userRoles, error } = await supabase
      .from('roles')
      .select(
        `
        role,
        event_categories (
          name,
          fests (
            name,
            year
          )
        )
      `
      )
      .eq('user_id', session.user.id)
      .eq('role', 'super_admin')
      .eq('event_categories.fests.name', 'Game Of Thrones')
      .eq('event_categories.fests.year', 2025);

    // Redirect to /unauthorised if there's an error or no matching role record.
    if (error || !userRoles || userRoles.length === 0) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)',
  ],
};
