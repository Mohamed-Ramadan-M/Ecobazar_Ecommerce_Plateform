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

const navSections: { title: string; href: string; subItems?: { title: string; href: string }[] }[] = [
    {
        title: "home",
        href: "#"
    },
    {
        title: "shop",
        href: "#"
    },
    {
        title: "pages",
        href: "#"
    },
    {
        title: "blog",
        href: "#"
    }
]

export function NavbarSections() {
        const t = useTranslations("navbar")

    return (
        <NavigationMenu className="container m-0 mx-auto ">
            <NavigationMenuList className="flex flex-row items-center justify-around gap-5" >
                <NavigationMenuItem >
                    <NavigationMenuTrigger className="bg-primary text-md">{t("allcategories")}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-96">
                                <ListItem  href="#" title={t("home")} />
                                <ListItem  href="#" title="page" />
                                <ListItem  href="#" title="dddd" />
                                <ListItem  href="#" title="ffff" />
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {navSections.map((section) => (
                    <NavigationMenuItem  key={section.title}>
                        {!section.subItems ? (
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href={section.href}>{t(section.title)}</Link>} />
                        ) : (
                            <>
                                <NavigationMenuTrigger className="text-xl">{t(section.title)}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-96">
                                        {section.subItems?.map((subItem) => (
                                            <ListItem key={subItem.title} href={subItem.href} title={subItem.title} />
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
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
                <div className="leading-none font-medium">{title}</div>
                <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div></Link>} />
        </li>
    )
}

export default NavbarSections;