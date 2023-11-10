import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import SalesSection from "@/components/SalesSection";

export default function Home() {
  return (
    <main className="flex-col flex items-center">
      <HeroSection />
      <SalesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
