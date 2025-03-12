import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import { DASHBOARD_PAGES } from './config/pages-url.config'

export async function middleware(request: NextRequest) {
    console.log('Middleware triggered on:', request.nextUrl.pathname)

    const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
    let isAuthenticated = false

    try {
        const response = await axios.get(`${request.nextUrl.origin}/api/auth/check`, {
            headers: { Cookie: request.headers.get('cookie') || '' },
        })
        isAuthenticated = response.data.isAuthenticated
    } catch (error) {
        console.error('Auth check failed:', error)
    }

    // Если пользователь НЕ авторизован и пытается зайти НЕ на страницу логина, отправляем на /auth/login
    if (!isAuthenticated && !isAuthPage) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // Если пользователь авторизован и пытается зайти на страницу логина — отправляем в Dashboard
    if (isAuthenticated && isAuthPage) {
        return NextResponse.redirect(new URL(DASHBOARD_PAGES.HOME, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/listify/:path*', '/auth/:path*'],
}