import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.formData();

    console.log(data)

    return NextResponse.json({ "success": true, "message": "Successfully created a user" })
}

export async function GET(req: NextRequest, res: NextResponse) {
    
}