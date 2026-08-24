"use client"
import { ProductCard } from "@/components/common/products-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            price: 48,
            rating: 4.5,
            image: '/images/Image-1.svg',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            price: 35,
            rating: 3.4,
            image: '/images/Image-2.svg',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            price: 89,
            rating: 3.1,
            image: '/images/Image-3.svg',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            price: 35,
            rating: 5,
            image: '/images/Image-4.svg',
        },
        {
            id: 5,
            name: 'Focus Card Tray',
            price: 64,
            rating: 2.6,
            image: '/images/Image-5.svg',
        },
        {
            id: 6,
            name: 'Focus Multi-Pack',
            price: 39,
            rating: 4.3,
            image: '/images/Image-6.svg',
        },
        {
            id: 7,
            name: 'Brass Scissors',
            price: 50,
            rating: 4.3,
            image: '/images/Image-7.svg',
        },
        {
            id: 8,
            name: 'Brass Scissors',
            price: 50,
            rating: 1.7,
            image: '/images/Image-7.svg',
        }
    ]
    
    return (
        <div className="bg-secondary-background w-full flex items-center justify-center">
            <div className="flex min-h-105 max-w-300 items-center px-4 py-10 sm:px-6 lg:px-12">
                <div className="mx-auto max-w-6xl py-16 sm:px-6 sm:py-24 flex items-center flex-col lg:px-0">
                    <div className="flex flex-col justify-center items-center my-5 gap-3">
                        <h1 className="text-3xl font-bold text-center sm:text-4xl">Introducing Our Products</h1>
                        <span>
                            <Tabs defaultValue="all">
                                <TabsList variant="line">
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="frutes">Fruits</TabsTrigger>
                                    <TabsTrigger value="Vegetable">Vegetable</TabsTrigger>
                                    <TabsTrigger value="protein">Meat & Fish</TabsTrigger>
                                    <TabsTrigger value="viewAll">View All</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </span>
                    </div>
                    <div className="w-full flex justify-end items-center my-3">
                        <Link href="en/products" className="text-primary">View All <ArrowRight className="inline" /> </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
        
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Products