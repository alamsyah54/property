import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import HeroSection from "@/components/HeroSection"
import Info from "@/components/Info"
import SalesSection from "@/components/SalesSection"

export default function Home() {
    return (
        <main className='flex-col flex items-center'>
            <HeroSection />
            <Info />
            <SalesSection />
            <AboutSection />
            <ContactSection />
            <div className='w-full h-2 fixed bottom-0 bg-green-500 sm:bg-yellow-500 md:bg-orange-500 lg:bg-red-500' />
        </main>
    )
}
