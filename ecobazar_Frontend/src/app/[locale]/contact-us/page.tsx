import { ContactForm } from "./_components/contact-form";
import { ContactInfo } from "./_components/contact-info";
import { ContactMap } from "./_components/contact-map";


export default function page() {
    return (
        <div className="bg-white">
            {/* Contact Cards & Form Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="flex flex-col gap-8 lg:flex-row items-start">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Map Embed */}
            <ContactMap />
        </div>
    )
}