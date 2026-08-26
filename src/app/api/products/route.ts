import { NextRequest, NextResponse } from "next/server";
import { getAllProducts } from "@/api/products/products.api";

export async function GET(req:NextRequest){
    const res = await getAllProducts();
    return NextResponse.json(res)
}