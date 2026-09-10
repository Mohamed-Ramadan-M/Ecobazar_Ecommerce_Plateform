import { ChevronLeft, ChevronRight } from "lucide-react"

export const BlogPagination = () => {
    return (
        <div className="flex items-center justify-center gap-2 pt-10">
            <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#00b207] hover:text-[#00b207]"
            >
                <ChevronLeft className="h-4 w-4" />
            </button>

            <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00b207] text-sm font-semibold text-white"
            >
                1
            </button>

            {[2, 3, 4, 5].map((page) => (
                <button
                    key={page}
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm text-gray-600 transition-colors hover:border-[#00b207] hover:text-[#00b207]"
                >
                    {page}
                </button>
            ))}

            <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-[#00b207] hover:text-[#00b207]"
            >
                <ChevronRight className="h-4 w-4" />
            </button>
        </div>
    )
}