import styles from "@/Components/common/AboutPageHeros/TimeLine.module.scss";

interface TIME_LINE {
    year: String;
    text: String;
}

const Timeline: TIME_LINE[] = [
    { year: "2014", text: "Founded in Addis Ababa" },
    { year: "2018", text: "Mojo facility opens" },
    { year: "2021", text: "SunRipe brand launches" },
    { year: "2026", text: "Exporting to 30+ countries" },
];

export default function TimeLine() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.title}>Our Journey</div>
                <div className={styles.grid}>
                    {Timeline.map((time) => (
                        <div key={time.year} className={styles.gridBox}>
                            <div className={styles.year}>{time.year}</div>
                            <div className={styles.event}>{time.text}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
