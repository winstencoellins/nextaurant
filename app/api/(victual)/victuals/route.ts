import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
    const victuals = await prisma.victual.findMany()


    return NextResponse.json({ success: true, name: cookies().get('first')?.value, victuals }, { status: 200 })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ message: 'Unauthorized request' }, { status: 403 })
}