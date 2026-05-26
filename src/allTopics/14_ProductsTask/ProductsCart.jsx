import { useEffect, useState } from "react";
import styles from "./ProductsCart.module.css";
import ProductsModal from "./ProductsModal";

const ProductsCart = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function getProducts() {
            try {
                const resp = await fetch("https://dummyjson.com/products", {
                    signal: controller.signal,
                });
                const data = await resp.json();
                setItems(data.products);
            } catch (error) {
                if (error.name !== "AbortError") console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getProducts();
        return () => controller.abort();
    }, []);

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>All Products</h1>

            {loading ? (
                <p className={styles.status}>Loading...</p>
            ) : items.length === 0 ? (
                <p className={styles.status}>No products available</p>
            ) : (
                <section className={styles.grid}>
                    {items.map((product) => (
                        <div
                            key={product.id}
                            className={styles.card}
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className={styles.imgWrap}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className={styles.img}
                                />
                                <span className={styles.price}>${product.price}</span>
                            </div>
                            <div className={styles.info}>
                                <h2 className={styles.title}>{product.title}</h2>
                                <p className={styles.desc}>{product.description}</p>
                                <div className={styles.footer}>
                                    <span className={styles.category}>{product.category}</span>
                                    <span className={styles.rating}>⭐ {product.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* Modal */}
            {selectedProduct && (
                <ProductsModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default ProductsCart;