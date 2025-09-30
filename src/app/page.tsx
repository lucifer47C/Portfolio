import AboutSection from "@/components/sections/about-section";
import CertificationsSection from "@/components/sections/certifications-section";
import ContactSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import InternshipsSection from "@/components/sections/internships-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

export default function Home() {
  return (
    <div className="flex flex-col space-y-24 md:space-y-32">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <InternshipsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
