
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#ai-planner', label: 'AI Planner' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-card/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Building2 className="h-7 w-7" />
            <span className={cn("font-headline", scrolled ? "text-primary" : "text-primary-foreground")}>J.Khans Construction</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href} className={cn("text-sm font-medium transition-colors", scrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground")}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex bg-accent hover:bg-accent/90">
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className={cn(scrolled ? "text-primary" : "text-primary-foreground hover:text-primary-foreground hover:bg-white/20")}>
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 p-4 border-b">
                    <Building2 className="h-7 w-7 text-primary" />
                    <span className="font-bold text-xl font-headline text-primary">J.Khans Construction</span>
                  </div>
                  <nav className="flex flex-col gap-2 p-4 mt-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90" onClick={() => setMobileMenuOpen(false)}>
                      <Link href="#contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
