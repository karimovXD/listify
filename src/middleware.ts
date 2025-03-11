//import { NextRequest, NextResponse } from 'next/server'

//import { DASHBOARD_PAGES } from './config/pages-url.config'
//import { EnumTokens } from './services/auth-token.service'

//export async function middleware(request: NextRequest) {
//    const { url, cookies, nextUrl } = request

//    const refreshToken = cookies?.get(EnumTokens.REFRESH_TOKEN)?.value
//    console.log(refreshToken, cookies.get(EnumTokens.REFRESH_TOKEN), cookies.get(EnumTokens?.REFRESH_TOKEN))
//    const isAuthPage = url.includes('/auth')

//    // Если пользователь заходит на "/", отправляем его в "/listify"
//    if (nextUrl.pathname === '/') {
//        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, request.url))
//    }

//    // Если пользователь уже авторизован, но пытается зайти на страницу авторизации — редиректим в Dashboard
//    if (isAuthPage && refreshToken) {
//        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, url))
//    }

//    // Разрешаем доступ к auth-страницам
//    if (isAuthPage) {
//        return NextResponse.next()
//    }

//    // Если нет refreshToken, отправляем на страницу логина
//    if (!refreshToken) {
//        return NextResponse.redirect(new URL('/auth/login', request.url))
//    }

//    return NextResponse.next()
//}

//export const config = {
//    matcher: ['/', '/listify/:path*', '/auth/:path*']
}