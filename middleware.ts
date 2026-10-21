import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'outsourcedemployment.com';

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
  const host = (forwardedHost || request.headers.get('host') || '').toLowerCase().split(':')[0];
  const forwardedProto = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim().toLowerCase();
  const protocol = forwardedProto || request.nextUrl.protocol.replace(':', '');

  if ((host === canonicalHost || host === `www.${canonicalHost}`) && (host !== canonicalHost || protocol !== 'https')) {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.host = canonicalHost;
    destination.port = '';
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
