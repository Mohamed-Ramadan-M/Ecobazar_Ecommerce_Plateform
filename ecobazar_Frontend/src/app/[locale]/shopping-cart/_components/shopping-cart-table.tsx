import { TableBuilder } from "@/components/common/table-builder"
import { Product } from "@/types/products.type"
import CardTotal from "../../../../components/common/card-total"
import CouponCode from "./coupon-code"


const tableHeaders = ["Product", "Price", "Quantity", "subtotal"]
const cartData: Product[] = [
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
const ShoppingCartTable = () => {

    return (
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
                            <TableBuilder
                                tableHeaders={tableHeaders}
                                tableData={cartData}
                                type="cart"
                            />
                        </div>
                        {/* Coupon Code Section */}
                        <CouponCode />
                    </div>
                    {/* Right Column (Cart Total Summary) */}
                    <div className="lg:col-span-1">
                        <CardTotal products={cartData} type="cart" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShoppingCartTable