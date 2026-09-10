// src/components/about/about-testimonials.tsx
import Image from "next/image"
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
    {
        name: "Robert Fox",
        role: "Customer",
        avatar: "/images/about/image.svg",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.",
        rating: 5,
    },
    {
        name: "Dianne Russell",
        role: "Customer",
        avatar: "/images/about/image-1.svg",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.",
        rating: 5,
    },
    {
        name: "Eleanor Pena",
        role: "Customer",
        avatar: "/images/about/image-2.svg",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.",
        rating: 5,
    },
]

export const AboutTestimonials = () => {
    return (
        <section className="py-16 bg-gray-100/60">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Client Testimonial
                    </h2>
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#00b207] hover:text-[#00b207] transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#00b207] text-white flex items-center justify-center hover:bg-[#009e06] transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-between">
                            <div>
                                <Quote className="w-8 h-8 text-emerald-200 mb-3 fill-emerald-100" />
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-6">
                                    {item.text}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                        <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
                                        <p className="text-xs text-gray-400">{item.role}</p>
                                    </div>
                                </div>

                                <div className="flex text-amber-400">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}