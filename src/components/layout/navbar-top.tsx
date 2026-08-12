'use client'
import Link from "next/link"
import { NativeSelect, NativeSelectOption } from "../ui/native-select"
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Select } from "../ui/select"
import { MapPin } from "lucide-react"

export const NavbarHeaders = () => {
    const items = [
        { label: "en", value: "en" },
        { label: "ar", value: "ar" },
    ]
    return (
        <div className="bg-foreground text-background">
            <div className="container m-0 mx-auto text-sm opacity-40">
                <div className="flex flex-wrap items-center justify-around">
                    <span className="flex gap-1 items-center"> 
                        <MapPin />
                        <p>Location</p>
                    </span>
                    <span className="flex flex-row items-center gap-3">
                        <Select items={items} defaultValue="en">
                            <SelectTrigger className="border-0 ">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>lang</SelectLabel>
                                    {items.map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="w-px h-6 bg-gray-300" />
                        <span className="flex gap-1">
                            <Link href="#">Sign in </Link>
                            /
                            <Link href="#">Sign UP </Link>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavbarHeaders;
