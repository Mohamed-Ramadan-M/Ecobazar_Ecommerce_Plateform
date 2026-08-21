import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

export function CopyRight() {
    return (
        <div className="container   mx-auto w-full bg-transparent py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
                <Link
                    href="#"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full  text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                    <Image
                        src="/assets/Facebook.svg"
                        alt="Twitter"
                        className="object-cover transition-transform hover:scale-105 "
                        width={32}
                        height={32}
                    />

                </Link>
                <Link
                    href="#"
                    aria-label="Twitter"
                    className="w-8 h-8 rounded-full  text-white flex items-center justify-center  transition-colors"
                >
                    <Image
                        src="/assets/Twitter.svg"
                        alt="Twitter"
                        className="object-cover transition-transform hover:scale-105"
                        width={32}
                        height={32}
                    />
                </Link>
                <Link
                    href="#"
                    aria-label="Pinterest"
                    className="w-8 h-8 rounded-full  text-white flex items-center justify-center  transition-colors"
                >
                    <Image
                        src="/assets/Pinterest.svg"
                        alt="Instagram"
                        className="object-cover transition-transform hover:scale-105"
                        width={32}
                        height={32}
                    />
                </Link>
                <Link
                    href="#"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center  transition-colors"
                >
                    <Image
                        src="/assets/Instagram.svg"
                        alt="Facebook"
                        className="object-cover transition-transform hover:scale-105"
                        width={32}
                        height={32}
                    />
                </Link>
            </div>

            {/* Copyright Text */}
            <div className="text-center">
                <p>Shopery eCommerce © 2021. All Rights Reserved</p>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap items-center justify-center gap-2">
                {/* Apple Pay */}
                <Button variant={"outline"}>
                     Pay
                </Button>
                {/* Visa */}
                <Button variant={"outline"}>
                    VISA
                </Button>
                {/* Discover */}
                <Button variant={"outline"}>
                    DISCOVER
                </Button>
                {/* Mastercard */}
                <Button variant={"outline"}>
                    <div className="w-3.5 h-3.5 rounded-full bg-red-600 opacity-90"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 opacity-90 -ml-2"></div>
                </Button>
                {/* Secure Payment */}
                <Button variant={"outline"}>
                    <span className="flex items-center gap-0.5">🔒 Secure <span className="font-bold tracking-tight">Payment</span></span>
                </Button>
            </div>

        </div>
    );
}
export default CopyRight;