import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const idUser: any = await prisma.user.findUnique({
        where: {
            username: cookies().get('user')?.value
        }
    })

    const cart = await prisma.cart.findMany({
        where: {
            userId: idUser?.id
        },
        include: {
            victual: true
        }
    })

    return NextResponse.json({ success: true, message: 'Victuals retrieved successfully', cart }, { status: 200 })
}