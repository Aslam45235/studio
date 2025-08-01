
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Projects from '@/components/sections/projects';
import About from '@/components/sections/about';
import Testimonials from '@/components/sections/testimonials';
import AIPlanner from '@/components/sections/ai-planner';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        {/* <AIPlanner /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
