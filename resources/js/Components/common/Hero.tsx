import Container from "@/components/ui/Container";

export default function Hero() {
    return (
        <section className="py-5 bg-light">
            <Container>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold">
                            Building Ethiopia's Future
                        </h1>

                        <p className="lead my-4">
                            Ethio-Green Agro-Processing PLC is a start-up that
                            will process and market premium, naturally
                            solar-dried fruits, vegetables, and spice powders.
                            Capitalizing on Ethiopia’s abundant horticultural
                            production and favourable solar radiation, the
                            company will source fresh produce directly from
                            smallholder farmer cooperatives in the Rift Valley,
                            process it using hygienic solar tunnel dryers, and
                            sell value-added products under the brand SunRipe.
                            The Opportunity: Ethiopia loses an estimated 30–40%
                            of its fresh fruits and vegetables post-harvest due
                            to lack of processing and cold chain infrastructure.
                            Simultaneously, urban health-conscious consumers and
                            the hospitality sector increasingly demand natural,
                            additive-free dried snacks and ingredients that are
                            currently mostly imported. Ethio-Green substitutes
                            imports, reduces waste, and creates consistent
                            market access for farmers.
                        </p>
                        <p className="lead my-4">
                            At SunRipe, we believe Ethiopia’s incredible harvest
                            deserves more than to be wasted. Every year, up to
                            40% of our nation’s fresh mangoes, tomatoes, and
                            pineapples spoil before they ever reach a plate. We
                            set out to change that. Born in the sun-drenched
                            Rift Valley and processed at our facility in Mojo,
                            SunRipe sources fruit directly from smallholder
                            farmers we know and trust, then gently dries it
                            using nothing but Ethiopia’s abundant, natural
                            sunlight—zero additives, zero preservatives. The
                            result is a range of brilliantly coloured, intensely
                            flavoured dried fruits, vegetable powders, and
                            healthy snacks that lock in nutrition while creating
                            a fair, reliable market for the farmers who grow
                            them. From our farm to your family, every pack of
                            SunRipe is a taste of Ethiopian sunshine, a stand
                            against food waste, and a step towards a healthier,
                            more sustainable food system. Rediscover nature’s
                            sweetness—the way it’s meant to be.
                        </p>

                        <button className="btn btn-success btn-lg">
                            Explore More
                        </button>
                    </div>

                    <div className="col-lg-6">Hero Image</div>
                </div>
            </Container>
        </section>
    );
}
