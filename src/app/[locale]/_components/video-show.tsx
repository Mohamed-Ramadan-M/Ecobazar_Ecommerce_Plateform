"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const t = useTranslations()
    return (
        <section className="w-full px-4 pt-16 sm:pt-20">
            <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden">

                    {!isPlaying ? (
                        <div
                            onClick={() => setIsPlaying(true)}
                            className="relative cursor-pointer group"
                        >
                            <Image
                                src={`/images/LGF33NN4B8U-maxresdefault.jpg`}
                                alt="Video Thumbnail"
                                className="aspect-video w-full object-cover"
                                width={400}
                                height={300}
                            />

                            <div className="absolute inset-0 bg-primary/30 " />
                            <div className="absolute inset-0 bg-black/50 " />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                                <span className="text-sm tracking-widest uppercase mb-3 opacity-80">
                                    {t("news.videoLabel")}
                                </span>
                                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold max-w-md leading-tight mb-8">
                                    {t("news.videoTitle")}
                                </h2>
                                <button className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white
                                    flex items-center justify-center
                                    hover:bg-white hover:text-black
                                    transition-all duration-300
                                    group-hover:scale-110">
                                    <Play className="w-6 h-6 fill-current ml-1" />
                                </button>
                            </div>
                        </div>

                    ) : (

                        // YouTube iframe
                        <iframe
                            src="https://www.youtube.com/embed/LGF33NN4B8U"
                            title="Farm Video"
                            allow="autoplay; fullscreen"
                            className="aspect-video w-full"
                        />

                    )}
                </div>
            </div>
        </section>
    );
}
