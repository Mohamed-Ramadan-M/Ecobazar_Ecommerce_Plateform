"use client"
import { Eye, Heart, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import ProductsDialog from "./products-dialog";
import type { Product } from "@/types/products.type";

export function ProductCard({ product }: { product: Product }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative border rounded-lg p-4 flex flex-col justify-between transition-all duration-200 bg-white ${isHovered ? "border-emerald-500 shadow-md" : "border-gray-100"
                }`}
        >
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {product.isOutofStock && (
                    <span className="bg-danger text-white text-[10px] px-2 py-0.5 rounded uppercase font-medium">
                        Out of Stock
                    </span>
                )}
                {product.salePercentage && (
                    <span className="bg-warning text-white text-[10px] px-2 py-0.5 rounded font-medium">
                        Sale {product.salePercentage}%
                    </span>
                )}
            </div>

            {/* Floating Action Buttons (Wishlist & Quick View) */}
            <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                <button className="w-8 h-8 rounded-full bg-background border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition shadow-sm">
                    <Heart className="w-4 h-4" />
                </button>

                {/* Quick View Dialog Trigger */}
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger
                        render={
                            <button className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition shadow-sm p-0">
                                <Eye className="w-4 h-4" />
                            </button>
                        }
                    >
                    </DialogTrigger>

                    {/* Dialog Overlay & Content */}
                    <DialogContent className="sm:max-w-4xl w-full p-0 border-none bg-transparent shadow-none ">
                        <ProductsDialog
                            product={product}
                        />
                    </DialogContent>
                </Dialog>

            </div>

            {/* Product Image */}
            <div className="relative w-full h-44 my-2 flex items-center justify-center">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={160}
                    height={160}
                    className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product Information */}
            <div className="mt-2">
                <div className="flex items-center justify-between">
                    <h3
                        className={`text-sm font-medium transition ${isHovered ? "text-emerald-600" : "text-gray-700"
                            }`}
                    >
                        {product.name}
                    </h3>

                    {/* Cart Action Button */}
                    <button
                        className={"w-8 h-8 rounded-full flex items-center justify-center transition hover:bg-primary hover:text-white"}
                    >
                        <ShoppingBag className="w-4 h-4" />
                    </button>
                </div>

                {/* Price Section */}
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-base font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-0.5 mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            className={`w-3.5 h-3.5 ${index < product.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-gray-200 text-gray-200"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}