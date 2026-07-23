import PublicLayout from "@/app/layout/PublicLayout";
import Hero from "@/Components/common/HomePageHeros/Hero";
import StorySection from "@/Components/common/HomePageHeros/StorySection";
import BigImage from "@/Components/common/HomePageHeros/BigImage";

import image1 from "@/images/Ethio-Green/A-worker-in-a-factory.jpg";
import image2 from "@/images/Ethio-Green/SunRipe2-removebg-preview.png";
import image3 from "@/images/Ethio-Green/SunRipe3-removebg-preview (1).png";
import image4 from "@/images/Ethio-Green/SunRipe4-removebg-preview.png";
import bigImage1 from "@/images/Ethio-Green/SunRipe.jpg";
import bigImage2 from "@/images/Ethio-Green/SunRipe8.png";
import bigImage3 from "@/images/Ethio-Green/SunRipe7.png";
import bigImage4 from "@/images/Ethio-Green/SunRipe9.png";

const CAROUSEL_IMAGES = [bigImage2, bigImage1, bigImage3, bigImage4];

export default function HomePage() {
    return (
        <PublicLayout title="Home">
            <BigImage images={CAROUSEL_IMAGES} />
            <Hero imageSrc={image1} />
            <StorySection
                imageSrc1={image2}
                imageSrc2={image3}
                imageSrc3={image4}
            />
        </PublicLayout>
    );
}
