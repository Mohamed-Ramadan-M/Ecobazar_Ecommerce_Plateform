"use client"

export const BlogCommentForm = () => {
    return (
        <section className="space-y-6 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Leave a Comment</h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label htmlFor="full-name" className="text-xs font-medium text-gray-700">Full Name</label>
                        <input
                            id="full-name"
                            type="text"
                            placeholder="Full name"
                            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#00b207] focus:outline-none"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="email-address" className="text-xs font-medium text-gray-700">Email</label>
                        <input
                            id="email-address"
                            type="email"
                            placeholder="Email address"
                            className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-[#00b207] focus:outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label htmlFor="comment-message" className="text-xs font-medium text-gray-700">Message</label>
                    <textarea
                        id="comment-message"
                        rows={4}
                        placeholder="Write your comment here..."
                        className="w-full rounded-lg border border-gray-200 p-4 text-sm focus:border-[#00b207] focus:outline-none resize-none"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="save-info"
                        className="h-4 w-4 rounded border-gray-300 text-[#00b207] focus:ring-[#00b207]"
                    />
                    <label htmlFor="save-info" className="text-xs text-gray-600">
                        Save my name and email in this browser for the next time I comment.
                    </label>
                </div>

                <button
                    type="submit"
                    className="rounded-full bg-[#00b207] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#009e06]"
                >
                    Post Comments
                </button>
            </form>
        </section>
    )
}