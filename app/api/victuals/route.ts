import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData()

    console.log(data)

    return NextResponse.json({ "success": true, "message": "Victuals successfully created!" })
}

export async function GET(req: NextRequest, res: NextResponse) {

}