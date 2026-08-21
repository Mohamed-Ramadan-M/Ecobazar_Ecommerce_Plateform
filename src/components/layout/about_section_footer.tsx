import Image from "next/image"
import Link from "next/link"

const AboutSection = () => {
    const sections = [
        {
            title: "My Account",
            sublinks: [
                "My Account",
                "Order History",
                "Shoping Cart",
                "Wishlist",
                "Settings",
            ],
        },
        {
            title: "Helps",
            sublinks: [
                "Contact",
                "Faqs",
                "Terms & Condition",
                "Privacy Policy",
            ],
        },
        {
            title: "Proxy",
            sublinks: [
                "About",
                "Shop",
                "Product",
                "Products Details",
                "Track Order",
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
                        About Shopery
                    </h2>

                    <p className="mb-5 max-w-75 text-sm leading-6 text-white/50">
                        Morbi cursus porttitor enim lobortis molestie.
                        Duis gravida turpis dui, eget bibendum magna
                        congue nec.
                    </p>

                    <div className="flex items-center gap-3 text-sm">
                        <Link
                            href="tel:2195550114"
                            className="border-b border-primary pb-1"
                        >
                            (219) 555-0114
                        </Link>

                        <span className="text-white/50">or</span>

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
                        key={section.title}
                        className="lg:col-span-2"
                    >
                        <h2 className="mb-4 text-lg font-medium">
                            {section.title}
                        </h2>

                        <ul className="space-y-3">
                            {section.sublinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="#"
                                        className={`text-sm transition-colors text-white/50 hover:text-white `}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Instagram */}
                <div className="lg:col-span-3">
                    <h2 className="mb-4 text-lg font-medium">
                        Instagram
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