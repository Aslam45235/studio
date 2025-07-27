
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    title: 'Modern Villa',
    category: 'Residential',
    image: 'https://placehold.co/600x400.png',
    hint: 'modern house'
  },
  {
    title: 'Downtown Office Complex',
    category: 'Commercial',
    image: 'https://placehold.co/600x400.png',
    hint: 'office building'
  },
  {
    title: 'Luxury Apartment Building',
    category: 'Residential',
    image: 'https://placehold.co/600x400.png',
    hint: 'apartment building'
  },
  {
    title: 'Retail Shopping Center',
    category: 'Commercial',
    image: 'https://placehold.co/600x400.png',
    hint: 'shopping center'
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Projects</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A showcase of our commitment to quality, craftsmanship, and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-80 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.hint}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-sm text-primary-foreground/80">{project.category}</p>
                  <h3 className="text-2xl font-bold text-primary-foreground font-headline">{project.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
