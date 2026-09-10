"use client"

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Heart, ShoppingBasket } from "lucide-react"
import Image from "next/image"
import { NavbarSections } from './navbar-sections'
import NavbarHeaders from './navbar-top'
import { MobileNav } from './mobile-nav'
import { useTranslations } from "next-intl"
import { useState } from "react"
import { MasterDrawer } from "../common/master-drawer"
import { toast } from "sonner"
import { Product } from "@/types/products.type"
import { redirect } from "next/dist/client/components/navigation"

export const Navbar = () => {
    const c = useTranslations("common")
    const [openShoppingCart, setOpenShoppingCart] = useState(false)
    const [openWishlist, setOpenWishlist] = useState(false)
    const onConfirmShoppingCart = () => {
        // Handle the confirm action here
        toast.success("Confirm button clicked!")
        setOpenShoppingCart(false); // Close the drawer after confirming
        redirect("/shopping-cart"); // Redirect to the shopping cart page
    }
    const onConfirmWishlist = () => {
        // Handle the confirm action here
        toast.success("Confirm button clicked!")
        setOpenWishlist(false); // Close the drawer after confirming
        redirect("/wishlist");
    }
    const cartData : Product[] = [
        {
            "id": 1,
            "name": "Red Chili",
            "price": 14.99,
            "originalPrice": undefined,
            "rating": 4,
            "image": "/images/products-item-1.svg",
            "isOutofStock": false,
            "salePercentage": undefined,
            "categoryId": 1,
            "description": "Fresh red chilies, perfect for adding spice to your dishes.",
            "stock": 150,
            "sku": "ECO-VEG-001",
            "weight": "0.5 kg",
            "dimensions": "10 x 5 x 5 cm",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 2,
            "name": "Big Potatoes",
            "price": 14.99,
            "originalPrice": undefined,
            "rating": 4,
            "image": "/images/products-item-2.svg",
            "isOutofStock": false,
            "salePercentage": undefined,
            "categoryId": 1,
            "description": "Large, fresh potatoes ideal for boiling, mashing, or frying.",
            "stock": 200,
            "sku": "ECO-VEG-002",
            "weight": "2 kg",
            "dimensions": "20 x 15 x 10 cm",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 3,
            "name": "Chinese Cabbage",
            "price": 14.99,
            "originalPrice": undefined,
            "rating": 4,
            "image": "/images/products-item-3.svg",
            "isOutofStock": false,
            "salePercentage": undefined,
            "categoryId": 1,
            "description": "Fresh Chinese cabbage, great for stir-fries and salads.",
            "stock": 120,
            "sku": "ECO-VEG-003",
            "weight": "1 kg",
            "dimensions": "30 x 15 x 15 cm",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
    ]
    const wishListData : Product[] = [
        {
            "id": 2,
            "name": "Big Potatoes",
            "price": 14.99,
            "originalPrice": undefined,
            "rating": 4,
            "image": "/images/products-item-2.svg",
            "isOutofStock": false,
            "salePercentage": undefined,
            "categoryId": 1,
            "description": "Large, fresh potatoes ideal for boiling, mashing, or frying.",
            "stock": 200,
            "sku": "ECO-VEG-002",
            "weight": "2 kg",
            "dimensions": "20 x 15 x 10 cm",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
        {
            "id": 3,
            "name": "Chinese Cabbage",
            "price": 14.99,
            "originalPrice": undefined,
            "rating": 4,
            "image": "/images/products-item-3.svg",
            "isOutofStock": false,
            "salePercentage": undefined,
            "categoryId": 1,
            "description": "Fresh Chinese cabbage, great for stir-fries and salads.",
            "stock": 120,
            "sku": "ECO-VEG-003",
            "weight": "1 kg",
            "dimensions": "30 x 15 x 15 cm",
            "createdAt": new Date(),
            "updatedAt": new Date()
        },
    ]

    return (
        <header>
            <span >
                <NavbarHeaders />
            </span>
            <div className="container m-0 mx-auto">
                <div className="flex flex-row items-center justify-between gap-4 py-4">
                    <div className="flex min-w-0 items-center gap-1 sm:gap-3">
                        <MobileNav />
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={160}
                            height={60}
                            priority
                            className="h-auto w-32 sm:w-40 lg:w-40"
                        />
                    </div>
                    <span className="hidden lg:block">
                        <Field orientation="horizontal">
                            <Input type="search" placeholder={c("search")} className="w-90" />
                            <Button variant="primary">{c("search").replace('...', '')}</Button>
                        </Field>
                    </span>
                    <span className="flex shrink-0 flex-row items-center justify-center gap-2">
                        <MasterDrawer
                            open={openWishlist}
                            onOpenChange={setOpenWishlist}
                            data={wishListData}
                            type="wishlist"
                            trigger={
                                <Button variant="secondary" className="relative h-auto w-auto p-0">
                                    <Heart />
                                </Button>
                            }
                            submitText={"Go to My Wishlist"}
                            onConfirm={onConfirmWishlist}
                            title={"My Wishlist"}
                        />
                        <div className="w-px h-6 bg-gray-300" />
                        <MasterDrawer
                            open={openShoppingCart}
                            onOpenChange={setOpenShoppingCart}
                            data={cartData}
                            type="cart"
                            trigger={
                                <Button variant="secondary" className="relative h-auto w-auto p-0">
                                    <ShoppingBasket />
                                </Button>
                            }
                            submitText={"Checkout MY Cart"}
                            onConfirm={onConfirmShoppingCart}
                            title={"My Shopping Cart"}
                        />

                    </span>
                </div>
            </div>
            <div className="hidden bg-secondary lg:block">
                <NavbarSections />
            </div>

        </header>
    )
}
