
import Link from 'next/link';
import { Building2, Facebook, Twitter, Instagram } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <Building2 className="h-7 w-7" />
              <span className="font-headline">J.Khans Construction</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building visions, creating reality since 2005.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2 items-center">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} J.Khans Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
