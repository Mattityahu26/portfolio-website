import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import ContactMe from "@/components/sections/ContactMe";
import SkillsSection from "@/components/sections/SkillsSection";

export default function HomePage() {
    return (
        <main>
            <HeroSection />
            <Experience />
            <FeaturedProjects />
            <ContactMe />
            <SkillsSection />
        </main>
    )
}