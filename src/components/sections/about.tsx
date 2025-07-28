import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "M. Azam khan",
    role: "Founder & CEO",
    image: "https://placehold.co/100x100.png",
    hint: "male portrait",
  },
  {
    name: "M. Hasham khan",
    role: "Lead Architect",
    image: "https://placehold.co/100x100.png",
    hint: "female portrait",
  },
  {
    name: "Mubeen khan",
    role: "Project Manager",
    image: "https://placehold.co/100x100.png",
    hint: "male professional",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="border border-primary rounded-lg p-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              About J.Khans Construction Supplies
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are a trusted name in construction material supply, serving
              residential and commercial clients with premium quality sand,
              bajri, bricks, ghasoo, and more. With years of experience and a
              commitment to timely delivery, we ensure that your construction
              never slows down. Our materials are tested, our service is
              reliable, and our rates are competitive.
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
