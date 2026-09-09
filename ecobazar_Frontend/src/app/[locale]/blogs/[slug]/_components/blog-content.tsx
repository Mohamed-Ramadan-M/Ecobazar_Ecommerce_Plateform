import Image from "next/image"

export const BlogContent = () => {
    return (
        <article className="space-y-6 text-sm md:text-base leading-relaxed text-gray-600">
            <p className="font-medium text-gray-800 text-base md:text-lg">
                Maecenas lacinia tellus nec placerat sollicitudin. Quisque placerat dolor at scelerisque
                imperdiet. Phasellus luctus nec tein dolor.
            </p>

            <p>
                Mauris massa egestas, sodales sapien egestas, porta tellus. Pellentesque sollicitudin id nunc
                ac semper. Ut sem eros, molestie vel eros sed, convallis sodales tellus. Integer sed
                feugiat velit. Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
            </p>

            <p>
                Aliquam erat volutpat. Suspendisse potenti. In hac habitasse platea dictumst. Nullam
                bibendum elit odio, sed feugiat magna scelerisque nec. Sed et egestas dui, id vulputate
                felis. Ut sem eros, molestie vel eros sed, convallis sodales tellus.
            </p>

            {/* Two Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src="/images/blog/blog-8.svg"
                        alt="Fresh Oranges"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src="/images/blog/blog-9.svg"
                        alt="Sliced Mangoes"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            <p>
                Sed dictum non dui et egestas. Morbi tristique, lorem in hendrerit ultrices, justo libero
                mollis nunc, ac placerat dui tristique id. Suspendisse elementum rutrum lorem. Donec
                sollicitudin rhoncus tellus.
            </p>

            {/* In-Article Promo Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-black p-8 text-white my-8">
                <div className="relative z-10 max-w-xs space-y-3">
                    <span className="text-xs uppercase font-semibold text-amber-400 tracking-wider">
                        Summer Sale
                    </span>
                    <h3 className="text-2xl font-bold">Fresh Fruit</h3>
                    <p className="text-sm text-gray-300">
                        Up to <span className="text-amber-400 font-bold">56%</span> OFF
                    </p>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-[#00b207] px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#009e06]"
                    >
                        Shop Now
                    </button>
                </div>
                <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-80">
                    <Image
                        src="/images/frutes.svg"
                        alt="Promotional fruits"
                        fill
                        className="object-contain object-right"
                    />
                </div>
            </div>
        </article>
    )
}