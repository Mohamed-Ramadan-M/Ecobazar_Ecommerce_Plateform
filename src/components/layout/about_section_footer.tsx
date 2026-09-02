"use client"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

const AboutSection = () => {
    const t = useTranslations("footer")
    const c = useTranslations("common")

    const sections = [
        {
            titleKey: "myAccount",
            sublinks: [
                { key: "myAccount" },
                { key: "orderHistory" },
                { key: "shoppingCart" },
                { key: "wishlist" },
                { key: "settings" },
            ],
        },
        {
            titleKey: "helps",
            sublinks: [
                { key: "contact" },
                { key: "faqs" },
                { key: "termsCondition" },
                { key: "privacyPolicy" },
            ],
        },
        {
            titleKey: "proxy",
            sublinks: [
                { key: "about" },
                { key: "shop" },
                { key: "product" },
                { key: "productsDetails" },
                { key: "trackOrder" },
            ],
        },
    ]

    const instagramImages = [
        "/images/instagram-1.svg",
        "/images/instagram-2.svg",
        "/images/instagram-3.svg",
        "/images/instagram-4.svg",
        "/images/instagram-5.svg",
        "/images/instagram-6.svg",
        "/images/instagram-7.svg",
        "/images/instagram-8.svg",
    ]

    return (
        <section className=" py-10 text-white container mx-auto">
            <div className="mx-auto grid max-w-300 grid-cols-1 gap-8 px-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">

                {/* About Shopery */}
                <div className="lg:col-span-3">
                    <h2 className="mb-4 text-lg font-medium">
                        {t("aboutShopery")}
                    </h2>

                    <p className="mb-5 max-w-75 text-sm leading-6 text-white/50">
                        {t("aboutDescription")}
                    </p>

                    <div className="flex items-center gap-3 text-sm">
                        <Link
                            href="tel:2195550114"
                            className="border-b border-primary pb-1"
                        >
                            (219) 555-0114
                        </Link>

                        <span className="text-white/50">{c("or")}</span>

                        <Link
                            href="mailto:Proxy@gmail.com"
                            className="border-b border-primary pb-1"
                        >
                            Proxy@gmail.com
                        </Link>
                    </div>
                </div>

                {/* My Account / Helps / Proxy */}
                {sections.map((section) => (
                    <div
                        key={section.titleKey}
                        className="lg:col-span-2"
                    >
                        <h2 className="mb-4 text-lg font-medium">
                            {t(section.titleKey)}
                        </h2>

                        <ul className="space-y-3">
                            {section.sublinks.map((link) => (
                                <li key={link.key}>
                                    <Link
                                        href="#"
                                        className={`text-sm transition-colors text-white/50 hover:text-white `}
                                    >
                                        {t(link.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Instagram */}
                <div className="lg:col-span-3">
                    <h2 className="mb-4 text-lg font-medium">
                        {t("instagram")}
                    </h2>

                    <div className="grid grid-cols-4 gap-2">
                        {instagramImages.map((image, index) => (
                            <div
                                key={image}
                                className="relative aspect-square overflow-hidden rounded-md"
                            >
                                <Image
                                    src={image}
                                    alt={`Instagram ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutSection
