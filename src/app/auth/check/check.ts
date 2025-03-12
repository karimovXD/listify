import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const refreshToken = request.cookies.get('refreshToken')?.value

    if (!refreshToken) {
        return NextResponse.json({ isAuthenticated: false }, { status: 401 })
    }

    return NextResponse.json({ isAuthenticated: true })
}