// import nookies from 'nookies'
import { jwtVerify } from 'jose'
import { NextRequest } from 'next/server'

export const auth = async (req: NextRequest): Promise<void> => {
    const tokenCookie = req.cookies.get('token')
    let token = ''
    if (token === undefined) {
        const err = 'Uauthorized'
        return await Promise.reject(err)
    } else {
        token = tokenCookie?.value as string
    }

    const key = process.env.SECRET
    const secret = new TextEncoder().encode(key)
    try {
        await jwtVerify(token, secret)
    } catch (err) {
        return await Promise.reject(err)
    }
}
