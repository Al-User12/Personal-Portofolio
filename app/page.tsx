import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechSection } from "@/components/tech-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ParticleBackground />
      <Navigation />
      <main id="main-content" className="relative min-h-screen" role="main" aria-label="Main content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </>
  )
}
