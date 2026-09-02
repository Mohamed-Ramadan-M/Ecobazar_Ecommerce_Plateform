
import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { getTranslations } from "next-intl/server"


const Gategories = async () => {
    const t = await getTranslations()
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
                    <CardTitle className="text-xl font-bold text-background sm:text-2xl md:text-3xl">{t("categories.freshMilk")}</CardTitle>
                    <CardDescription className="text-gray-300 mb-2 sm:mb-5">
                        {t("categories.startingAt")} <span className="text-primary-foreground "> $14.99</span>
                    </CardDescription>
                    <Button className="flex items-center gap-3 max-w-[75%]" variant="secondary">
                        {t("common.shopNow")}
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
                        {t("categories.drinkSale")}
                    </CardDescription>
                    <CardTitle className="text-xl font-bold text-black mb-2 sm:mb-5 sm:text-2xl md:text-3xl">{t("categories.waterDrink")}</CardTitle>
                    <Button className="flex items-center gap-3 max-w-[75%]" variant="secondary">
                        {t("common.shopNow")}
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
                        {t("categories.organic")}
                    </CardDescription>
                    <CardTitle className="text-xl font-bold text-black mb-2 sm:mb-5 sm:text-2xl md:text-3xl">{t("categories.quickBreakfast")}</CardTitle>
                    <Button className="flex items-center gap-3 max-w-[75%]" variant="secondary">
                        {t("common.shopNow")}
                        <span>→</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Gategories
