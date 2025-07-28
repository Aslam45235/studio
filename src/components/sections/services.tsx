import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M3 22h18M3 17h18M3 12h18M3 7h18M3 2h18" />
      </svg>
    ), // Sand (custom sand-layered lines)
    title: "Sand (Rait)",
    description:
      "Clean, high-grade sand perfect for mixing concrete and masonry work.",
  },
  {
    icon: (
       <Image
        src="/image/rock.svg"
        alt="soil"
        width={50}
        height={50}
        className="object-cover brightness-[0.4]"
        data-ai-hint="construction building"
      />
    ), // Bajri (rock layers)
    title: "Bajri (Gravel)",
    description:
      "Well-graded bajri ideal for foundations, flooring, and road work.",
  },
  {
    icon: (
       <Image
        src="/image/brick.svg"
        alt="soil"
        width={50}
        height={50}
        className="object-cover brightness-[0.4]"
        data-ai-hint="construction building"
      />
    ), // Bricks
    title: "Bricks (Eent)",
    description:
      "Durable and reliable bricks suitable for all types of construction.",
  },
  {
    icon: (
      <Image
        src="/image/soil.svg"
        alt="soil"
        width={50}
        height={50}
        className="object-cover brightness-[0.4]"
        data-ai-hint="construction building"
      />
    ), // Ghasoo / Soil (plant sprout)
    title: "Ghasoo / Soil",
    description:
      "Fertile soil and ghasoo for landscaping, leveling, and gardening.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            We deliver high-quality construction materials tailored to meet your
            project needs. Our core offerings include:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
            >
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
