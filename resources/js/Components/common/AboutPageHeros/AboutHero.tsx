import styles from "@/Components/common/AboutPageHeros/AboutHero.module.scss";

export default function AboutHero() {
    return (
        <section className={styles.banner}>
            <div className={styles.eyebrow}>About Us</div>
            <h1 className={styles.title}>
                Rooted in Ethiopia, growing toward the world
            </h1>
            <p className={styles.subtitle}>
                EthioGreen turns local harvests into export-grade goods — built
                on trust, sustainability, and 12+ years of experience.
            </p>
        </section>
    );
}
