import { NextRequest, NextResponse } from 'next/server'
import { auth } from './middlewares/auth'

export async function middleware(req: NextRequest): Promise<NextResponse> {
    const pathname = req.nextUrl.pathname

    const isNext = pathname.startsWith('/_next')
    const isAssets = pathname.startsWith('/assets')

    if (!isNext && !isAssets) {
        if (!req.nextUrl.pathname.startsWith('/auth')) {
            const href = req.nextUrl.href
            try {
                await auth(req)
            } catch (err) {
                return NextResponse.redirect(new URL(`/app/auth?redirect=${href}`, req.url))
            }
        }

        if (req.nextUrl.pathname.startsWith('/auth')) {
            try {
                await auth(req)
                return NextResponse.redirect(new URL('/app', req.url))
            } catch (err) {
                console.log(err)
            }
        }
    }

    return NextResponse.next()
}
