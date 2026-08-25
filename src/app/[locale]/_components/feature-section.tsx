import { Headset, Package, ShoppingBag, Truck } from "lucide-react"

const features = [
    {
        icon: <Truck />,
        title: "Free shipping",
        description: "Free shipping with discount",
    },
    {
        icon: <Headset />,
        title: "Great support 24/7",
        description: "Instant access to contact",
    },
    {
        icon: <ShoppingBag />,
        title: "100% Secure Payment",
        description: "We ensure your money is safe",
    },
    {
        icon: <Package />,
        title: "Money-Back Guarantee",
        description: "30 days money-back guarantee",
    },
]

const FeatureSection = () => {
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