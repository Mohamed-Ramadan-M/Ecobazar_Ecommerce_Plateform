import Image from "next/image"
import { Tag, User, MessageSquare, Link as LinkIcon } from "lucide-react"

interface BlogHeaderProps {
    title: string
    featuredImage: string
    category: string
    author: { name: string; avatar: string }
    date: string
    readTime: string
    commentsCount: number
}

export const BlogHeader = ({
    title,
    featuredImage,
    category,
    author,
    date,
    readTime,
    commentsCount,
}: BlogHeaderProps) => {
    return (
        <header className="space-y-6">
            {/* Featured Banner Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                        src={featuredImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
            </div>

            {/* Categories & Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5 text-[#00b207]">
                    <Tag className="h-4 w-4" />
                    <span className="font-medium">{category}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <User className="h-4 w-4 text-gray-400" />
                    <span>By {author.name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                    <span>{commentsCount} Comments</span>
                </div>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                {title}
            </h1>

            {/* Author Bar & Social Share */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-gray-100 py-4">
                <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                        <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900">{author.name}</h4>
                        <p className="text-xs text-gray-400">{date} • {readTime}</p>
                    </div>
                </div>

                {/* Social Share Buttons */}
                <div className="flex items-center gap-2">
                    <button type="button" aria-label="Share on Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-[#00b207]">
                        <Image src="/assets/Facebook.svg" alt="Facebook" width={16} height={16} className="h-4 w-4" />
                    </button>
                    <button type="button" aria-label="Share on Twitter" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-[#00b207]">
                        <Image src="/assets/Twitter.svg" alt="Twitter" width={16} height={16} className="h-4 w-4" />
                    </button>
                    <button type="button" aria-label="Share on Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-[#00b207]">
                        <Image src="/assets/Instagram.svg" alt="Instagram" width={16} height={16} className="h-4 w-4" />
                    </button>
                    <button type="button" aria-label="Copy link" className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-[#00b207] hover:text-white">
                        <LinkIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </header>
    )
}