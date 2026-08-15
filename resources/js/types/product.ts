export interface ProductImage {
    id: number;
    product_id: number;
    path: string;
    is_primary: boolean;
    sort_order: number;
}

export interface Product {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    short_description: string | null;
    sku: string;
    category_id: number;
    selling_price: number;
    cost_price: number;
    quantity: number;
    min_stock: number;
    status: "Draft" | "Published" | "Archived";
    weight: number;
    created_by: number | null;
    updated_by: number | null;
    published_at: string | null;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
}
