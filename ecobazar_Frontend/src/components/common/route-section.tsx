"use client"
import { ChevronRight, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from '@/i18n/navigation'
import React from 'react'

const RouteSection = () => {
    const pathname = usePathname();
    const pathSegments = pathname
        .split('/')
        .filter((segment) => segment && segment !== 'en' && segment !== 'ar');

    if (pathSegments.length === 0) {
        return null;
    }

    return (
        <section className="relative w-full min-h-25 flex items-center px-6 sm:px-12 md:px-24 overflow-hidden">
            <Image
                src="/images/Breadcrumbs .svg"
                alt="Breadcrumbs background"
                fill
                priority
                className="object-cover object-center pointer-events-none"
            />

            {/* Breadcrumb Content Overlay */}
            <div className="relative z-10 flex items-center gap-2 text-sm text-gray-400">
                <Link href="/" className="hover:text-white transition-colors">
                    <Home className="w-4 h-4 text-gray-400 hover:text-white" />
                </Link>

                <ChevronRight className="w-4 h-4 text-gray-400" />

                {pathSegments.map((segment, index) => {
                    const href = '/' + pathSegments.slice(0, index + 1).join('/');
                    const isLast = index === pathSegments.length - 1;
                    const formattedSegment = segment.replace(/-/g, ' ');

                    return (
                        <React.Fragment key={href}>
                            {isLast ? (
                                <span className="text-primary font-medium capitalize">
                                    {formattedSegment}
                                </span>
                            ) : (
                                <Link 
                                    href={href} 
                                    className="text-gray-400 hover:text-white capitalize transition-colors"
                                >
                                    {formattedSegment}
                                </Link>
                            )}

                            {!isLast && <ChevronRight className="w-4 h-4 text-gray-400" />}
                        </React.Fragment>
                    );
                })}
            </div>
        </section>
    )
}

export default RouteSection
