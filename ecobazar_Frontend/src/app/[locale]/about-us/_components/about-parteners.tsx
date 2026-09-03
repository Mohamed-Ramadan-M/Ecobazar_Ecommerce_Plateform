// src/components/about/about-partners.tsx
import Image from "next/image"

const partnerLogos = [
    { name: "Steps", src: "/images/about/logo-1.svg" },
    { name: "Mango", src: "/images/about/logo-2.svg" },
    { name: "Food", src: "/images/about/logo-3.svg" },
    { name: "Book Off", src: "/images/about/logo-4.svg" },
    { name: "Series", src: "/images/about/logo-5.svg" },
]

export const AboutPartners = () => {
    return (
        <section className="py-10 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-wrap items-center justify-between gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                    {partnerLogos.map((logo, idx) => (
                        <div key={idx} className="relative h-8 w-24">
                            <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}