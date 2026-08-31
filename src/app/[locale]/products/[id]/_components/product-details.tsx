import React from 'react'
import ProductCardDetails from './product-card-details'
import { Product } from '@/types/products.type'
import ProductReviews from './product-reviews-section'

const ProductDetails = ({ product }: { product: Product }) => {
    return (
        <div>
            <ProductCardDetails product={product} />
            <ProductReviews/>
            {/* TODO: Related products */}
        </div>
    )
}

export default ProductDetails