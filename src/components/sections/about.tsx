
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'J. Khan',
    role: 'Founder & CEO',
    image: 'https://placehold.co/100x100.png',
    hint: 'male portrait',
  },
  {
    name: 'Aisha Ahmed',
    role: 'Lead Architect',
    image: 'https://placehold.co/100x100.png',
    hint: 'female portrait',
  },
  {
    name: 'Omar Farooq',
    role: 'Project Manager',
    image: 'https://placehold.co/100x100.png',
    hint: 'male professional'
  },
];

export default function About() {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="border border-primary rounded-lg p-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              About J.Khans Construction
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Founded with a passion for building, J.Khans Construction has
              grown into a leading name in the industry. Our mission is to
              deliver high-quality construction projects that exceed client
              expectations through innovation, integrity, and a commitment to
              excellence.
            </p>
            <p className="mt-4 text-muted-foreground">
              We believe in a collaborative approach, working closely with our
              clients from conception to completion. Our team of experienced
              professionals is dedicated to ensuring every project is a
              testament to our craftsmanship and your vision.
            </p>
          </div>
          <div className="border border-primary rounded-lg p-10 h-full">
            <h3 className="text-2xl font-headline font-bold mb-6 text-center lg:text-left">
              Meet Our Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <Avatar className="w-24 h-24 mb-4 border-2 border-primary">
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      data-ai-hint={member.hint}
                    />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold font-headline">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
