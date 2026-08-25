import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const MainScreen = () => {

        return (
            <div className="w-full">
                <Carousel className="w-full">
                    <CarouselContent>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <section className="relative w-full overflow-hidden bg-white min-h-[90vh] lg:h-screen flex flex-col justify-between">

                                    {/* Main Content Container */}
                                    <div className="mx-auto flex w-full max-w-7xl flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 py-20 lg:px-12 my-auto gap-8 lg:gap-0">

                                        {/* Left Arrow (Desktop/Tablet) */}
                                        <CarouselPrevious className="hidden sm:flex absolute left-4 z-10" />

                                        {/* Image Section */}
                                        <div className="flex w-full lg:w-1/2 items-center justify-center px-4">
                                            <Image
                                                src="/images/Image.svg"
                                                alt="Fresh and healthy organic food"
                                                width={650}
                                                height={450}
                                                priority={index === 1}
                                                className="h-auto w-full max-w-70 sm:max-w-md lg:max-w-150 object-contain"
                                            />
                                        </div>

                                        {/* Text Section */}
                                        <div className="flex w-full lg:w-1/2 flex-col items-center lg:items-start text-center lg:text-left justify-center gap-4 px-4 lg:pl-12">
                                            <span className="text-xs font-medium uppercase tracking-widest text-green-600">
                                                Welcome to Shopery
                                            </span>

                                            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-green-950 lg:text-5xl">
                                                Fresh & Healthy
                                                <br />
                                                Organic Food
                                            </h1>

                                            <p className="text-sm leading-6 text-gray-500 max-w-md">
                                                Free shipping on all your order. We deliver, you enjoy
                                            </p>

                                            <button className="flex items-center gap-3 rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-700 shadow-sm">
                                                Shop now
                                                <span>→</span>
                                            </button>
                                        </div>

                                        {/* Discount Badge */}
                                        <div className="absolute right-6 top-15 sm:left-[48%] sm:top-[28%] sm:-translate-x-1/2 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-orange-500 text-center text-white shadow-md z-10">
                                            <div>
                                                <p className="text-base sm:text-lg font-bold leading-none">70%</p>
                                                <p className="text-[8px] sm:text-[9px] font-medium uppercase">Off</p>
                                            </div>
                                        </div>

                                        {/* Right Arrow (Desktop/Tablet) */}
                                        <CarouselNext className="hidden sm:flex absolute right-4 z-10" />
                                    </div>

                                    {/* Carousel Dots Indicator */}
                                    <div className="flex justify-center gap-2 pb-5 min-my-5 my-10 ">
                                        {Array.from({ length: 3 }).map((_, dotIndex) => (
                                            <span
                                                key={dotIndex}
                                                className={`h-2 w-2 rounded-full transition-all duration-300 ${dotIndex === index ? "bg-green-600 w-6" : "bg-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                </section>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        );
    }


export default MainScreen