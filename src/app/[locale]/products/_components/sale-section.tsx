import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const SaleSection = () => {
    return (
        <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl relative rounded-xl overflow-hidden min-h-80 md:min-h-95 flex items-center bg-zinc-900">
                {/* Background Image */}
                <Image
                    src="/images/Discount Bannar .svg"
                    alt="Sale of the month background"
                    fill
                    priority
                    className="object-cover object-right pointer-events-none"
                />

                {/* Content Container */}
                <div className="relative z-10 p-6 sm:p-10 md:p-12 max-w-lg flex flex-col items-start gap-4 text-white">
                    {/* Subtitle */}
                    <span className="text-xs sm:text-sm font-semibold tracking-wider text-gray-300 uppercase">
                        Best Deals
                    </span>

                    {/* Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        Sale of the Month
                    </h2>

                    {/* Countdown Timer */}
                    <div className="flex items-center gap-2 sm:gap-3 my-2 text-center">
                        <div className="flex flex-col items-center">
                            <span className="text-xl sm:text-2xl font-bold text-emerald-500">00</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Days</span>
                        </div>
                        <span className="text-emerald-500 font-bold mb-4">:</span>

                        <div className="flex flex-col items-center">
                            <span className="text-xl sm:text-2xl font-bold text-emerald-500">02</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Hours</span>
                        </div>
                        <span className="text-emerald-500 font-bold mb-4">:</span>

                        <div className="flex flex-col items-center">
                            <span className="text-xl sm:text-2xl font-bold text-emerald-500">18</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Mins</span>
                        </div>
                        <span className="text-emerald-500 font-bold mb-4">:</span>

                        <div className="flex flex-col items-center">
                            <span className="text-xl sm:text-2xl font-bold text-emerald-500">46</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Secs</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/shop"
                        className="mt-2 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-md hover:gap-3"
                    >
                        <span>Shop Now</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SaleSection