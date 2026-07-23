import { useState } from "react";
import styles from "@/Components/common/HomePageHeros/BigImage.module.scss";

interface BigImageProps {
    images: string[];
}

export default function BigImage({ images }: BigImageProps) {
    const [current, setCurrent] = useState(0);

    if (images.length === 0) return null;

    function goPrev() {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    function goNext() {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }

    return (
        <div className={styles.carousel}>
            <div
                className={styles.track}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, index) => (
                    <div className={styles.slide} key={index}>
                        <img src={src} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <button
                type="button"
                aria-label="Previous image"
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={goPrev}
            >
                <i className="ti ti-chevron-left" aria-hidden="true" />
            </button>

            <button
                type="button"
                aria-label="Next image"
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={goNext}
            >
                <i className="ti ti-chevron-right" aria-hidden="true" />
            </button>

            <div className={styles.dots}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        className={`${styles.dot} ${
                            index === current ? styles.active : ""
                        }`}
                        onClick={() => setCurrent(index)}
                    />
                ))}
            </div>
        </div>
    );
}
