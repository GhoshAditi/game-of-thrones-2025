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

  if (!session) {
    if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/profile')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return res;
  }

  const { data: userRoles, error } = await supabase
    .from('roles')
    .select(`
      role,
      event_categories (
        fest_name,
        year
      )
    `)
    .eq('id', session.user.id)
    .eq('role', 'supar_admin')
    .eq('event_categories.fest_name', 'Game Of Thrones')
    .eq('event_categories.year', 2025);

  // If an error occurs or no matching role is found, redirect away.
  if (error || !userRoles || userRoles.length === 0) {
    return NextResponse.redirect(new URL('/unauthorised', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)',
  ],
};
