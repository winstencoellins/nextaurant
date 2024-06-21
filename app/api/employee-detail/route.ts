import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req:NextRequest, res:NextResponse) {
    const data = await req.formData()

    const id:any = data.get('id')

    const employee = await prisma.user.findUnique({
        where: {
            id: id
        },
        select: {
            firstName: true,
            lastName: true,
            username: true,
            email: true,
            gender: true,
        }
    })
    

    return NextResponse.json({ "success": true, employee })
}

export async function PUT(req: NextRequest, res: NextResponse) {
    const data = await req.formData()

    const [first, last, username, password, email, gender, id]: any[] = [data.get('firstName'), data.get('lastName'), data.get('username'), data.get('password'),data.get('email'), data.get('gender'), data.get('id')]

    const updateEmployee = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            firstName: first,
            lastName: last,
            username: username,
            password: password,
            email: email,
            gender: gender
        }
    })

    return NextResponse.json({ "success": true })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ message: 'Unauthorized request' }, { status: 403 })
}