
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getTranslations } from "next-intl/server"


const Deals = async () => {
  const t = await getTranslations()
  return (
    <section className=" w-full bg-secondary-background">
      <div className="grid grid-cols-1 items-center gap-8 container mx-auto pt-15 lg:grid-cols-3">
        <div className="hidden col-span-1 items-start justify-center lg:flex">
          <Image
            src={"/images/vegetapols.svg"}
            alt="vegetabols and frutes"
            loading="lazy"
            width={800}
            height={300}
            className="h-auto w-full max-w-80"
          />
        </div>
        <div className="order-first col-span-1 flex flex-col justify-center items-center gap-5 px-4 pb-15 lg:order-none">
          <div className="text-center ">
            <p className="font-bold text-primary">{t("deals.bestDeals")}</p>
            <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl" >{t("deals.title")}</h1>
          </div>
          <div className="flex flex-wrap flex-row justify-center items-center gap-2 sm:w-full sm:justify-between sm:gap-0 text-center">
            <div className="bg-background py-5 px-7">
              <p className="text-3xl text-primary">00</p>
              <p className="text-black opacity-70">{t("deals.days")}</p>
            </div>
            <div className="bg-background py-4 px-7">
              <p className="text-3xl text-primary">02</p>
              <p className="text-black opacity-70">{t("deals.hours")}</p>
            </div>
            <div className="bg-background py-4 px-7">
              <p className="text-3xl text-primary">18</p>
              <p className="text-black opacity-70">{t("deals.mins")}</p>
            </div>
            <div className="bg-background py-4 px-7">
              <p className="text-3xl text-primary">46</p>
              <p className="text-black opacity-70">{t("deals.secs")}</p>
            </div>
          </div>
          <div>
            <Button variant="primary" className="px-10">
              {t("common.shopNow")}
              <span>→</span>
            </Button>
          </div>
        </div>
        <div className="hidden col-span-1 justify-center items-end lg:flex">
          <Image
            src={"/images/man.svg"}
            alt="a man with vegetabols and frutes"
            loading="lazy"
            width={800}
            height={300}
            className="h-auto w-full max-w-80"
          />
        </div>
      </div>
    </section>
  )
}

export default Deals
