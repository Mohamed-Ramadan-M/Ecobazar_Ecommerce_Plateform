import { getLocale } from "next-intl/server";

export async function getAllProducts() {
    const locale = await getLocale();

    const res = await fetch("http://localhost:5000/products",
        {
            method: "GET",
            headers: {
                accept: "application/json",
                "Accept-Language": locale || "en",
            },
            next: {
                tags: ["all-products"],
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