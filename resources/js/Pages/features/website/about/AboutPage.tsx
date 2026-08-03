import PublicLayout from "@/app/layout/PublicLayout";
import AboutHero from "@/Components/common/AboutPageHeros/AboutHero";
import Container from "@/Components/ui/Container";
import ValuesGrid from "@/Components/common/AboutPageHeros/ValuesGrid";
import TimeLine from "@/Components/common/AboutPageHeros/TimeLine";
import styles from "@/Pages/features/website/about/About.module.scss";
export default function AboutPage() {
    return (
        <PublicLayout title="About">
            <div className={styles.background}>
                <AboutHero />
                <Container>
                    <div className={styles.hero}>
                        <ValuesGrid />
                        <div className={styles.timeline}>
                            <TimeLine />
                        </div>
                    </div>
                </Container>
            </div>
        </PublicLayout>
    );
}
