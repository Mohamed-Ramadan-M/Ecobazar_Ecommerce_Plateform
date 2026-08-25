"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useTranslations } from "next-intl"

const navSections: { titleKey: string; href: string; subItems?: { titleKey: string; href: string }[] }[] = [
    {
        titleKey: "home",
        href: "#"
    },
    {
        titleKey: "shop",
        href: "#"
    },
    {
        titleKey: "pages",
        href: "#"
    },
    {
        titleKey: "blog",
        href: "#"
    }
]

export function NavbarSections() {
    const t = useTranslations("navbar")

    return (
        <NavigationMenu className="container m-0 mx-auto ">
            <NavigationMenuList className="flex flex-row items-center justify-around gap-5" >
                <NavigationMenuItem >
                    <NavigationMenuTrigger className="bg-primary text-md">{t("allCategories")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-96 max-w-[calc(100vw-2rem)]">
                                <ListItem  href="#" titleKey="home" />
                                <ListItem  href="#" titleKey="pages" />
                                <ListItem  href="#" titleKey="shop" />
                                <ListItem  href="#" titleKey="blog" />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {navSections.map((section) => (
                    <NavigationMenuItem  key={section.titleKey}>
                        {!section.subItems ? (
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href={section.href}>{t(section.titleKey)}</Link>} />
                        ) : (
                            <>
                                <NavigationMenuTrigger className="text-xl">{t(section.titleKey)}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-96 max-w-[calc(100vw-2rem)]">
                                        {section.subItems?.map((subItem) => (
                                            <ListItem key={subItem.titleKey} href={subItem.href} titleKey={subItem.titleKey} />
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </>
                        )}

                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({
    titleKey,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; titleKey: string }) {
    const t = useTranslations()
    return (
        <li {...props}>
            <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
                <div className="leading-none font-medium">{t(titleKey)}</div>
                <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div></Link>} />
        </li>
    )
}

export default NavbarSections;
