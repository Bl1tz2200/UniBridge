'use server'

import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'

export async function setCookie(name: string, value: string): Promise<void>{
  const cookieStore = await cookies()
  cookieStore.set(name, value)
}

export async function getCookie(name: string): Promise<RequestCookie | {value: boolean}>{
  const cookieStore = await cookies()
  const cookie = cookieStore.get(name)
  return cookie ? cookie : {value: false}
}

export async function delCookie(name: string): Promise<void>{
  const cookieStore = await cookies()
  const cookie = cookieStore.delete(name)
}