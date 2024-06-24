import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
    const data: any = await req.json()

    const idUser: any = await prisma.user.findUnique({
        where: {
            username: cookies().get('user')?.value
        },
        select: {
            id: true
        }
    })

    const victualExists: any = await prisma.cart.findUnique({
        where: {
            victualId: data.id,
            userId: idUser?.id
        }
    })


    if (victualExists != null) {
        const updateCartVictual = await prisma.cart.update({
            where: {
                victualId: data.id,
                userId: idUser?.id
            },
            data: {
                quantity: victualExists.quantity + data.quantity
            }
        })

        return NextResponse.json({ success: true, message: 'Successfully added victual' }, { status: 201 })
    }

    const createCartVictual = await prisma.cart.create({
        data: {
            userId: idUser?.id,
            victualId: data.id,
            quantity: data.quantity,
        }
    })

    return NextResponse.json({ success: true, message: 'Successfully added victual' }, { status: 201 })
}