import { NextRequest } from 'next/server'
import { auth } from './middlewares/auth'

export function middleware(req: NextRequest): void {
    if (req.nextUrl.pathname.startsWith('/products')) {
        auth(req).catch((err) => console.log(err))
    }
}
