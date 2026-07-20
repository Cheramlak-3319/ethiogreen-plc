import styles from "@/Components/common/StorySection.module.scss";
import Container from "@/Components/ui/Container";

interface StorySectionProps {
    imageSrc1: string;
    imageSrc2: string;
    imageSrc3: string;
}
export default function StorySection({
    imageSrc1,
    imageSrc2,
    imageSrc3,
}: StorySectionProps) {
    return (
        <div className={styles.storySection}>
            <Container>
                <div className={styles.display}>
                    <div className={styles.title}>History of SunRipe</div>
                    <div className={styles.history}>
                        At SunRipe, we believe Ethiopia’s incredible harvest
                        deserves more than to be wasted. Every year, up to 40%
                        of our nation’s fresh mangoes, tomatoes, and pineapples
                        spoil before they ever reach a plate. We set out to
                        change that. Born in the sun-drenched Rift Valley and
                        processed at our facility in Mojo, SunRipe sources fruit
                        directly from smallholder farmers we know and trust,
                        then gently dries it using nothing but Ethiopia’s
                        abundant, natural sunlight—zero additives, zero
                        preservatives. The result is a range of brilliantly
                        coloured, intensely flavoured dried fruits, vegetable
                        powders, and healthy snacks that lock in nutrition while
                        creating a fair, reliable market for the farmers who
                        grow them. From our farm to your family, every pack of
                        SunRipe is a taste of Ethiopian sunshine, a stand
                        against food waste, and a step towards a healthier, more
                        sustainable food system. Rediscover nature’s
                        sweetness—the way it’s meant to be.
                    </div>
                    <div className={styles.brandImages}>
                        {imageSrc1 ? (
                            <img src={imageSrc1} alt="our yello products" />
                        ) : (
                            <p>Image loading ....</p>
                        )}

                        {imageSrc2 ? (
                            <img src={imageSrc2} alt="our yello products" />
                        ) : (
                            <p>Image loading ....</p>
                        )}

                        {imageSrc3 ? (
                            <img src={imageSrc3} alt="our yello products" />
                        ) : (
                            <p>Image loading ....</p>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}
