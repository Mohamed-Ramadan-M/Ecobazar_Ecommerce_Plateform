import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"


export const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            href: '#',
            price: '$48',
            imageSrc: '/images/Image-1.svg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc: '/images/Image-2.svg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            href: '#',
            price: '$89',
            imageSrc: '/images/Image-3.svg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: '#',
            price: '$35',
            imageSrc: '/images/Image-4.svg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'Focus Card Tray',
            href: '#',
            price: '$64',
            imageSrc: '/images/Image-5.svg',
            imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
        },
        {
            id: 6,
            name: 'Focus Multi-Pack',
            href: '#',
            price: '$39',
            imageSrc: '/images/Image-6.svg',
            imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
        },
        {
            id: 7,
            name: 'Brass Scissors',
            href: '#',
            price: '$50',
            imageSrc: '/images/Image-7.svg',
            imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
        },
        {
            id: 8,
            name: 'Brass Scissors',
            href: '#',
            price: '$50',
            imageSrc: '/images/Image-7.svg',
            imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
        }
    ]
    return (
        <div className="bg-secondary-background w-full flex items-center justify-center">
            <div className=" flex min-h-105 max-w-300 items-center px-4 py-10 sm:px-6 lg:px-12">
                <div className=" mx-auto max-w-6xl py-16 sm:px-6 sm:py-24 flex items-center flex-col  lg:px-0">
                    <div className="flex flex-col justify-center items-center my-5 gap-3">
                        <h1 className="text-3xl font-bold text-center sm:text-4xl">Introducing Our Products</h1>
                        <span className="w-full max-w-full overflow-x-auto">
                            <Tabs defaultValue="overview">
                                <TabsList variant="line">
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="frutes">frutes</TabsTrigger>
                                    <TabsTrigger value="Vegetable">Vegetable</TabsTrigger>
                                    <TabsTrigger value="proten">Meat & Fish</TabsTrigger>
                                    <TabsTrigger value="viewall">View All</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
                        {products.map((product) => (
                            <Link key={product.id} href={product.href} className="group bg-background border">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    width={100}
                                    height={160}
                                    className=" w-full  object-cover group-hover:opacity-75 "
                                />
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products