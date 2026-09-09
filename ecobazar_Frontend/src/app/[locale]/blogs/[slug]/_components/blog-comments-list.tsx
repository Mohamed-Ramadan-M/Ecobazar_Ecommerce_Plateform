import Image from "next/image"
import { CommentItem } from "@/types/blog.type"

export const BlogCommentsList = ({ comments }: { comments: CommentItem[] }) => {
    return (
        <section className="space-y-6 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">Comments</h3>

            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4 border-b border-gray-100 pb-6 last:border-0">
                        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-gray-100">
                            <Image src={comment.avatar} alt={comment.author} fill className="object-cover" />
                        </div>

                        <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-semibold text-gray-900">{comment.author}</h4>
                                <span className="text-xs text-gray-400">{comment.date}</span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                {comment.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-2">
                <button
                    type="button"
                    className="rounded-full border border-gray-200 px-6 py-2.5 text-xs font-semibold text-gray-700 transition-colors hover:border-[#00b207] hover:text-[#00b207]"
                >
                    Load More
                </button>
            </div>
        </section>
    )
}