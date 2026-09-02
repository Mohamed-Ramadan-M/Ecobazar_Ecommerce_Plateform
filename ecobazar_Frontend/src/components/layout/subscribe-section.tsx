"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useTranslations } from "next-intl"

const SubscribeSection = () => {
    const t = useTranslations("footer")
    const c = useTranslations("common")
    return (
        <section className="bg-secondary-background flex items-end">
            <div className=" w-full  py-4 border-t border-black/20">
                <div className="container mx-auto flex flex-col items-center justify-around gap-4 text-center md:flex-row md:text-start">
                    <span className="shrink-0">
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={160}
                            height={60}
                            priority
                            className="h-auto w-32 sm:w-40"
                        />
                    </span>
                    <span>
                        <h1 className="font-bold text-xl sm:text-2xl">{t("subscribeNewsletter")}</h1>
                        <p className="text-sm opacity-60 font-light sm:text-base">{t("newsletterDesc")}</p>
                    </span>
                    <div className="flex w-full max-w-95 flex-col gap-2 sm:relative sm:block">
                        <Input
                            type="email"
                            placeholder={t("emailPlaceholder")}
                            className="h-9 w-full rounded-full border-none bg-background ps-4 shadow-none focus-visible:ring-0 sm:pe-31.25"
                        />

                        <Button
                            variant="primary"
                            className="h-9 w-full rounded-full sm:absolute sm:end-e-0 sm:top-0 sm:w-28.75"
                        >
                            {c("subscribe")}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection
