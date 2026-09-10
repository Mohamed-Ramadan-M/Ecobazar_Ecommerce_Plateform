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
// import { useTranslations } from "next-intl"

const navSections: { titleKey: string; href: string; subItems?: { titleKey: string; href: string }[] }[] = [
    {
        titleKey: "Home",
        href: "#"
    },
    {
        titleKey: "Shop",
        href: "#"
    },
    {
        titleKey: "Pages",
        href: "#"
    },
    {
        titleKey: "Blog",
        href: "#"
    },
    {
        titleKey: "About Us",
        href: "/about-us"
    },
    {
        titleKey: "Contact Us",
        href: "/contact-us"
    }
]

export function NavbarSections() {
    // const t = useTranslations("navbar")

    return (
        <NavigationMenu className="container m-0 mx-auto ">
            <NavigationMenuList className="flex flex-row items-center justify-around gap-5" >
                {navSections.map((section) => (
                    <NavigationMenuItem  key={section.titleKey}>
                        {!section.subItems ? (
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href={section.href}>{section.titleKey}</Link>} />
                        ) : (
                            <>
                                <NavigationMenuTrigger className="text-xl">{section.titleKey}</NavigationMenuTrigger>
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
    // const t = useTranslations()
    return (
        <li {...props}>
            <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
                <div className="leading-none font-medium">{titleKey}</div>
                <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div></Link>} />
        </li>
    )
}

export default NavbarSections;
