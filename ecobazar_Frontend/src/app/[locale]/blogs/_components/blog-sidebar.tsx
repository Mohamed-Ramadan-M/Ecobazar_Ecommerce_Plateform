import Image from "next/image"
import { Search, Calendar } from "lucide-react"
import { RecentPost } from "@/types/blog.type"

const categories = [
    { name: "Fresh Fruit", count: 134 },
    { name: "Vegetables", count: 150 },
    { name: "Cooking", count: 54 },
    { name: "Snacks", count: 47 },
    { name: "Beverages", count: 43 },
    { name: "Beauty & Health", count: 38 },
    { name: "Bread & Bakery", count: 15 },
]

const tags = [
    "Healthy",
    "Low fat",
    "Vegetables",
    "Bread",
    "Kid foods",
    "Vitamins",
    "Snacks",
    "Tiffin",
    "Meat",
    "Launch",
    "Dinner",
]

const galleryImages = [
    "/images/blog/gallery-1.svg",
    "/images/blog/gallery-2.svg",
    "/images/blog/gallery-3.svg",
    "/images/blog/gallery-4.svg",
    "/images/blog/gallery-5.svg",
    "/images/blog/gallery-6.svg",
    "/images/blog/gallery-7.svg",
    "/images/blog/gallery.svg",
]

const recentPosts: RecentPost[] = [
    {
        id: "1",
        title: "Curabitur porttitor orci eget neque accumsan venenatis.",
        date: "Apr 25, 2023",
        image: "/images/blog/Image-1.png",
    },
    {
        id: "2",
        title: "Enean sollicitudin justo scelerisque nec.",
        date: "Apr 20, 2023",
        image: "/images/blog/Image-2.png",
    },
    {
        id: "3",
        title: "Quisque posuere tempus elementum.",
        date: "Apr 12, 2023",
        image: "/images/blog/Image.png",
    },
]

export const BlogSidebar = () => {
    return (
        <aside className="w-full space-y-8 lg:w-80 shrink-0">
            {/* Search Widget */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-lg border border-gray-200 py-3 pl-4 pr-10 text-sm focus:border-[#00b207] focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Top Categories */}
            <div className="border-t border-gray-100 pt-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Top Categories</h3>
                <ul className="space-y-3">
                    {categories.map((cat, idx) => (
                        <li key={idx} className="flex items-center justify-between text-sm">
                            <a href="#" className="text-gray-700 transition-colors hover:text-[#00b207]">
                                {cat.name}
                            </a>
                            <span className="text-gray-400">({cat.count})</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Popular Tags */}
            <div className="border-t border-gray-100 pt-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Popular Tag</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${tag === "Low fat"
                                    ? "bg-[#00b207] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>

            {/* Our Gallery */}
            <div className="border-t border-gray-100 pt-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Our Gallery</h3>
                <div className="grid grid-cols-4 gap-2">
                    {galleryImages.map((src, idx) => (
                        <div key={idx} className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                            <Image src={src} alt="Gallery image" fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Recently Added */}
            <div className="border-t border-gray-100 pt-6">
                <h3 className="mb-4 text-lg font-bold text-gray-900">Recently Added</h3>
                <div className="space-y-4">
                    {recentPosts.map((post) => (
                        <a key={post.id} href="#" className="group flex items-center gap-3">
                            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                <Image src={post.image} alt={post.title} fill className="object-cover" />
                            </div>
                            <div>
                                <h4 className="line-clamp-2 text-xs font-medium text-gray-900 transition-colors group-hover:text-[#00b207]">
                                    {post.title}
                                </h4>
                                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-gray-400">
                                    <Calendar className="h-3 w-3" />
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    )
}