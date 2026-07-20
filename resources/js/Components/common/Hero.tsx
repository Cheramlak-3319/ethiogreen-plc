import Container from "@/Components/ui/Container";
import styles from "@/Components/common/Hero.module.scss";

interface HeroStat {
    value: string;
    label: string;
}

const STATS: HeroStat[] = [
    { value: "12+", label: "Years of Experience" },
    { value: "100%", label: "Traceability" },
    { value: "30+", label: "Export Destinations" },
];

interface HeroProps {
    imageSrc?: string; // optional — falls back to placeholder if not provided
}

export default function Hero({ imageSrc }: HeroProps) {
    return (
        <section className={styles.hero}>
            <Container>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.badge}>
                            <i className="bi bi-leaf-fill" aria-hidden="true" />
                            Sustainably grown &amp; processed
                        </div>
                        <h1 className={styles.headline}>
                            From Ethiopian soil
                            <br />
                            to global markets
                        </h1>
                        <p className={styles.subtext}>
                            EthioGreen delivers premium agro-processed goods
                            with full traceability and sustainable sourcing —
                            backed by 12+ years of hands-on experience in the
                            industry.
                        </p>
                        <div className={styles.actions}>
                            <button className={styles.primaryButton}>
                                Explore Products
                            </button>
                            <button className={styles.secondaryButton}>
                                Contact Us
                            </button>
                        </div>
                        <div className={styles.stats}>
                            {STATS.map((stats) => (
                                <div key={stats.label}>
                                    <div className={styles.statsValue}>
                                        {stats.value}
                                    </div>
                                    <div className={styles.statsLabel}>
                                        {stats.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.imagePanal}>
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                alt="EthioGreen agro-processing facility"
                            />
                        ) : (
                            <div className={styles.imagePlaceholder}>
                                [ product / farm photo ]
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
}
