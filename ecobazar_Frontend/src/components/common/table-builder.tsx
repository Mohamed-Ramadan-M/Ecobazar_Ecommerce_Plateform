"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Product } from "@/types/products.type"
import { Button } from "../ui/button"
import { Minus, Plus, XCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface TableBuilderProps {
    tableData: Product[],
    tableHeaders: string[],
    type: "wishlist" | "cart"

}

export function TableBuilder({ tableData, tableHeaders, type }: TableBuilderProps) {
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleIncrease = () => {
        if (quantity < 99) setQuantity((prev) => prev + 1);
    };

    return (
        <div className="border border-gray-100 rounded-xl bg-white overflow-hidden shadow-sm">
            <Table>
                <TableHeader className="bg-white border-b border-gray-100">
                    <TableRow className="hover:bg-transparent border-b border-gray-100">
                        {tableHeaders.map((header, index) => (
                            <TableHead
                                key={header}
                                className={`text-[12px] font-semibold text-gray-400 uppercase tracking-wider py-4 ${index === 0 ? "text-left pl-6" : "text-center"
                                    }`}
                            >
                                {header}
                            </TableHead>
                        ))}
                        {/* Empty header cell for delete action column */}
                        <TableHead className="w-12 pr-6"></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tableData.map((item) => (
                        <TableRow key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                            {/* Product Name & Image */}
                            <TableCell className="py-5 pl-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={64}
                                            height={64}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                    <span className="font-medium text-gray-900 text-base">
                                        {item.name}
                                    </span>
                                </div>
                            </TableCell>

                            {/* Price */}
                            <TableCell className="text-center font-medium text-gray-800 text-base">
                                ${typeof item.price === "number" ? item.price.toFixed(2) : item.price}
                            </TableCell>

                            {/* Stock status (for wishlist) */}
                            {type === "wishlist" && (
                                <TableCell className="text-center">
                                    {item.isOutofStock ? (
                                        <span className="bg-red-100 text-red-600 text-[11px] px-2.5 py-1 rounded-full uppercase font-semibold">
                                            Out of Stock
                                        </span>
                                    ) : (
                                        <span className="bg-emerald-100 text-emerald-600 text-[11px] px-2.5 py-1 rounded-full uppercase font-semibold">
                                            In Stock
                                        </span>
                                    )}
                                </TableCell>
                            )}

                            {/* Quantity Controls (for cart) */}
                            {type === "cart" && (
                                <TableCell className="text-center">
                                    <div className="inline-flex items-center border border-gray-200 rounded-full px-2 py-1 bg-white select-none gap-2">
                                        <button
                                            type="button"
                                            onClick={handleDecrease}
                                            disabled={quantity <= 1}
                                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors disabled:opacity-30 disabled:hover:bg-gray-100"
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
                                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors disabled:opacity-30"
                                        >
                                            <Plus className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </TableCell>
                            )}

                            {/* Subtotal */}
                            {type === "cart" && (
                                <TableCell className="text-center font-bold text-gray-900 text-base">
                                    ${(item.price * quantity).toFixed(2)}
                                </TableCell>
                            )}

                            {/* Actions (Delete Icon) */}
                            <TableCell className="text-right pr-6">
                                {type === "wishlist" && (
                                    <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-4 py-2 font-medium">
                                        Add to Cart
                                    </Button>
                                )}
                                <button
                                    type="button"
                                    className="text-gray-300 hover:text-gray-500 transition-colors p-1 rounded-full inline-flex items-center justify-center"
                                    aria-label="Remove item"
                                >
                                    <XCircle className="w-5 h-5 stroke-[1.5]" />
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Optional Table Footer buttons matching image */}
            <div className="flex items-center justify-between p-4 bg-white border-t border-gray-100">
                <button className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition">
                    Return to shop
                </button>
                <button className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition">
                    Update Cart
                </button>
            </div>
        </div>
    )
}
