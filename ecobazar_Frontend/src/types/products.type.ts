export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    isOutofStock?: boolean;
    salePercentage?: number;
    categoryId?: number;
    description?: string;
    stock?: number;
    sku?: string;
    weight?: string;
    dimensions?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
