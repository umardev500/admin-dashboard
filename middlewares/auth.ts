// import nookies from 'nookies'
import { jwtVerify } from 'jose'
import { NextRequest } from 'next/server'

export const auth = async (req: NextRequest): Promise<void> => {
    const limiter = req.cookies.get('limiter')
    let token = ''
    if (limiter === undefined) {
        // req.cookies.set('limiter', 'foobar')
    } else {
        token = limiter.value
    }

    const key = process.env.SECRET
    const secret = new TextEncoder().encode(key)
    try {
        await jwtVerify(token, secret)
    } catch (err) {
        return await Promise.reject(err)
    }
}
