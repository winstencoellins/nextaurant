import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { hashPassword } from "@/auth";

export async function POST(req: NextRequest, res: NextResponse) {
    const users = await prisma.user.findMany()

    return NextResponse.json({ success: true, users })
}

export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({ message: 'Unauthorized request' }, { status: 403 })
}