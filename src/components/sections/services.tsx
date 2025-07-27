
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Wrench, DraftingCompass, Building } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-10 w-10 text-primary" />,
    title: 'Residential Construction',
    description: 'Building custom homes with a focus on quality, comfort, and modern design for families.',
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Commercial Buildings',
    description: 'Constructing state-of-the-art commercial spaces, from office buildings to retail centers.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Renovations & Remodeling',
    description: 'Transforming existing spaces with modern renovations and expert remodeling services.',
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: 'Design & Build',
    description: 'A seamless process from initial design to final construction, managed entirely by our expert team.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            We provide a wide range of construction services to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
