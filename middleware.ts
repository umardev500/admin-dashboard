import { NextRequest, NextResponse } from 'next/server'
import { auth } from './middlewares/auth'

export async function middleware(req: NextRequest): Promise<NextResponse> {
    const pathname = req.nextUrl.pathname

    const isNext = pathname.startsWith('/_next')
    const isAssets = pathname.startsWith('/assets')

    // if (!isNext && !isAssets) {
    //     const href = encodeURI(req.nextUrl.href)
    //     try {
    //         await auth(req)

    //         if (pathname.startsWith('/auth')) {
    //             return NextResponse.redirect(new URL('/app', req.url))
    //         }
    //         return NextResponse.next()
    //     } catch (err) {
    //         return NextResponse.rewrite(new URL(`/app/auth?redirect=${href}`, req.url))
    //     }
    // }

    return NextResponse.next()
}
