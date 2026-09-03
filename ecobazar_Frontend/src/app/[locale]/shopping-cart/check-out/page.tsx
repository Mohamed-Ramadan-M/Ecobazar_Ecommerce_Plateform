import { CheckoutSection } from "./_components/checkout-section"
import { Product } from "@/types/products.type"


const page = async ({ searchParams }: { searchParams: Promise<{ items?: string }> }) => {
    const params = await searchParams
    let products: Product[] = []
    try {
        const raw = params.items
        if (raw) {
            const parsed = JSON.parse(decodeURIComponent(raw))
            if (Array.isArray(parsed)) {
                products = parsed
            }
        }
    } catch {
        products = []
    }

    return (
        <div>
            <CheckoutSection products={products} />
        </div>
    )
}

export default page