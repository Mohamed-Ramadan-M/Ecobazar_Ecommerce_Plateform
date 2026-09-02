import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/api/products/products.api";

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const res = await getProductById(id);
    return NextResponse.json(res);
}
