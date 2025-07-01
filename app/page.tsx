import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}