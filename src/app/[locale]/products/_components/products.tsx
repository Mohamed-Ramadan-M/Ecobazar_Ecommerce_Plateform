"use client";

import React, { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";
import { ProductCard } from "@/components/common/products-card";
import FilterSelect from "@/components/common/filter-select";
import { Slider } from "@/components/ui/slider";
import { RatingStarPicker } from "@/components/common/star-rating-filter";
import { useTranslations } from "next-intl";
import { useQuery} from "@tanstack/react-query";
import ProductsDialog from "@/components/common/products-dialog";

type productsDataType = {
    id: number,
    name: string,
    price: number,
    originalPrice: number ,
    rating: number,
    image: string,
    isOutofStock: boolean,
    salePercentage: number,
    categoryId: number,
    description: string,
    stock: number,
    sku: string,
    weight: string,
    dimensions: string,
    createdAt: Date,
    updatedAt: Date
}
export default function Products() {
    const [activePage, setActivePage] = useState(1);
    const [value, setValue] = React.useState([800, 4000])
    const t = useTranslations()

    const { isPending, data } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch("/api/products",{
                cache: 'no-store'
            });
            return res.json();
        },
        staleTime:300,
    })
    console.log(data)
    if (isPending) return <p>loading...</p>;

    const categoryFilters = [
        { label: t("filter.vegetables"), value: "vegetables" },
        { label: t("filter.fruits"), value: "fruits" },
        { label: t("filter.cooking"), value: "cooking" },
        { label: t("filter.snacks"), value: "snacks" },
    ];

    const sortFilters = [
        { label: t("filter.latest"), value: "latest" },
        { label: t("filter.oldest"), value: "oldest" },
        { label: t("filter.lowPrice"), value: "low_price" },
        { label: t("filter.highPrice"), value: "hight_price" },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 font-sans text-gray-800">
            {/* 1. Top Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                    {/* Category Dropdown */}
                    <FilterSelect
                        filterItems={categoryFilters}
                        filterName="category"
                        placeholder={t("productsPage.selectCategory")}
                    />

                    {/* Compact Price Range Popover / Input */}
                    <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2 text-xs bg-white text-gray-600">
                        <span className="whitespace-nowrap font-medium">{t("common.price")}: ${value[0]} - ${value[1]}</span>
                        <Slider
                            value={value}
                            onValueChange={(val) => setValue(val as [number, number])}
                            max={10000}
                            min={0}
                            step={100}
                            className="w-24 sm:w-32 "
                            aria-label="Price Range"
                        />
                    </div>

                    {/* Rating Dropdown */}
                    <RatingStarPicker
                        onRatingSelect={(stars) => {
                            console.log("Selected min stars:", stars); // returns 1, 2, 3, 4, 5, or null
                        }}
                    />
                </div>


                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <span>{t("common.sortBy")}</span>
                        <FilterSelect
                            filterItems={sortFilters}
                            filterName="sorted"
                            placeholder={t("productsPage.latest")}
                        />
                    </div>
                </div>
            </div>

            {/* 2. Active Filters & Results Count */}
            <div className="flex items-center justify-between py-4 text-sm">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400">{t("common.activeFilters")}</span>
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
                    <span className="font-semibold text-gray-900">2,547</span> {t("common.resultsFound")}
                </div>
            </div>

            {/* 3. Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                {data.map((data : productsDataType) => (
                    <ProductCard key={data.id} product={data} />
                ))}
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                {data.map((data : productsDataType) => (
                    <ProductsDialog key={data.id} product={data} />
                ))}
            </div> */}

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
