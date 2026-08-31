import { notFound } from "next/navigation";
import { getProductById } from "@/api/products/products.api";
import ProductDetails from "./_components/product-details";

const Page = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = await params;

    const product = await getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="w-full ">
            <ProductDetails product={product} />
        </div>
    )
}

export default Page
