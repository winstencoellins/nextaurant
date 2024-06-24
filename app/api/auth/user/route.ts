import { comparePassword, encrypt, hashPassword } from "@/auth";
import prisma from "@/db";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

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

    let date = new Date()

    let expiryDate = date.getTime() + 1*2*60*60*1000

    cookies().set('session', token, { expires: expiryDate })
    cookies().set('user', user.username, { expires: expiryDate })
    cookies().set('role', user.role, { expires: expiryDate })
    cookies().set('first', user.firstName, { expires: expiryDate })

    return NextResponse.json({ success: true, message: 'Logged in successfully', role: user.role}, { status: 201 })
}