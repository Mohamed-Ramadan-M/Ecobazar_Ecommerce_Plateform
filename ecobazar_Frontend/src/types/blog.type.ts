export interface BlogPost {
    id: string
    slug: string
    title: string
    image: string
    date: string // e.g. "18"
    month: string // e.g. "NOV"
    category: string
    author: string
    commentsCount: number
    isVideo?: boolean
}

export interface RecentPost {
    id: string
    title: string
    date: string
    image: string
}
export interface CommentItem {
    id: string
    author: string
    avatar: string
    date: string
    content: string
}

export interface SingleBlogPost {
    id: string
    slug: string
    title: string
    featuredImage: string
    category: string
    author: {
        name: string
        avatar: string
    }
    date: string
    readTime: string
    commentsCount: number
    comments: CommentItem[]
}