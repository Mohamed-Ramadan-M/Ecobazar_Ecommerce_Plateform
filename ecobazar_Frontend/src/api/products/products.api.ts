import { getLocale } from "next-intl/server";

export async function getAllProducts(limit?: number) {
    const locale = await getLocale();

    const url = limit 
        ? `http://localhost:5000/products?_limit=${limit}` 
        : "http://localhost:5000/products";

    const res = await fetch(url, {
        method: "GET",
        headers: {
            accept: "application/json",
            "Accept-Language": locale || "en",
        },
        next: {
            tags: limit ? [`all-products-${limit}`] : ["all-products"],
            revalidate: 300,
        },
    });

    const payload = await res.json();

    if (!res.ok) {
        throw new Error(payload?.message || "Something went wrong");
    }

    return payload;
}

export async function getProductById(id:number | string) {
    const locale = await getLocale();

    const res = await fetch(`http://localhost:5000/products/${id}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                "Accept-Language": locale || "en",
            },
            next: {
                tags: ["products-by-id"],
                revalidate: 300,
            },
        }
    )

    const payload = await res.json();

    if (!res.ok) {
        throw new Error(payload?.message || "Something went wrong");
    }

    return payload;
}