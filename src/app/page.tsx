import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, CheckCircle, DollarSign, Leaf, MapPin, Users } from "lucide-react";
import VenueCard from "@/components/venue-card";
import { VENUES } from "@/lib/constants";

export default function Home() {
  const featuredVenues = VENUES.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Real Places. Real Yields. No Delays.
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
            Mekoin unlocks crypto capital for the world’s most underfunded places, offering investors direct access to tokenized revenue shares from real-world assets.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="font-bold">
              <Link href="/for-investors">Start Earning Yield <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/for-venue-owners">Fund Your Venue</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Snippet */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Airbnb meets Kickstarter — Powered by Stripe for Stablecoins</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              A borderless, crypto-native platform for anyone to invest in real Southeast Asian venues using stablecoins.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">1. Tokenize a Venue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We partner with culturally rich, revenue-ready venues to offer a percentage of their revenue as tokens.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">2. Raise Capital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Investors use stablecoins (USDC/USDT) to buy revenue-share tokens, funding the venue's growth without debt.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">3. Earn Monthly Yield</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">As the venue generates revenue, investors receive scheduled payouts directly to their wallets.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Featured Venues</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Discover unique investment opportunities in the heart of Southeast Asia.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredVenues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/venues">Browse All Venues <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">A Borderless Trust Layer for Real-World Revenue</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              We build confidence through radical transparency and secure technology.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-bold font-headline">Transparent Reporting</h3>
                <p className="text-muted-foreground mt-1">Access real-time performance data and on-chain receipts for every transaction. No smoke and mirrors.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-bold font-headline">Secure Smart Contracts</h3>
                <p className="text-muted-foreground mt-1">Our audited smart contracts automate payouts and enforce agreements, minimizing counterparty risk.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-bold font-headline">Careful Due Diligence</h3>
                <p className="text-muted-foreground mt-1">Every venue is carefully vetted for its revenue potential, operational quality, and legal standing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Market */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">From Bali to the World</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Our journey begins in Bali, Indonesia – a cost-effective, crypto-aware hub full of culturally rich, revenue-ready venues. Its navigable legal landscape and tourism appeal make it the perfect launchpad.
              </p>
              <Button asChild className="mt-6 font-bold" variant="link">
                <Link href="/bali-pilot">Why We Chose Bali <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
               <Image
                 src="https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2127&auto=format&fit=crop"
                 alt="Bali scenery"
                 fill
                 className="object-cover"
                 data-ai-hint="bali temple"
               />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
