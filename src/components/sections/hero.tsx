
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[700px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Modern building under construction"
          fill
          priority
          className="object-cover brightness-[0.4]"
          data-ai-hint="construction building"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
      <div className="container px-4 z-10">
        <div className="max-w-3xl text-left">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold mb-4 text-primary-foreground drop-shadow-lg">
              Building Your Visions, Creating Reality
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl drop-shadow-md">
              J.Khans Construction is your trusted partner in bringing architectural dreams to life. From residential homes to commercial complexes, we deliver excellence and quality on time, every time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Link href="#services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
