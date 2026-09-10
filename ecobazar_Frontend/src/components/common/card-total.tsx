"use client"
import { Product } from "@/types/products.type"
import Image from "next/image"
import {
    Field,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useRouter } from "@/i18n/navigation"
interface CardTotalProps {
    products: Product[]
    type: "checkout" | "cart"
}

const CardTotal = ({ products, type }: CardTotalProps) => {
    const router = useRouter()

    const handleCheckout = () => {
        const items = products.map((p) => ({
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.image,
        }))
        router.push(`/shopping-cart/check-out?items=${encodeURIComponent(JSON.stringify(items))}`)
    }

    const subtotal = products.reduce((sum, p) => sum + (Number(p.price) || 0), 0)

    return (
        <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
                {type === "checkout" ? "Order Summary" : "Cart Total"}
            </h2>

            {/* Product List for Checkout */}
            {type === "checkout" && (
                <div className="mb-6 space-y-4">
                    {products.map((product) => (
                        <div key={product.id} className="flex items-center gap-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={64}
                                height={64}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <span className="text-gray-900 font-medium text-sm">
                                {product.name}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {/* Subtotal */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100 text-sm">
                <span className="text-gray-500 font-medium">Subtotal:</span>
                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
            </div>

            {/* Shipping */}
            <div className="flex items-center justify-between py-3 border-b border-gray-100 text-sm">
                <span className="text-gray-500 font-medium">Shipping:</span>
                <span className="font-semibold text-gray-900">Free</span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-4 text-base">
                <span className="text-gray-500 font-medium">Total:</span>
                <span className="font-bold text-gray-900 text-lg">${subtotal.toFixed(2)}</span>
            </div>
            {type === "checkout" && (
                <div className="mb-6 space-y-4">
                    <FieldSet className="w-full max-w-xs">
                        <FieldLegend variant="label">Payment Method</FieldLegend>
                        <RadioGroup defaultValue="monthly">
                            <Field orientation="horizontal">
                                <RadioGroupItem value="cash" id="Payment-cash" />
                                <FieldLabel htmlFor="Payment-cash" className="font-normal">
                                    Cash on Delivery
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <RadioGroupItem value="paypal" id="Payment-paypal" />
                                <FieldLabel htmlFor="Payment-paypal" className="font-normal">
                                    Paypal
                                </FieldLabel>
                            </Field>
                            <Field orientation="horizontal">
                                <RadioGroupItem value="amazonPay" id="Payment-amazon" />
                                <FieldLabel htmlFor="Payment-amazon" className="font-normal">
                                    Amazon Pay
                                </FieldLabel>
                            </Field>
                        </RadioGroup>
                    </FieldSet>
                </div>
            )}

            {/* Action Button */}
            <button
                type="button"
                onClick={type === "cart" ? handleCheckout : undefined}
                className="mt-2 w-full rounded-full bg-[#00b207] hover:bg-[#009e06] text-white py-3.5 text-sm font-semibold transition-colors shadow-sm"
            >
                {type === "checkout" ? "Place Order" : "Proceed to checkout"}
            </button>
        </div>
    )
}

export default CardTotal