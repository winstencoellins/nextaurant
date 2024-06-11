import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData();

    const firstName:any = data.get('firstName')
    const lastName:any = data.get('lastName')
    const username:any = data.get('username')
    const password:any = data.get('password')
    const email:any = data.get('email')
    const gender:any = data.get('gender')

    const existUser = await prisma.user.findUnique({
        where: {
            'username': username,
        }
    })

    if (existUser != null) {
        return NextResponse.json({ "success": false, "message": "User with this username already exist" })
    }


    const user = await prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
            gender: gender,
        }
    })

    return NextResponse.json({ "success": true, "message": "Successfully created a user" })
}

export async function GET(req: NextRequest, res: NextResponse) {
    const users = await prisma.user.findMany()

    return NextResponse.json({ users })
}