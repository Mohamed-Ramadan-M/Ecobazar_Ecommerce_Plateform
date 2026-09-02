'use client'
import Link from "next/link"
import { MapPin } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"

export const NavbarHeaders = () => {
    const c = useTranslations("common")
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value
        router.replace(pathname, { locale: newLocale })
    }

    return (
        <div className="hidden bg-foreground text-background md:block">
            <div className="container m-0 mx-auto text-sm opacity-40">
                <div className="flex flex-wrap items-center justify-around">
                    <span className="flex gap-1 items-center"> 
                        <MapPin />
                        <p>{c("location")}</p>
                    </span>
                    <span className="flex flex-row items-center gap-3">
                        <select
                            value={locale}
                            onChange={handleLanguageChange}
                            className="border-0 bg-transparent text-sm cursor-pointer outline-none"
                        >
                            <option value="en">EN</option>
                            <option value="ar">AR</option>
                        </select>
                        <div className="w-px h-6 bg-gray-300" />
                        <span className="flex gap-1">
                            <Link href="#">{c("signIn")} </Link>
                            /
                            <Link href="#">{c("signUp")} </Link>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NavbarHeaders;
