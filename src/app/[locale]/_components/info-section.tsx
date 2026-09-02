import Image from "next/image"
import { getTranslations } from "next-intl/server"


export const InfoSection = async () => {
    const t = await getTranslations()
    return (
        <div className="relative w-full overflow-hidden">
            <Image
                src="/images/BG.svg"
                alt="Fresh organic vegetables"
                fill
                priority
                className="object-cover object-center"
            />
            <div className="relative z-10 flex flex-wrap justify-center items-center w-full gap-4 sm:gap-5 px-4 py-16 sm:py-24 lg:py-32">
                <div className=" flex flex-col justify-center items-center py-8 px-8 sm:py-10 sm:px-13 bg-white/1 backdrop-invert backdrop-opacity-10 rounded-xl w-full max-w-60 sm:w-auto sm:min-w-65">
                    <p className="text-4xl sm:text-5xl text-primary">37+</p>
                    <p className="text-background">{t("info.yearsWork")}</p>
                </div>
                <div className=" flex flex-col justify-center items-center py-8 px-8 sm:py-10 sm:px-13 bg-white/1 backdrop-invert backdrop-opacity-10 rounded-xl w-full max-w-60 sm:w-auto sm:min-w-65">
                    <p className="text-4xl sm:text-5xl text-primary">500k+</p>
                    <p className="text-background">{t("info.happyCustomer")}</p>
                </div>
                <div className=" flex flex-col justify-center items-center py-8 px-8 sm:py-10 sm:px-13 bg-white/1 backdrop-invert backdrop-opacity-10 rounded-xl w-full max-w-60 sm:w-auto sm:min-w-65">
                    <p className="text-4xl sm:text-5xl text-primary">28</p>
                    <p className="text-background">{t("info.qualifiedTeam")}</p>
                </div>
                <div className=" flex flex-col justify-center items-center py-8 px-8 sm:py-10 sm:px-13 bg-white/1 backdrop-invert backdrop-opacity-10 rounded-xl w-full max-w-60 sm:w-auto sm:min-w-65">
                    <p className="text-4xl sm:text-5xl text-primary">750k+</p>
                    <p className="text-background">{t("info.monthlyOrders")}</p>
                </div>
            </div>
        </div>
    )
}
export default InfoSection
