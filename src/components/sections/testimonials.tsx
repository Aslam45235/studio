
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Fatima Al-Fassi',
    role: 'Homeowner',
    image: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
    testimonial: "J.Khans Construction turned our dream home into a reality. Their attention to detail and professionalism were outstanding from start to finish. We couldn't be happier with the result!",
  },
  {
    name: 'David Chen',
    role: 'Business Owner',
    image: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
    testimonial: 'The team handled our commercial project with exceptional skill. They completed the work on schedule and within budget, which was crucial for our business. Highly recommended for any large-scale construction.',
  },
  {
    name: 'Maria Garcia',
    role: 'Property Developer',
    image: 'https://placehold.co/100x100.png',
    hint: 'professional woman',
    testimonial: "Working with J.Khans has been a pleasure. Their transparent communication and project management are top-notch. They are reliable, efficient, and deliver a superior quality product every time.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Our clients' satisfaction is our greatest achievement.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center p-8">
                      <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex gap-1 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.testimonial}"</p>
                      <h4 className="font-semibold font-headline">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
