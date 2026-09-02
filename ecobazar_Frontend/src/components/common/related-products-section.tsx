import { getAllProducts } from "@/api/products/products.api";
import { ProductCard } from "./products-card";
import { Product } from "@/types/products.type";

interface RelatedProductsSectionProps {
    limit?: number;
}

const RelatedProductsSection = async ( { limit }: RelatedProductsSectionProps ) => {
    const relatedProducts = await getAllProducts(limit);
    console.log("Related Products:", relatedProducts);
    return (
        <section className="py-12 w-full max-w-7xl mx-auto px-4">

            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
                Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts?.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default RelatedProductsSection