import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decrypt } from "@/auth";

export async function middleware(req: NextRequest) {
    try {
        const valid = await decrypt(cookies().get('session')?.value)

        if (req.nextUrl.pathname.startsWith('/admin') && cookies().get('role')?.value != 'Admin') {
            console.log('ADMIN PATH CALLED')
            return NextResponse.redirect(new URL('/', req.url))
        }

        return NextResponse.next()
    } catch (e) {
        return NextResponse.redirect(new URL('/login', req.url))
    }
}

export const config = {
    matcher: ['/admin/:path*', '/', '/vituals', '/profile', '/cart']
}