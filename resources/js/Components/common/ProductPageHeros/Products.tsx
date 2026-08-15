import { Product as ProductType } from "@/types/product";
import styles from "@/Components/common/ProductPageHeros/products.module.scss";

interface ProductProps {
    product: ProductType;
}

export default function Product({ product }: ProductProps) {
    const primaryImage =
        product.images.find((image) => image.is_primary) ?? product.images[0];

    return (
        <article className={styles.card}>
            <div className={styles.image}>
                {primaryImage ? (
                    <img
                        src={`/storage/${primaryImage.path}`}
                        alt={product.name}
                    />
                ) : (
                    <span>Product Image</span>
                )}
            </div>

            <div className={styles.content}>
                <p className={styles.sku}>SKU: {product.sku}</p>

                <h2 className={styles.name}>{product.name}</h2>

                {product.short_description && (
                    <p className={styles.description}>
                        {product.short_description}
                    </p>
                )}

                <div className={styles.footer}>
                    <span className={styles.price}>
                        {product.selling_price} ETB
                    </span>

                    <span className={styles.weight}>{product.weight} kg</span>
                </div>

                <button type="button" className={styles.button}>
                    View Product
                </button>
            </div>
        </article>
    );
}
