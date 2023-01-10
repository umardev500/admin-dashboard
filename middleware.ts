import { NextRequest, NextResponse } from 'next/server'
import { auth } from './middlewares/auth'

export async function middleware(req: NextRequest): Promise<NextResponse> {
    if (req.nextUrl.pathname.startsWith('/products')) {
        try {
            await auth(req)
        } catch (err) {
            console.log(err)
            return NextResponse.redirect(new URL('/auth', req.url))
        }
    }

    return NextResponse.next()
}
