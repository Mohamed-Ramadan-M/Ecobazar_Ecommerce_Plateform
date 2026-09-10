import { BillingForm } from "@/components/common/billing-form"
import CardTotal from "../../../../../components/common/card-total"
import { Product } from "@/types/products.type"

interface CheckoutSectionProps {
    products: Product[]
}

export const CheckoutSection = ({ products }: CheckoutSectionProps) => {
    return (
        <div>
            <div className="w-full min-h-screen bg-white py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        My Shopping Cart
                    </h1>
                    {/* 2-Column Responsive Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Left Column (Table + Coupon Code) */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Shopping Cart Table */}
                            <div className="w-full overflow-x-auto">
                                <BillingForm />
                            </div>
                        </div>
                        {/* Right Column (Cart Total Summary) */}
                        <div className="lg:col-span-1">
                            <CardTotal products={products} type="checkout" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
