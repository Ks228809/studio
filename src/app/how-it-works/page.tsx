import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Repeat, TrendingUp, Users, ShieldCheck, Layers } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-20 text-center md:py-28">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The Mekoin Growth Flywheel
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
            Our model creates a self-reinforcing cycle of growth, benefiting venue owners, investors, and the platform simultaneously.
          </p>
        </div>
      </section>

      {/* Growth Flywheel Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Rocket className="h-8 w-8 text-primary" />,
                title: "1. Tokenize & Fund",
                description: "We onboard a high-potential venue and help it raise $50-100k from our global investor network.",
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-primary" />,
                title: "2. Monthly Payouts",
                description: "The venue uses the capital to grow. As it generates revenue, investors receive their share as monthly on-chain payouts.",
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "3. Investors Earn & Share",
                description: "Happy investors earn predictable yield, share testimonials, and are more likely to reinvest in other venues.",
              },
              {
                icon: <Repeat className="h-8 w-8 text-primary" />,
                title: "4. Reputation & Trust",
                description: "Successful case studies build Mekoin's reputation, attracting more high-quality venues and confident investors.",
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "5. Platform Scales",
                description: "With more venues and investors, the platform grows, creating a diverse marketplace of opportunities.",
              },
              {
                icon: <Rocket className="h-8 w-8 text-primary" />,
                title: "6. Repeat",
                description: "The flywheel accelerates, unlocking more capital for more underserved markets around the world.",
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  {item.icon}
                  <CardTitle className="font-headline">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 grid items-center gap-12 md:grid-cols-2">
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Technology stack diagram"
              layout="fill"
              objectFit="cover"
              data-ai-hint="blockchain technology"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Airbnb meets Kickstarter — Powered by Stripe for Stablecoins</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We leverage cutting-edge technology to create a seamless, secure, and transparent experience.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Borderless & Crypto-Native</h3>
                  <p className="text-muted-foreground">Our platform offers open access and a fast UX. By using stablecoins (USDC/USDT), we remove the friction of traditional cross-border payments.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Smart Contracts & On-Chain Receipts</h3>
                  <p className="text-muted-foreground">Every investment and payout is recorded on the blockchain and governed by audited smart contracts. This provides an immutable, transparent ledger of all activity, building trust between all parties.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold">Transparent Reporting</h3>
                  <p className="text-muted-foreground">We provide clear, regular updates on venue performance, ensuring investors are always informed about the health of their investments.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
