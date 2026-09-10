// src/components/about/about-features.tsx
import Image from "next/image"
import { Leaf, Headphones, MessageSquare, ShieldCheck, Truck, Sparkles } from "lucide-react"

const features = [
    {
        icon: Leaf,
        title: "100% Organic food",
        description: "100% healthy & fresh food",
    },
    {
        icon: Headphones,
        title: "Great Support 24/7",
        description: "Instant access to contact",
    },
    {
        icon: MessageSquare,
        title: "Customer Feedback",
        description: "Our client's feedback",
    },
    {
        icon: ShieldCheck,
        title: "100% Secure Payment",
        description: "We ensure your money is safe",
    },
    {
        icon: Truck,
        title: "Free Shipping",
        description: "Free shipping on all order",
    },
    {
        icon: Sparkles,
        title: "100% Organic Food",
        description: "100% organic & fresh food",
    },
]

export const AboutFeatures = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-87.5 lg:h-120 w-full rounded-2xl overflow-hidden ">
                        <Image
                            src="/images/about/feature-section.svg"
                            alt="Farmer with fresh vegetables"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                            100% Trusted Organic Food Store
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pellentesque a massa egestas, sodales sapien egestas, porta tellus.
                            Pellentesque sollicitudin id nunc ac semper. Ut sem eros, molestie
                            vel eros sed, convallis sodales tellus.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                            {features.map((item, idx) => {
                                const IconComponent = item.icon
                                return (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="p-3 bg-emerald-100/70 text-[#00b207] rounded-full shrink-0">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                                            <p className="text-xs text-gray-500">{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}