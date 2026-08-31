"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";

type FilterSelectProps = {
    filterItems: {
        label: string;
        value: string;
    }[];
    filterName: string;
    placeholder: string;
    hasAllKey?: boolean;
};

export default function FilterSelect({
    filterItems,
    filterName,
    placeholder,
    hasAllKey,
}: FilterSelectProps) {
    const t = useTranslations();
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    const applyFilter = (value: string | null) => {
        if (!value) return;
        const newParams = new URLSearchParams(searchParams);

        if (value === "all") {
            newParams.delete(filterName);
        } else {
            newParams.set(filterName, value);
        }

        router.replace(`${pathName}?${newParams.toString()}`, { scroll: false });
    };

    return (
        <Select onValueChange={applyFilter}>
            <SelectTrigger className="w-fit">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {hasAllKey && (
                    <SelectItem value="all" className="py-2">
                        {t("common.all")}
                    </SelectItem>
                )}
                {filterItems.map((item, i) => (
                    <SelectItem key={i} value={item.value} className="py-2">
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
