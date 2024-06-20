import { comparePassword, encrypt, hashPassword } from "@/auth";
import prisma from "@/db";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const config = {
    api: {
        bordyParse: false,
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const user = await prisma.user.findUnique({
        where: {
            username: data.username
        }
    })

    if (user == null) {
        return NextResponse.json({ success: false, message: "Username doesn't exist" }, { status: 401 })
    }

    const valid = await comparePassword(data.password, user.password)

    if (!valid) {
        return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 })
    }

    const payload = { id: user.id, username: user.username }

    const token = await encrypt(payload)

    cookies().set('session', token ,{httpOnly: true})
    cookies().set('user', user.username)
    cookies().set('role', user.role)

    return NextResponse.json({ success: true, message: 'Logged in successfully', role: user.role}, { status: 201 })
}

export async function GET(req: NextRequest, res: NextResponse) {
    const session: any = cookies().get('session')?.value
    const role: any = cookies().get('role')?.value

    return NextResponse.json({ session: session, role: role })
}