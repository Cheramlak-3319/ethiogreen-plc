import styles from "@/Components/common/AboutPageHeros/ValuesGrid.module.scss";

interface VALUE_GRID {
    icon: String;
    title: String;
    text: String;
}

const ValueGrid: VALUE_GRID[] = [
    {
        icon: "bi-heart-arrow",
        title: "Our Vision",
        text: "Turn Ethiopia's harvest into trusted, export-ready products.",
    },
    {
        icon: "bi-leaf",
        title: "Sustenablity",
        text: "Zero additives, fair sourcing, natural processing.",
    },
    {
        icon: "bi-person",
        title: "Community",
        text: "Fair, reliable markets for smallholder farmers.",
    },
];
export default function ValuesGrid() {
    return (
        <div className={styles.grid}>
            {ValueGrid.map((value) => (
                <div className={styles.card} key={value.icon}>
                    <div className={styles.iconCircle}>
                        <i className={`bi ${value.icon}`} aria-hidden="true" />
                    </div>
                    <div className={styles.cardTitle}>{value.title}</div>
                    <div className={styles.cardText}>{value.text}</div>
                </div>
            ))}
        </div>
    );
}
