import { AboutTestimonials } from "./_components/about-client-reviews"
import { AboutDelivery } from "./_components/about-delivary"
import { AboutFeatures } from "./_components/about-feature"
import { AboutHero } from "./_components/about-hero"
import { AboutPartners } from "./_components/about-parteners"
import { AboutTeam } from "./_components/about-team"



export const page = () => {

    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <AboutFeatures />
            <AboutDelivery />
            <AboutTeam />
            <AboutTestimonials />
            <AboutPartners />
        </main>
    )
}

export default page