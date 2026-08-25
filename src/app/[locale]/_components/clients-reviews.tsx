import React from 'react'
import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Image from 'next/image'

const ClientsReviews = () => {
    return (
        <section className='w-full bg-secondary-background'>
            <div className='container mx-auto px-4  py-20 flex flex-col justify-start '>
                <p className='text-3xl font-bold text-center mb-10 sm:text-4xl'>What our Clients Says</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  px-5 w-full gap-5'>
                    <div className='col-span-1'>
                        <div className='bg-background flex flex-col justify-center items-center p-10 gap-3 rounded-3xl'>
                            <Image
                                src={"/images/Vector.svg"}
                                alt='vector'
                                loading="lazy"
                                height={50}
                                width={50}
                            />
                            <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
                        </div>
                        <div className='relative bg-secondary-background flex flex-col justify-center items-center p-5 gap-3'>
                            <span className='absolute top-0 -bottom-3 left-1/2 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-background'></span>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                            </Avatar>
                            <span className='text-center'>
                                <p className='font-bold'>Jenny Wilson</p>
                                <p className='opacity-70'>Customer</p>
                            </span>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='bg-background flex flex-col justify-center items-center p-10 gap-3 rounded-3xl'>
                            <Image
                                src={"/images/Vector.svg"}
                                alt='vector'
                                height={50}
                                width={50}
                                loading="lazy"
                            />
                            <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
                        </div>
                        <div className='relative bg-secondary-background flex flex-col justify-center items-center p-5 gap-3'>
                            <span className='absolute top-0 -bottom-3 left-1/2 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-background'></span>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                            </Avatar>
                            <span className='text-center'>
                                <p className='font-bold'>Jenny Wilson</p>
                                <p className='opacity-70'>Customer</p>
                            </span>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='bg-background flex flex-col justify-center items-center p-10 gap-3 rounded-3xl'>
                            <Image
                                src={"/images/Vector.svg"}
                                alt='vector'
                                loading="lazy"
                                height={50}
                                width={50}
                            />
                            <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
                        </div>
                        <div className='relative bg-secondary-background flex flex-col justify-center items-center p-5 gap-3'>
                            <span className='absolute top-0 -bottom-3 left-1/2 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-background'></span>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                            </Avatar>
                            <span className='text-center'>
                                <p className='font-bold'>Jenny Wilson</p>
                                <p className='opacity-70'>Customer</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsReviews