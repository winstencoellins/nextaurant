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