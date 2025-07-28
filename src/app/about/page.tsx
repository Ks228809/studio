import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Target } from "lucide-react";

const teamMembers = [
  {
    name: "Collinn Tran",
    role: "Founder & CEO",
    avatar: "https://placehold.co/100x100.png",
    initials: "CT",
  },
  {
    name: "Koushik Seetha",
    role: "Co-founder & CTO",
    avatar: "https://placehold.co/100x100.png",
    initials: "KS",
  },
  {
    name: "Ean Chang",
    role: "Co-founder & CPO",
    avatar: "https://placehold.co/100x100.png",
    initials: "EC",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-20 text-center md:py-28">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Redefining Who Gets Funded.
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
            We believe that great businesses exist everywhere, but opportunity doesn't. Mekoin was created to bridge that gap.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              To unlock crypto capital for the world’s most underfunded and underbanked places. We are building a borderless trust layer for real-world revenue, connecting global investors with high-potential businesses in emerging markets.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              <h2 className="font-headline text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              From Bali to the world. We envision a future where any profitable local business, from a cafe in Canggu to a boutique hotel in Ubud, can access growth capital frictionlessly, and any investor can participate in their success.
            </p>
          </div>
        </div>
      </section>

      {/* The "Why" Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 grid items-center gap-12 md:grid-cols-2">
           <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl md:order-last">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Emerging market street scene"
              layout="fill"
              objectFit="cover"
              data-ai-hint="bali street"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Why We Exist</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The tokenization of real-world assets (RWAs) is exploding, projected to become a multi-trillion dollar market. Yet, this wave of innovation is leaving the most underserved markets behind.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Trillions in crypto capital are seeking stable, real-world yield, while millions of profitable small businesses in emerging economies are starved for fair, accessible financing.
            </p>
            <p className="mt-4 text-lg font-semibold text-primary">
              Mekoin is the bridge.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              We are a team of builders, innovators, and finance professionals passionate about leveraging technology for global good.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
