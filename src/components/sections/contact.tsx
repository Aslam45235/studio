
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Get an Instant Quote</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have a project in mind? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Project Information</CardTitle>
              <CardDescription>Tell us about your project needs.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email">Your Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="service">Service of Interest</Label>
                  <Input id="service" placeholder="e.g., Residential Construction" />
                </div>
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea id="message" placeholder="Describe your project here..." />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-muted-foreground">contact@jkhansconstruction.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-muted-foreground">+1 (234) 567-890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Visit Us</h3>
                <p className="text-muted-foreground">123 Construction Ave, Metropolis, 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
