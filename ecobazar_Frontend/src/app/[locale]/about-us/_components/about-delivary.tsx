// src/components/about/about-delivery.tsx
import Image from "next/image"
import { CheckCircle2, ArrowRight } from "lucide-react"

export const AboutDelivery = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
                            We Delivered, You <br />
                            Enjoy Your Order.
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Ut ut at egestas rhoncus duis. Pellentesque porta egestas tristique.
                            Vivamus id sem tristique, imperdiet mi vel, molestie eros. Donec egestas
                            iaculis mollis.
                        </p>

                        <ul className="space-y-3">
                            {[
                                "Sunt in culpa qui officia deserunt mollit anim",
                                "Nisi ut aliquip ex ea commodo consequat",
                                "Duis aute irure dolor in reprehenderit in voluptate",
                            ].map((text, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#00b207] shrink-0" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className="mt-4 inline-flex items-center gap-2 px-7 py-3 bg-[#00b207] hover:bg-[#009e06] text-white rounded-full text-sm font-semibold transition-colors shadow-md"
                        >
                            Shop Now
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="relative h-87.5 md:h-112.5 w-full flex justify-center">
                        <Image
                            src="/images/about/delivery.svg"
                            alt="Delivery person with grocery box"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}