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
                tags: ["all-doctors"],
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