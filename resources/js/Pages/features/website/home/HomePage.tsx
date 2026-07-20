import PublicLayout from "@/app/layout/PublicLayout";
import Hero from "@/Components/common/Hero";
import image1 from "@/images/Ethio-Green/A-worker-in-a-factory.jpg";
import image2 from "@/images/Ethio-Green/SunRipe2-removebg-preview.png";
import image3 from "@/images/Ethio-Green/SunRipe3-removebg-preview (1).png";
import image4 from "@/images/Ethio-Green/SunRipe4-removebg-preview.png";
import StorySection from "@/Components/common/StorySection";
export default function HomePage() {
    return (
        <PublicLayout title="Home">
            <Hero imageSrc={image1} />
            <StorySection
                imageSrc1={image2}
                imageSrc2={image3}
                imageSrc3={image4}
            />
        </PublicLayout>
    );
}
