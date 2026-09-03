// src/components/about/about-hero.tsx
import Image from "next/image"

export const AboutHero = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            100% Trusted <br />
                            Organic Food Store
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Morbi lobortiss rhoncus dui. Nullam ut lacus a libero commodo pulvinar.
                            Vivamus id sem tristique, imperdiet mi vel, molestie eros. Donec egestas
                            iaculis mollis. Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas.
                        </p>
                    </div>
                    <div className="relative h-80 md:h-105 w-full rounded-2xl overflow-hidden shadow-md">
                        <Image
                            src="/images/about/about-hero.svg"
                            alt="Organic Farmer holding fresh produce"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}