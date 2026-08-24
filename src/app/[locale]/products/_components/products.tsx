"use client";

import React, { useState } from "react";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";
import { ProductCard } from "@/components/common/products-card";

// --- Types ---
interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    isOutofStock?: boolean;
    salePercentage?: number;
    isHovered?: boolean;
}

// --- Sample Product Data ---
const PRODUCTS_DATA: Product[] = [
    { id: 1, name: "Red Chili", price: 14.99, rating: 4, image: "/images/products-item-1.svg" },
    { id: 2, name: "Big Potatoes", price: 14.99, rating: 4, image: "/images/products-item-2.svg" },
    { id: 3, name: "Chanise Cabbage", price: 14.99, rating: 4, image: "/images/products-item-3.svg" },
    { id: 4, name: "Ladies Finger", price: 14.99, originalPrice: 20.99, rating: 4, image: "/images/products-item-4.svg", isOutofStock: true },
    { id: 5, name: "Red Tomato", price: 14.99, rating: 4, image: "/images/products-item-5.svg" },
    { id: 6, name: "Eggplant", price: 14.99, rating: 4, image: "/images/products-item-6.svg" },
    { id: 7, name: "Fresh Cauliflower", price: 14.99, rating: 4, image: "/images/products-item-7.svg" },
    { id: 8, name: "Green Apple", price: 14.99, rating: 4, image: "/images/products-item-8.svg" },
    { id: 9, name: "Fresh Mango", price: 14.99, rating: 4, image: "/images/products-item-9.svg" },
    { id: 10, name: "Green Capsicum", price: 14.99, rating: 4, image: "/images/products-item-10.svg" },
    { id: 11, name: "Green Chili", price: 14.99, rating: 4, image: "/images/products-item-11.svg" },
    { id: 12, name: "Green Cucumber", price: 14.99, originalPrice: 20.99, rating: 4, image: "/images/products-item-12.svg", salePercentage: 50 },
    { id: 13, name: "Green Lettuce", price: 14.99, rating: 4, image: "/images/products-item-13.svg" },
    { id: 14, name: "Green Lettuce", price: 14.99, rating: 4, image: "/images/products-item-14.svg" },
    { id: 15, name: "Ladies Finger", price: 14.99, rating: 4, image: "/images/products-item-15.svg" },
    { id: 16, name: "Green Capsicum", price: 14.99, rating: 4, image: "/images/products-item-16.svg" },
];

export default function Products() {
    const [activePage, setActivePage] = useState(1);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 font-sans text-gray-800">
            {/* 1. Top Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                    <DropdownFilter label="Select Category" />
                    <DropdownFilter label="Select Price" />
                    <DropdownFilter label="Select Rating" />
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <span>Sort by:</span>
                        <DropdownFilter label="Latest" compact />
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Show:</span>
                        <DropdownFilter label="16" compact />
                    </div>
                </div>
            </div>

            {/* 2. Active Filters & Results Count */}
            <div className="flex items-center justify-between py-4 text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400">Active Filters:</span>
                    <div className="flex items-center gap-1 font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full text-xs">
                        Wing Chair
                        <X className="w-3 h-3 cursor-pointer ml-1 text-gray-500 hover:text-black" />
                    </div>
                    <div className="flex items-center gap-1 font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full text-xs">
                        Min $300 - Max $500
                        <X className="w-3 h-3 cursor-pointer ml-1 text-gray-500 hover:text-black" />
                    </div>
                </div>

                <div className="text-gray-500">
                    <span className="font-semibold text-gray-900">2,547</span> Results found.
                </div>
            </div>

            {/* 3. Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                {PRODUCTS_DATA.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* 4. Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
                <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-200 transition">
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {[1, 2, 3, 4, 5].map((page) => (
                    <button
                        key={page}
                        onClick={() => setActivePage(page)}
                        className={`w-9 h-9 rounded-full text-sm font-medium transition ${activePage === page
                                ? "bg-emerald-600 text-white"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        {page}
                    </button>
                ))}

                <span className="text-gray-400 px-1">...</span>

                <button
                    onClick={() => setActivePage(21)}
                    className={`w-9 h-9 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition ${activePage === 21 ? "bg-emerald-600 text-white" : ""
                        }`}
                >
                    21
                </button>

                <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}


function DropdownFilter({ label, compact = false }: { label: string; compact?: boolean }) {
    return (
        <button
            className={`flex items-center justify-between border border-gray-200 rounded-md text-gray-600 text-xs bg-white hover:border-gray-300 transition ${compact ? "px-3 py-1.5 gap-2" : "px-4 py-2.5 min-w-35 gap-4"
                }`}
        >
            <span>{label}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
    );
}

// function ProductCard({ product }: { product: Product }) {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className={`group relative border rounded-lg p-4 flex flex-col justify-between transition-all duration-200 bg-white ${isHovered ? "border-emerald-500 shadow-md" : "border-gray-100"
//                 }`}
//         >
//             {/* Badges */}
//             <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
//                 {product.isOutofStock && (
//                     <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded uppercase font-medium">
//                         Out of Stock
//                     </span>
//                 )}
//                 {product.salePercentage && (
//                     <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-medium">
//                         Sale {product.salePercentage}%
//                     </span>
//                 )}
//             </div>

//             {/* Floating Action Buttons (Wishlist & Quick View) */}
//             <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
//                 <button className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition shadow-sm">
//                     <Heart className="w-4 h-4" />
//                 </button>
//                 <button className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition shadow-sm">
//                     <Eye className="w-4 h-4" />
//                 </button>
//             </div>

//             {/* Product Image */}
//             <div className="relative w-full h-44 my-2 flex items-center justify-center">
//                 <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={160}
//                     height={160}
//                     className="object-contain max-h-full transition-transform duration-300 group-hover:scale-105"
//                 />
//             </div>

//             {/* Product Information */}
//             <div className="mt-2">
//                 <div className="flex items-center justify-between">
//                     <h3
//                         className={`text-sm font-medium transition ${isHovered ? "text-emerald-600" : "text-gray-700"
//                             }`}
//                     >
//                         {product.name}
//                     </h3>

//                     {/* Cart Action Button */}
//                     <button
//                         className={`w-8 h-8 rounded-full flex items-center justify-center transition ${isHovered
//                                 ? "bg-emerald-600 text-white"
//                                 : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                             }`}
//                     >
//                         <ShoppingBag className="w-4 h-4" />
//                     </button>
//                 </div>

//                 {/* Price Section */}
//                 <div className="flex items-center gap-2 mt-1">
//                     <span className="text-base font-bold text-gray-900">
//                         ${product.price.toFixed(2)}
//                     </span>
//                     {product.originalPrice && (
//                         <span className="text-xs text-gray-400 line-through">
//                             ${product.originalPrice.toFixed(2)}
//                         </span>
//                     )}
//                 </div>

//                 {/* Rating Stars */}
//                 <div className="flex items-center gap-0.5 mt-2">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                         <Star
//                             key={index}
//                             className={`w-3.5 h-3.5 ${index < product.rating
//                                     ? "fill-amber-400 text-amber-400"
//                                     : "fill-gray-200 text-gray-200"
//                                 }`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }