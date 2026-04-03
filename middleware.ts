import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  
  // Get hostname (e.g. 'localhost:3000', 'saratravels.localhost:3000', 'orbitle.in', 'saratravels.orbitle.in')
  // We use headers.get('host') because req.nextUrl.hostname doesn't always contain the port,
  // but we need it for local testing.
  const hostname = req.headers.get('host');

  if (!hostname) return NextResponse.next();

  /**
   * Determine the subdomain.
   * Logic:
   * 1. Remove the port if it exists (e.g. ':3000').
   * 2. Remove the base domain ('localhost' or 'orbitle.in').
   * 3. What's left is the subdomain.
   */
  let subdomain = '';
  const hostWithoutPort = hostname.split(':')[0]; // e.g. saratravels.localhost

  if (hostWithoutPort.endsWith('.localhost')) {
    // Local Testing: saratravels.localhost -> "saratravels"
    subdomain = hostWithoutPort.replace('.localhost', '');
  } else if (hostWithoutPort.endsWith('.orbitle.in')) {
    // Production: saratravels.orbitle.in -> "saratravels"
    subdomain = hostWithoutPort.replace('.orbitle.in', '');
    
    // Ignore cases where it might be 'www' or 'agent'
    if (subdomain === 'www' || subdomain === 'agent') {
      subdomain = '';
    }
  }

  // If there's a valid agent subdomain
  if (subdomain) {
    // Rewrite the request to a special Next.js route: /_agent/[subdomain]/[...path]
    // You will need to create the folder: app/_agent/[subdomain]/page.tsx
    // The user's URL in the browser STAYS hitting saratravels.localhost:3000
    url.pathname = `/_agent/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Otherwise, behave normally for the landing page
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
