import { MapPin, Mail, PhoneCall } from "lucide-react"

export const ContactInfo = () => {
    return (
        <div className="w-full space-y-6 lg:w-80 shrink-0">
            {/* Address Card */}
            <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#00b207]">
                    <MapPin className="h-6 w-6" />
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                    2715 Ash Dr. San Jose, South Dakota 83475
                </p>
            </div>

            {/* Email Card */}
            <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#00b207]">
                    <Mail className="h-6 w-6" />
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                    <p>Proxy@gmail.com</p>
                    <p>Help.proxy@gmail.com</p>
                </div>
            </div>

            {/* Phone Card */}
            <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#00b207]">
                    <PhoneCall className="h-6 w-6" />
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                    <p>(219) 555-0114</p>
                    <p>(164) 333-0487</p>
                </div>
            </div>
        </div>
    )
}