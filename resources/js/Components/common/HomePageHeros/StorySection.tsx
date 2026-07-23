import styles from "@/Components/common/HomePageHeros/StorySection.module.scss";
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
                        <span className={styles.historyPlace}>
                            The SunRipe story begins not in a factory, but in
                            the mango groves and tomato fields of Ethiopia’s
                            Rift Valley. For over 15 years, our founder worked
                            shoulder-to-shoulder with smallholder farmers in
                            Ziway, Meki, and Koka — communities blessed with
                            some of the most flavourful fruit on earth, yet
                            haunted by the same heartbreaking reality season
                            after season: up to 40% of their harvest never made
                            it to market. Mangoes piled up under trees. Tomatoes
                            softened and split. Incomes vanished.
                        </span>
                        <span className={styles.historyPlace}>
                            That reality sparked a question that would become an
                            obsession: What if we could capture the peak flavour
                            and nutrition of this fruit right at harvest, using
                            the cleanest, most abundant energy source Ethiopia
                            has — the sun?
                        </span>
                        <span className={styles.historyPlace}>
                            In 2026, that question gave birth to Ethio-Green
                            Agro-Processing PLC, the company behind the SunRipe
                            brand. We chose the name with intention: “Ethio” for
                            our deep-rooted national pride, and “Green” for our
                            commitment to environmentally regenerative food
                            systems. We registered in Addis Ababa, secured an
                            agro-processing investment licence, and built our
                            first drying facility in Mojo — deliberately
                            positioned at the crossroads of the Rift Valley’s
                            agricultural heartland and the Addis Ababa market.
                            From day one, we knew we would do things
                            differently.
                        </span>
                        <span className={styles.historyPlace}>
                            We invested in hygienic solar tunnel dryers, not
                            industrial dehydrators that rely on fossil fuels. We
                            built a cold room to protect fresh fruit before
                            processing, and a small laboratory to test every
                            batch for moisture, colour, and safety. We hired a
                            food scientist and a quality assurance team
                            alongside the farmers’ sons and daughters who now
                            form our production crew. And we went further: we
                            refused to use chemical additives, preservatives, or
                            added sugar. Our promise was simple — the fruit, the
                            sun, nothing else.
                        </span>
                        <span className={styles.historyPlace}>
                            The SunRipe brand launched with a clear mission: to
                            create a market for this perfectly preserved
                            produce, first here at home. We placed our dried
                            mango slices, pineapple rings, and tomato powder in
                            Addis Ababa’s leading supermarkets. We knocked on
                            the doors of hotel kitchens and restaurants,
                            offering chefs a consistent, Ethiopian-made
                            alternative to imported vegetable powders. We built
                            an online shop and started telling the stories of
                            the farmers behind every pack on Instagram and
                            TikTok. Urban families, fitness lovers, and mothers
                            began choosing SunRipe as a healthy, natural snack
                            they could trust.
                        </span>
                        <span className={styles.historyPlace}>
                            Today, Ethio-Green Agro-Processing PLC operates with
                            a team of 20 dedicated professionals — from
                            agronomists and food technologists to sales and
                            logistics experts. Our facility can process hundreds
                            of tonnes of fresh fruit each year, and we are
                            expanding our sourcing network to farming
                            communities in Arba Minch and the Upper Awash. We
                            are pursuing organic certification, exploring
                            regional export markets, and pioneering a franchise
                            model that will allow cooperative unions across
                            Ethiopia to own their own SunRipe drying hubs.
                        </span>
                        <span className={styles.historyPlace}>
                            Every pack of SunRipe carries more than fruit. It
                            carries the livelihoods of farmers who now receive a
                            guaranteed fair price and technical support. It
                            carries the pride of a team proving that world-class
                            food manufacturing is possible right here in Mojo.
                            And it carries the hope of a food system where
                            nothing is wasted, and nature’s sweetness is
                            celebrated — just as it’s meant to be.
                        </span>
                        <span className={styles.brandMessage}>
                            SunRipe: A taste of Ethiopian sunshine, crafted with
                            care by Ethio-Green Agro-Processing PLC.
                        </span>
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
