"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface NewsPost {
    id: number;
    day: string;
    month: string;
    title: string;
    excerpt: string;
    image: string;
    href: string;
}

const posts: NewsPost[] = [
    {
        id: 1,
        day: "23",
        month: "JAN",
        title: "Curabitur porttitor orci eget neque accumsan venenatis.",
        excerpt:
            "Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque.",
        image:
            "/images/orange.svg",
        href: "#",
    },
    {
        id: 2,
        day: "23",
        month: "JAN",
        title: "Curabitur porttitor orci eget neque accumsan venenatis.",
        excerpt:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image:
            "/images/mango_juise.svg",
        href: "#",
    },
    {
        id: 3,
        day: "23",
        month: "JAN",
        title: "Curabitur porttitor orci eget neque accumsan venenatis.",
        excerpt:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image:
            "/images/frutes.svg",
        href: "#",
    },
];

function DateBadge({ day, month }: { day: string; month: string }) {
    return (
        <div className="absolute bottom-4 start-4 bg-white text-center px-3 py-2 shadow-md min-w-13">
            <span className="block text-xl font-bold text-gray-900 leading-none">
                {day}
            </span>
            <span className="block text-[11px] font-semibold text-gray-500 tracking-widest uppercase mt-0.5">
                {month}
            </span>
        </div>
    );
}

function NewsCard({ post }: { post: NewsPost }) {
    return (
        <article className="flex flex-col group shadow-xl bg-background">
            <div className="relative overflow-hidden rounded-sm px-5 pt-5">
                <Image
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    width={100}
                    height={200}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <DateBadge day={post.day} month={post.month} />
            </div>

            <div className="p-5 flex flex-col flex-1 text-start">

                <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-green-600 transition-colors duration-200">
                    {post.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {post.excerpt}
                </p>

                <a
                    href={post.href}
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-green-600 hover:gap-3 transition-all duration-200"
                >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </article>
    );
}


export default function LatestNews() {
    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-5 mx-auto">
                    Latest News
                </h2>

                <div className="w-16 h-0.5 bg-primary mx-auto mb-7" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <NewsCard key={post.id} post={post} />
                    ))}
                </div>

            </div>
        </section>
    );
}