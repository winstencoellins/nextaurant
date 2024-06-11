import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData()

    let [name, short, desc, category, price]: [any, any, any, any, any] = [data.get('name'), data.get('short'), data.get('desc'), data.get('category'), data.get('price')]

    console.log(name, typeof(name))
    console.log(short, typeof(short))
    console.log(desc, typeof(desc))
    console.log(category, typeof(category))
    console.log(price, typeof(parseFloat(price)))

    const createVictual = await prisma.victual.create({
        data: {
            name: name,
            category: category,
            shortDescription: short,
            description: desc,
            price: price
        }
    })

    return NextResponse.json({ "success": true, "message": "Victuals successfully created!" })
}

export async function GET(req: NextRequest, res: NextResponse) {
    const victuals = await prisma.victual.findMany()

    return NextResponse.json({ victuals })
}