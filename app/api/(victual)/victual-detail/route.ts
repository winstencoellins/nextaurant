import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData()
    const id:any = data.get('id')

    const victualDetail = await prisma.victual.findUnique({
        where: {
            id: id,
        },
        select: {
            name: true,
            category: true,
            shortDescription: true,
            description: true,
            price: true
        }
    })

    return NextResponse.json({ success: true, victualDetail }, { status: 201 })
}

export async function PUT(req: NextRequest, res: NextResponse) {
    const data = await req.formData()

    const [id, name, category, short, desc, price]: [any, any, any, any, any, any] = [data.get('id'), data.get('name'), data.get('category'), data.get('short'), data.get('desc'), data.get('price')]

    const updateVictual = await prisma.victual.update({
        where: {
            id: id
        },
        data: {
            name: name,
            category: category,
            shortDescription: short,
            description: desc,
            price: price
        }
    })

    return NextResponse.json({ success: true, message: 'Victual updated successfully' }, { status: 201 })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ message: 'Unauthorized request' }, { status: 401 })
}