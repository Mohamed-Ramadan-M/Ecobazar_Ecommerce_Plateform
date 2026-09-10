import Image from "next/image"
import Link from "next/link"
import { Tag, User, MessageSquare, ArrowRight, Play } from "lucide-react"
import { BlogPost } from "@/types/blog.type"

export const BlogCard = ({ post }: { post: BlogPost }) => {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg">
            {/* Image & Date Badge */}
            <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Date Overlay Badge */}
                <div className="absolute left-4 top-4 flex flex-col items-center rounded-lg bg-white px-3 py-1.5 text-center shadow-md">
                    <span className="text-base font-bold text-gray-900">{post.date}</span>
                    <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                        {post.month}
                    </span>
                </div>

                {/* Video Icon overlay if applicable */}
                {post.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#00b207] shadow-lg backdrop-blur-sm transition-transform group-hover:scale-110">
                            <Play className="h-5 w-5 fill-[#00b207] ml-0.5" />
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
                {/* Meta Bar */}
                <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <Tag className="h-3.5 w-3.5 text-gray-400" />
                        <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-gray-400" />
                        <span>By {post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageSquare className="h-3.5 w-3.5 text-gray-400" />
                        <span>{post.commentsCount} Comments</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-[#00b207]">
                    {post.title}
                </h3>

                {/* Read More Link */}
                <div className="mt-auto pt-2">
                    <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#00b207] hover:underline"
                    >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </article>
    )
}