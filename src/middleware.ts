import { NextResponse, type NextRequest } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './lib/types/supabase';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  // Get the session from Supabase.
  const { data: { session } } = await supabase.auth.getSession();
  const url = new URL(req.nextUrl);

  // Redirect unauthenticated users trying to access admin or profile routes.
  if (!session) {
    if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/profile')) {
      return NextResponse.redirect(new URL('/', req.url));
    }
    return res;
  }

  // Retrieve the user roles, including nested event_categories and fests data.
  const { data: userRoles, error } = await supabase
    .from('roles')
    .select(`
      role,
      event_categories (
        name,
        fests (
          name,
          year
        )
      )
    `)
    .eq('user_id', session.user?.id)
    .eq('event_categories.fests.name', 'Game Of Thrones')
    .eq('event_categories.fests.year', 2025)
    .single();

  if (url.pathname.startsWith('/admin')) {
    if (
      error ||
      !userRoles ||
      (userRoles.role !== 'super_admin' && userRoles.role !== 'convenor')
    ) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  // For the specific route to add events, only super_admin is allowed.
  if (url.pathname.startsWith('/admin/manage-events/add-event')) {
    if (error || !userRoles || userRoles.role !== 'super_admin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  // If no redirection is triggered, allow the request to proceed.
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)',
  ],
};
