import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, MapPin, LandPlot, Handshake, Bitcoin } from "lucide-react";

const advantages = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Tourism Magnet",
    description: "A top global destination for tourism and digital nomads, ensuring a consistent stream of revenue for hospitality venues.",
  },
  {
    icon: <Bitcoin className="h-8 w-8 text-primary" />,
    title: "Crypto-Savvy Population",
    description: "Indonesia has high crypto adoption rates. This means local venue owners are more open and aware of blockchain's potential.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: "High-Quality, Affordable Venues",
    description: "The island is full of culturally rich, revenue-ready venues that can be tokenized at a cost-effective level for investors.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Tight Local Network",
    description: "Our team has deep connections within the local business and tech communities, facilitating easier onboarding and due diligence.",
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Navigable Legal Landscape",
    description: "Indonesia's clear stance on digital assets provides a stable and predictable environment for our pilot operations.",
  },
];

export default function BaliPilotPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Panoramic view of Bali"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          data-ai-hint="bali landscape"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Why Bali First?
            </h1>
            <p className="mx-auto mt-6 max-w-[700px] text-lg md:text-xl">
              A strategic launchpad for a global vision. Discover why this vibrant Indonesian island is the perfect place to pilot the future of real-world asset tokenization.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">The Perfect Ecosystem for Innovation</h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
              Bali isn't just a beautiful island; it's a unique convergence of culture, technology, and economic potential that makes it the ideal environment for Mekoin's launch.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center shadow-lg transition-all duration-300 hover:border-primary">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {advantage.icon}
                  </div>
                  <CardTitle className="font-headline mt-4">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
             <LandPlot className="h-12 w-12 text-primary" />
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">From a Strong Foundation to a Global Network</h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
            By proving our model in Bali, we are building a robust, scalable platform. The lessons learned and successes achieved here will pave the way for our expansion into other high-potential markets across Southeast Asia and beyond. Bali is not just our start; it's our blueprint for the future.
          </p>
        </div>
      </section>
    </div>
  );
}
