"use client"

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Heart, ShoppingBasket } from "lucide-react"
import Image from "next/image"
import { NavbarSections } from './navbar-sections'
import NavbarHeaders from './navbar-top'




export const Navbar = () => {

    return (
        <div>
            <span >
                <NavbarHeaders />
            </span>
            {/* TODO: Main navigation bar with Logo, Search, Cart , favorites ,and user profile */}
            <div className="container m-0 mx-auto">
                <div className="flex flex-row items-center justify-around py-4">
                    <span>
                        <Image
                            src="/images/Logo.svg"
                            alt="Logo"
                            width={160}
                            height={60}
                            priority
                        />
                    </span>
                    <span>
                        <Field orientation="horizontal">
                            <Input type="search" placeholder="Search..." className="w-90" />
                            <Button variant="primary">Search</Button>
                        </Field>
                    </span>
                    <span className="flex flex-row items-center justify-center gap-2">
                        <Button variant="ghost" className="relative p-0">
                            <Heart className="w-6 h-6" />
                        </Button>
                        <div className="w-px h-6 bg-gray-300" />
                        <Button variant="ghost" className="relative p-0">
                            <ShoppingBasket className="w-6 h-6" />
                        </Button>
                    </span>
                </div>
            </div>
            {/* TODO: Bottom navigation bar with categories and subcategories */}
            <div className="bg-secondary">
                <NavbarSections />
            </div>

        </div>
    )
}
