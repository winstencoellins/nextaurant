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

    return NextResponse.json({ victualDetail })
}