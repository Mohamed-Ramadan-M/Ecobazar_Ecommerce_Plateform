"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronDown, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface RatingStarPickerProps {
    onRatingSelect?: (rating: number | null) => void;
}

export const RatingStarPicker = ({ onRatingSelect }: RatingStarPickerProps) => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    const t = useTranslations()

    const [isOpen, setIsOpen] = useState(false);


    const initialRating = searchParams.get("rating") ? Number(searchParams.get("rating")) : null;
    const [selectedRating, setSelectedRating] = useState<number | null>(initialRating);
    const [hoverRating, setHoverRating] = useState<number | null>(null);

    useEffect(() => {
        const currentParam = searchParams.get("rating");
        setSelectedRating(currentParam ? Number(currentParam) : null);
    }, [searchParams]);

    const updateUrlQuery = (ratingValue: number | null) => {
        const newParams = new URLSearchParams(searchParams.toString());

        if (ratingValue) {
            newParams.set("rating", ratingValue.toString());
        } else {
            newParams.delete("rating");
        }

        router.replace(`${pathName}?${newParams.toString()}`, { scroll: false });
    };

    const handleSelect = (rating: number) => {
        const newRating = selectedRating === rating ? null : rating;
        setSelectedRating(newRating);
        updateUrlQuery(newRating);

        if (onRatingSelect) onRatingSelect(newRating);
        setIsOpen(false);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedRating(null);
        updateUrlQuery(null);

        if (onRatingSelect) onRatingSelect(null);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between min-w-37.5 px-3.5 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:border-gray-300 transition-all shadow-sm"
            >
                <div className="flex items-center gap-1.5">
                    {selectedRating ? (
                        <div className="flex items-center gap-1">
                            <span className="text-gray-900 font-semibold">{selectedRating}.0</span>
                            <div className="flex items-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-3.5 h-3.5 ${i < selectedRating
                                                ? "fill-amber-400 text-amber-400"
                                                : "fill-gray-200 text-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <span className="text-gray-500">{t("common.selectRating")}</span>
                    )}
                </div>

                <div className="flex items-center gap-1">
                    {selectedRating && (
                        <span
                            onClick={handleClear}
                            className="p-0.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-3 h-3" />
                        </span>
                    )}
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
                </div>
            </button>

            {/* Popover */}
            {isOpen && (
                <div className="absolute left-0 z-50 mt-1.5 p-3 bg-white border border-gray-100 rounded-md shadow-lg min-w-45">
                    <span className="text-[11px] font-medium text-gray-400 block mb-2">
                        {t("common.filterByRating")}
                    </span>

                    <div className="flex items-center justify-between py-1 px-1 bg-gray-50 rounded-md border border-gray-100">
                        {Array.from({ length: 5 }).map((_, index) => {
                            const starValue = index + 1;
                            const activeRating = hoverRating !== null ? hoverRating : selectedRating || 0;
                            const isFilled = starValue <= activeRating;

                            return (
                                <button
                                    key={starValue}
                                    type="button"
                                    onClick={() => handleSelect(starValue)}
                                    onMouseEnter={() => setHoverRating(starValue)}
                                    onMouseLeave={() => setHoverRating(null)}
                                    className="p-1 transition-transform hover:scale-125 focus:outline-none"
                                >
                                    <Star
                                        className={`w-5 h-5 transition-colors ${isFilled
                                                ? "fill-amber-400 text-amber-400"
                                                : "fill-gray-200 text-gray-300"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-between mt-2 text-[10px] text-gray-400">
                        <span>{t("common.oneStarUp")}</span>
                        <span>{t("common.fiveStars")}</span>
                    </div>
                </div>
            )}
        </div>
    );
};
