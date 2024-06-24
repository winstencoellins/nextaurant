import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { hashPassword } from "@/auth";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json()

    const employeeExist = await prisma.user.findUnique({
        where: {
            username: data.username
        }
    })

    if (employeeExist != null) {
        return NextResponse.json({ status: false, message: 'Username already exists' }, { status: 403 })
    }

    const createEmployee = await prisma.user.create({
        data: {
            username: data.username,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: hashPassword(data.password),
            gender: data.gender
        }
    })

    return NextResponse.json({ success: true, message: 'New user created successfully' }, { status: 201 })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ message: 'Unauthorized request' }, { status: 401 })
}