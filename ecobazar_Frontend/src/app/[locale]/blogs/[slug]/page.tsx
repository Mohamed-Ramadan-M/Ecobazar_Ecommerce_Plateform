
import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/data/blog-mock-data"
import { BlogHeader } from "./_components/blog-header"
import { BlogCommentForm } from "./_components/blog-comment-form"
import { BlogCommentsList } from "./_components/blog-comments-list"
import { BlogSidebar } from "../_components/blog-sidebar"
import { BlogContent } from "./_components/blog-content"

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const post = getBlogPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="bg-white">
            <section className="py-8">
                <div className="container mx-auto max-w-7xl px-4">
                    <div className="flex flex-col gap-10 lg:flex-row">
                        {/* Main Article Content Left */}
                        <main className="flex-1 space-y-10">
                            <BlogHeader
                                title={post.title}
                                featuredImage={post.featuredImage}
                                category={post.category}
                                author={post.author}
                                date={post.date}
                                readTime={post.readTime}
                                commentsCount={post.commentsCount}
                            />

                            <BlogContent/>

                            <BlogCommentForm />

                            <BlogCommentsList comments={post.comments} />
                        </main>

                        {/* Sidebar Right */}
                        <BlogSidebar />
                    </div>
                </div>
            </section>
        </div>
    )
}
