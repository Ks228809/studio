import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Clock, Banknote, Zap } from "lucide-react";

export default function ForVenueOwnersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center md:py-28">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Access the Capital You Deserve.
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-primary-foreground/80 md:text-xl">
            Grow your business without debt or giving up equity. Mekoin connects you with a global network of investors ready to fund your vision.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/apply">Apply for Funding <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid items-center gap-12 md:grid-cols-2">
           <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl md:order-last">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Small business owner"
              fill
              className="object-cover"
              data-ai-hint="business owner portrait"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">The Challenge of Fair Financing</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              For small and medium-sized businesses in emerging markets, securing affordable capital is a constant struggle. Banks are slow and demanding, and traditional loans create burdensome debt.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Mekoin offers a new path forward. We provide fast, non-bank capital through a revenue-sharing model. You get the funds to grow, and investors share in your success, not your ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Why Fund with Mekoin?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Our model is designed to be a true partnership, aligning our success with yours.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Fast, Flexible Capital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Access funds in a fraction of the time it takes with traditional banks, without the rigid requirements and endless paperwork.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Banknote className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">No Debt or Dilution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Raise capital without taking on debt obligations or giving up equity. You maintain full ownership and control of your business.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">A Global Investor Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tap into a diverse, global community of investors actively looking to support promising ventures in markets like yours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">From Application to Funded in 4 Steps</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-2xl">1</div>
              </div>
              <h3 className="font-headline mt-6 text-xl font-bold">Apply Online</h3>
              <p className="mt-2 text-muted-foreground">Submit a simple online application with details about your venue and funding needs. Our team will review it within days.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-2xl">2</div>
              </div>
              <h3 className="font-headline mt-6 text-xl font-bold">Due Diligence</h3>
              <p className="mt-2 text-muted-foreground">We'll work with you to verify your business details and finalize the revenue-sharing terms for your tokenization.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-2xl">3</div>
              </div>
              <h3 className="font-headline mt-6 text-xl font-bold">Get Listed</h3>
              <p className="mt-2 text-muted-foreground">Once approved, your venue is listed on our platform for our global network of investors to discover and fund.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-2xl">4</div>
              </div>
              <h3 className="font-headline mt-6 text-xl font-bold">Receive Funds</h3>
              <p className="mt-2 text-muted-foreground">As investors purchase your tokens, capital is released to you to grow your business and increase your revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 grid items-center gap-12 md:grid-cols-2">
           <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Are You a Good Fit?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We are looking for local real estate venues that are culturally rich and revenue-ready. This includes, but is not limited to:
            </p>
             <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <span><strong>Boutique Hotels & Guesthouses:</strong> Unique properties with a strong track record of guest satisfaction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <span><strong>Cafes & Restaurants:</strong> Established eateries with a loyal customer base and clear growth potential.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                  <span><strong>Co-working Spaces & Experience Hubs:</strong> Venues that serve the growing digital nomad and tourist communities.</span>
                </li>
              </ul>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Beautiful venue in Bali"
              fill
              className="object-cover"
              data-ai-hint="boutique hotel bali"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Grow Your Business?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Let's build the future together. Apply today and get the funding you need to take your venue to the next level.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
