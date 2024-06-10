import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData();

    const firstName:any = data.get('firstName')
    const lastName:any = data.get('lastName')
    const username:any = data.get('username')
    const password:any = data.get('password')
    const email:any = data.get('email')

    const existUser = prisma.user.findUnique({
        where: {
            username: username,
        }
    })

    console.log('Exist User', existUser)
    // const user = prisma.user.create({
    //     data: {
    //         firstName: firstName,
    //         lastName: lastName,
    //         username: username,
    //         email: email,
    //         password: password,
    //     }
    // })

    return NextResponse.json({ "success": true, "message": "Successfully created a user" })
}

export async function GET(req: NextRequest, res: NextResponse) {
    
}