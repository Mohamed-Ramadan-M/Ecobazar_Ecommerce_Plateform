"use client"

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Heart, ShoppingBasket } from "lucide-react"
import Image from "next/image"
import { NavbarSections } from './navbar-sections'
import NavbarHeaders from './navbar-top'
import { MobileNav } from './mobile-nav'
import { useTranslations } from "next-intl"

export const Navbar = () => {
    const c = useTranslations("common")

    return (
        <header>
            <span >
                <NavbarHeaders />
            </span>
            <div className="container m-0 mx-auto">
                <div className="flex flex-row items-center justify-between gap-4 py-4">
                    <div className="flex min-w-0 items-center gap-1 sm:gap-3">
                        <MobileNav />
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={160}
                            height={60}
                            priority
                            className="h-auto w-32 sm:w-40 lg:w-40"
                        />
                    </div>
                    <span className="hidden lg:block">
                        <Field orientation="horizontal">
                            <Input type="search" placeholder={c("search")} className="w-90" />
                            <Button variant="primary">{c("search").replace('...', '')}</Button>
                        </Field>
                    </span>
                    <span className="flex shrink-0 flex-row items-center justify-center gap-2">
                        <Button variant="ghost" className="relative p-0">
                            <Heart className="w-6 h-6" />
                        </Button>
                        <div className="w-px h-6 bg-gray-300" />
                        <Button variant="ghost" className="relative p-0">
                            <ShoppingBasket className="w-6 h-6" />
                        </Button>
                    </span>
                </div>
            </div>
            <div className="hidden bg-secondary lg:block">
                <NavbarSections />
            </div>

        </header>
    )
}
