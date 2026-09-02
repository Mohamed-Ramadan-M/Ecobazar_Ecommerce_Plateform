import { NextResponse } from "next/server";
import { getAllProducts } from "@/api/products/products.api";

export async function GET() {
    const res = await getAllProducts();
    return NextResponse.json(res)
}
