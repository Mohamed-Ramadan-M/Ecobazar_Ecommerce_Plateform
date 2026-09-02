"use client"

import Link from "next/link"
import { Heart, MapPin, ShoppingBasket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useTranslations } from "next-intl"

export function MobileNav() {
    const t = useTranslations("navbar")
    const m = useTranslations("mobileNav")
    const c = useTranslations("common")
    
    const navLinks = [
        { titleKey: "home", href: "#" },
        { titleKey: "shop", href: "#" },
        { titleKey: "pages", href: "#" },
        { titleKey: "blog", href: "#" },
    ]

    const categories = [
        m("freshFruits"),
        m("freshVegetables"),
        m("meatFish"),
        m("snacks"),
        m("beverages"),
    ]

    return (
        <Sheet>
            <SheetTrigger
                render={
                    <Button
                        variant="ghost"
                        size="icon-lg"
                        aria-label="Open menu"
                        className="lg:hidden"
                    />
                }
            >
                <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent side="start" className="gap-0 p-0">
                <SheetHeader className="border-b bg-secondary-background p-4">
                    <SheetTitle className="flex items-center gap-2 text-primary">
                        <Menu className="size-5" />
                        {c("menu")}
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                        {m("siteNavigation")}
                    </SheetDescription>
                    <Field orientation="horizontal" className="mt-3">
                        <Input type="search" placeholder={t("common.search")} className="h-9 w-full rounded-full border-none bg-background shadow-none focus-visible:ring-0" />
                        <Button variant="primary" size="sm" className="h-9 rounded-full">
                            {c("search").replace('...', '')}
                        </Button>
                    </Field>
                </SheetHeader>

                <nav className="flex flex-col p-2">
                    {navLinks.map((link) => (
                        <SheetClose
                            key={link.titleKey}
                            render={
                                <Link
                                    href={link.href}
                                    className="rounded-lg px-4 py-3 text-sm font-medium capitalize transition-colors hover:bg-muted hover:text-primary"
                                />
                            }
                        >
                            {t(link.titleKey)}
                        </SheetClose>
                    ))}
                </nav>

                <div className="border-t px-2 py-2">
                    <p className="px-4 pt-2 pb-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        {c("categories")}
                    </p>
                    <nav className="flex flex-col">
                        {categories.map((category) => (
                            <SheetClose
                                key={category}
                                render={
                                    <Link
                                        href="#"
                                        className="rounded-lg px-4 py-2.5 text-sm transition-colors hover:bg-muted hover:text-primary"
                                    />
                                }
                            >
                                {category}
                            </SheetClose>
                        ))}
                    </nav>
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t p-4">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-4" />
                        {c("location")}
                    </span>
                    <div className="flex items-center gap-2">
                        <Button variant="primary" className="h-9 flex-1 rounded-full">
                            {c("signIn")}
                        </Button>
                        <Button variant="outline" className="h-9 flex-1 rounded-full">
                            {c("signUp")}
                        </Button>
                    </div>
                    <div className="flex items-center justify-around border-t pt-3">
                        <SheetClose render={<Button variant="ghost" size="icon-lg" aria-label="Wishlist" />}>
                            <Heart className="size-6" />
                        </SheetClose>
                        <div className="h-6 w-px bg-gray-300" />
                        <SheetClose render={<Button variant="ghost" size="icon-lg" aria-label="Cart" />}>
                            <ShoppingBasket className="size-6" />
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
