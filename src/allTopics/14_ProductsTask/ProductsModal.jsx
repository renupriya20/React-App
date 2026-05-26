import { useEffect } from "react";
import styles from "./ProductsModal.module.css";

const ProductsModal = ({ product, onClose }) => {

    // ESC key se close
    useEffect(() => {
        const handleKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    const discount = product.discountPercentage
        ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
        : null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

                {/* Close button */}
                <button className={styles.closeBtn} onClick={onClose}>✕</button>

                <div className={styles.body}>
                    {/* Left — Image gallery */}
                    <div className={styles.imgSection}>
                        <div className={styles.mainImgWrap}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className={styles.mainImg}
                            />
                        </div>
                        {product.images?.length > 1 && (
                            <div className={styles.thumbRow}>
                                {product.images.slice(0, 4).map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`${product.title} ${i + 1}`}
                                        className={styles.thumb}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right — Details */}
                    <div className={styles.details}>
                        <span className={styles.badge}>{product.category}</span>
                        <h2 className={styles.name}>{product.title}</h2>
                        <p className={styles.brand}>by <strong>{product.brand || "N/A"}</strong></p>

                        <div className={styles.priceRow}>
                            <span className={styles.priceMain}>${product.price}</span>
                            {discount && (
                                <>
                                    <span className={styles.priceOriginal}>${discount}</span>
                                    <span className={styles.discountTag}>
                                        -{product.discountPercentage?.toFixed(1)}% OFF
                                    </span>
                                </>
                            )}
                        </div>

                        <p className={styles.desc}>{product.description}</p>

                        <div className={styles.metaGrid}>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Rating</span>
                                <span className={styles.metaVal}>⭐ {product.rating}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Stock</span>
                                <span className={styles.metaVal}>{product.stock} units</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>SKU</span>
                                <span className={styles.metaVal}>{product.sku || "—"}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Warranty</span>
                                <span className={styles.metaVal}>{product.warrantyInformation || "—"}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Shipping</span>
                                <span className={styles.metaVal}>{product.shippingInformation || "—"}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Return Policy</span>
                                <span className={styles.metaVal}>{product.returnPolicy || "—"}</span>
                            </div>
                        </div>

                        <button className={styles.addBtn}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsModal;