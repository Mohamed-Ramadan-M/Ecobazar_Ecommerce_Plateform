"use client";

import Image from "next/image";
import { Product } from "./products-card";
import {
    Heart,
    Minus,
    Plus,
    ShoppingBag,
    Star,
    ChevronUp,
    ChevronDown,
} from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";


export const ProductsDialog = ({ product }: { product: Product }) => {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(product.image);

    const thumbnails = [
        product.image,
        product.image,
        product.image,
        product.image,
    ];

    const handleDecrease = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleIncrease = () => {
        if (quantity < 99) setQuantity((prev) => prev + 1);
    };

    return (
        <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden text-left">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Column: Image Gallery */}
                <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-2">
                        <button className="text-gray-400 hover:text-gray-600 p-1">
                            <ChevronUp className="w-4 h-4" />
                        </button>
                        <div className="flex flex-col gap-2 max-h-70 overflow-hidden">
                            {thumbnails.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative w-14 h-14 rounded-lg border-2 overflow-hidden transition ${activeImage === img && idx === 0
                                        ? "border-emerald-500"
                                        : "border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${idx}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 p-1">
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="relative flex-1 h-80 sm:h-95 w-full flex items-center justify-center">
                        <Image
                            src={activeImage}
                            alt={product.name}
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="flex flex-col justify-between h-full gap-4">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {product.name}
                        </h2>
                        {product.isOutofStock ? (
                            <span className="bg-red-100 text-red-600 text-xs px-2.5 py-1 rounded-md font-medium">
                                Out of Stock
                            </span>
                        ) : (
                            <span className="bg-emerald-100 text-emerald-600 text-xs px-2.5 py-1 rounded-md font-medium">
                                In Stock
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    className={`w-3.5 h-3.5 ${index < product.rating
                                        ? "fill-amber-400 text-amber-400"
                                        : "fill-gray-200 text-gray-200"
                                        }`}
                                />
                            ))}
                            <span className="font-semibold text-gray-700 ml-1">
                                {product.rating} Review
                            </span>
                        </div>
                        <span>•</span>
                        <div>
                            <span className="font-medium text-gray-800">SKU:</span> {product.sku || ""}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {product.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                        <span className="text-2xl font-bold text-emerald-600">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.salePercentage && (
                            <span className="bg-red-50 text-red-500 text-xs px-2 py-0.5 rounded-full font-semibold">
                                {product.salePercentage}% Off
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-gray-500">
                        <div>
                            <span className="font-medium text-gray-800">Category:</span> Vegetables
                        </div>
                        <div>
                            <span className="font-medium text-gray-800">Tag:</span> Vegetables, Healthy, Chinese, Cabbage
                        </div>
                        <div>
                            <span className="font-medium text-gray-800">Description: </span> {product.description}
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Action Row */}
                    <div className="flex items-center gap-3">
                        <div className="inline-flex items-center border border-gray-200 rounded-full p-1 bg-white select-none">
                            <button
                                type="button"
                                onClick={handleDecrease}
                                disabled={quantity <= 1}
                                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition disabled:opacity-40"
                            >
                                <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold text-gray-800">
                                {quantity}
                            </span>
                            <button
                                type="button"
                                onClick={handleIncrease}
                                disabled={quantity >= 99}
                                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition"
                            >
                                <Plus className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        <Button className="flex-1 bg-primary hover:bg-hard-primary text-white font-semibold py-6 rounded-full flex items-center justify-center gap-2 text-sm transition">
                            <span>Add to Cart</span>
                            <ShoppingBag className="w-4 h-4" />
                        </Button>

                        <button className="p-3.5 rounded-full bg-emerald-50 text-primary hover:bg-emerald-100 transition">
                            <Heart className="w-5 h-5 " />
                        </button>
                    </div>

                    <hr className="border-gray-100" />

                </div>
            </div>
        </div>
    );
};

export default ProductsDialog;