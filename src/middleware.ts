import { NextRequest, NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {

  let token = request.cookies.get('token');
  console.log(token);

  if (request.cookies.has('token')){

    return NextResponse.redirect(new URL('/profile/username', request.url))

  } else {
    return NextResponse.redirect(new URL('/profile/accountmanager', request.url))
  }

}
 
//Matching Path
export const config = {
  matcher: '/profile',
}