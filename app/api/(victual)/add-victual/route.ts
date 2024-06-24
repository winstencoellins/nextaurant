import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData()

    let [name, short, desc, category, price]: [any, any, any, any, any] = [data.get('name'), data.get('short'), data.get('desc'), data.get('category'), data.get('price')]

    const createVictual = await prisma.victual.create({
        data: {
            name: name,
            category: category,
            shortDescription: short,
            description: desc,
            price: price
        }
    })

    return NextResponse.json({ success: true, message: 'Victual successfully created!' }, { status: 201 })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ message: 'Unauthorized request' }, { status: 403 })
}