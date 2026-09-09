
import { BlogTopBar } from "./_components/blog-top-bar"
import { BlogSidebar } from "./_components/blog-sidebar"
import { BlogCard } from "@/components/common/blog-card"
import { BlogPagination } from "@/components/common/blog-pagination"
import { mockBlogPosts } from "@/data/blog-mock-data"

export default function BlogListPage() {
    return (
        <div className="bg-white">
            {/* Main Page Content */}
            <section className="py-8">
                <div className="container mx-auto max-w-7xl px-4">
                    <BlogTopBar />

                    <div className="flex flex-col gap-8 lg:flex-row">
                        {/* Sidebar Left */}
                        <BlogSidebar />

                        {/* Main Blog Grid Right */}
                        <div className="flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {mockBlogPosts.map((post) => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </div>

                            {/* Pagination */}
                            <BlogPagination />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}