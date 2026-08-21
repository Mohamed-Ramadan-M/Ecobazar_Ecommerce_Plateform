import Image from "next/image"
import AboutSection from "./about_section_footer"
import CopyRight from "./copy-right"

const BottomSectionFooter = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <Image
                src="/images/Footer_bg.svg"
                alt="bottom section footer background "
                fill
                loading="lazy"
                className=" object-cover object-center transition-transform duration-500 group-hover:scale-105 "
            />
            <Image
                src="/images/Left_footer_bg.svg"
                alt="left footer background"
                loading="lazy"
                className=" absolute start-0 hidden h-auto lg:block"
                width={280}
                height={300}
            />
            <Image
                src="/images/right_footer_bg.svg"
                alt="right footer background"
                loading="lazy"
                className="absolute end-0 hidden h-auto lg:block"
                width={215}
                height={300}
            />
            <div className=" relative z-10 mx-auto w-full">
                <AboutSection />
                <CopyRight />
            </div>

        </div>
    )
}

export default BottomSectionFooter