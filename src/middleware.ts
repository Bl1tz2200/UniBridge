import { updateShortToken } from '@/hooks/accountActions'
import { NextRequest, NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {

  if (request.cookies.has('tokenLong')){
    return NextResponse.redirect(new URL('/profile/username', request.url))
  } else {
    return NextResponse.redirect(new URL('/accountmanager', request.url))
  }

}
 
//Matching Path
export const config = {
  matcher: ['/profile'],
}