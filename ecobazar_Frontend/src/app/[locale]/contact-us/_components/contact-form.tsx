"use client"
export const ContactForm = () => {
    return (
        <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 sm:p-10 shadow-sm">
            <div className="mb-8 space-y-2">
                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Just Say Hello!</h2>
                <p className="text-sm leading-relaxed text-gray-500">
                    Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
                </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                        type="text"
                        placeholder="Template Cookie"
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-[#00b207] focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="zakirsoft@gmail.com"
                        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-[#00b207] focus:outline-none"
                    />
                </div>

                {/* Message Input */}
                <textarea
                    rows={5}
                    placeholder="Hello"
                    className="w-full rounded-lg border border-gray-200 p-4 text-sm text-gray-900 focus:border-[#00b207] focus:outline-none resize-none"
                />

                {/* Subject Input */}
                <input
                    type="text"
                    placeholder="Subjects"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-[#00b207] focus:outline-none"
                />

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="rounded-full bg-[#00b207] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#009e06] shadow-sm"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}