import { Headset, Package, ShoppingBag, Truck } from "lucide-react"
import { getTranslations } from "next-intl/server"

const FeatureSection = async () => {
    const t = await getTranslations()

    const features = [
        {
            icon: <Truck />,
            title: t("features.freeShipping"),
            description: t("features.freeShippingDesc"),
        },
        {
            icon: <Headset />,
            title: t("features.support247"),
            description: t("features.support247Desc"),
        },
        {
            icon: <ShoppingBag />,
            title: t("features.securePayment"),
            description: t("features.securePaymentDesc"),
        },
        {
            icon: <Package />,
            title: t("features.moneyBack"),
            description: t("features.moneyBackDesc"),
        },
    ]

    return (
        <div className=" bg-secondary-background  w-full h-auto p-4 flex justify-center items-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-full lg:max-w-[75%] mx-auto bg-background">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className={` w-full min-h-50 text-black flex flex-col gap-5 items-start justify-around p-5 border ${idx === 0 ? "bg-primary" : ""}`}
                    >
                        <div className="rounded-full bg-background h-10 w-10 text-primary border flex justify-center items-center">
                            {feature.icon}
                        </div>
                        <div>
                            <h3>{feature.title}</h3>
                            <p className="opacity-40 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection
