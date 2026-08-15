import PublicLayout from "@/app/layout/PublicLayout";
import Product from "@/Components/common/ProductPageHeros/Products";
import { Product as ProductType } from "@/types/product";

interface ProductsPageProps {
    products: ProductType[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
    return (
        <PublicLayout title="Products">
            <section>
                <h1>Our Products</h1>

                {products.length > 0 ? (
                    <div>
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p>No products available.</p>
                )}
            </section>
        </PublicLayout>
    );
}
