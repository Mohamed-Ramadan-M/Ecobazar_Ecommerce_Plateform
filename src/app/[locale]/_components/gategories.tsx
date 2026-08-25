
import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import Image from "next/image"


const Gategories = () => {
    return (
        <section className="w-full py-20 flex flex-wrap justify-center items-center gap-6 sm:gap-y-5 container">
            <div className="relative mx-auto w-full max-w-sm pt-0 rounded-2xl">
                <Image
                    src="/images/milk.svg"
                    alt="Event cover"
                    loading="lazy"
                    className="relative z-20 aspect-video w-full  "
                    width={100}
                    height={100}
                />
                <div className="absolute top-2 z-20 flex flex-col gap-0 w-[60%] p-3 sm:p-5">
                    <CardTitle className="text-xl font-bold text-background sm:text-2xl md:text-3xl">100% Fresh Cow Milk</CardTitle>
                    <CardDescription className="text-gray-300 mb-2 sm:mb-5">
                        Starting at <span className="text-primary-foreground "> $14.99</span>
                    </CardDescription>
                    <Button className="flex items-center gap-3 max-w-[75%]" variant="secondary">
                        Shop now
                        <span>→</span>
                    </Button>
                </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm pt-0 rounded-2xl ">
                <Image
                    src="/images/soda.svg"
                    alt="Event cover"
                    loading="lazy"
                    className="relative z-20 aspect-video w-full  "
                    width={100}
                    height={100}
                />
                <div className="absolute top-2 end-0 z-20 flex flex-col gap-0 w-[60%] p-3 sm:p-5">
                    <CardDescription className="text-black ">
                        Drink Sale
                    </CardDescription>
                    <CardTitle className="text-xl font-bold text-black mb-2 sm:mb-5 sm:text-2xl md:text-3xl">Water & Soft Drink</CardTitle>
                    <Button className="flex items-center gap-3 max-w-[75%]" variant="secondary">
                        Shop now
                        <span>→</span>
                    </Button>
                </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm pt-0 rounded-2xl">
                <Image
                    src="/images/breakfast.svg"
                    alt="Event cover"
                    loading="lazy"
                    className="relative z-20 aspect-video w-full  "
                    width={100}
                    height={100}
                />
                <div className="absolute top-2 z-20 flex flex-col gap-0 w-[60%] p-3 sm:p-5">
                    <CardDescription className="text-black ">
                        100% Organic 
                    </CardDescription>
                    <CardTitle className="text-xl font-bold text-black mb-2 sm:mb-5 sm:text-2xl md:text-3xl">Quick Breakfast</CardTitle>
                    <Button className="flex items-center gap-3 max-w-[75%]" variant="secondary">
                        Shop now
                        <span>→</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Gategories