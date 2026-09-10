import { SlidersHorizontal } from "lucide-react"

export const BlogTopBar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full bg-[#00b207] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#009e06]"
                >
                    <span>Filter</span>
                    <SlidersHorizontal className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Sort by:</span>
                    <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00b207]">
                        <option value="latest">Latest</option>
                        <option value="oldest">Oldest</option>
                        <option value="popular">Most Popular</option>
                    </select>
                </div>
            </div>

            <div className="text-sm font-medium text-gray-600">
                <span className="font-bold text-gray-900">52</span> Results Found
            </div>
        </div>
    )
}