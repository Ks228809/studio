import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, BarChart, TrendingUp, ShieldCheck } from "lucide-react";

export default function ForInvestorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 text-center md:py-28">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Earn Real-World Yield with Your Stablecoins.
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-primary-foreground/80 md:text-xl">
            Stop letting your crypto sit idle. Put your stablecoins to work in high-growth emerging markets and earn transparent, monthly passive income.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/venues">Browse Venues <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid items-center gap-12 md:grid-cols-2">
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Graph showing asset growth"
              layout="fill"
              objectFit="cover"
              data-ai-hint="financial growth chart"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">The Untapped Potential of Your Crypto</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              DeFi yields are volatile and complex. Your stablecoins could be generating predictable returns from tangible, real-world assets, but access has always been limited. Until now.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              VenueYield solves this by offering tokenized revenue shares from vetted businesses in booming markets. It's the stable, real-world diversification your portfolio needs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Why Invest with VenueYield?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              We provide easy access to real-world passive income, backed by transparency and security.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Attractive Monthly Yield</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Receive scheduled USDC/USDT payouts directly from venue revenues. Watch your passive income grow month by month.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Real Asset Diversification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Move beyond the volatility of crypto markets by investing in tangible, revenue-generating businesses in Southeast Asia.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Transparency & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our platform is built on transparent reporting, audited smart contracts, and on-chain receipts for every transaction.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How to Invest Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Your Journey to Real-World Yield in 3 Steps</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-4 hidden h-full w-px bg-border md:block"></div>
            <div className="space-y-16">
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground z-10">1</div>
                <div className="md:w-5/12">
                  <h3 className="font-headline text-2xl font-bold">Browse Venues</h3>
                  <p className="mt-2 text-muted-foreground">Explore our curated directory of tokenized venues. Review their terms, photos, locations, and investment details to find opportunities that match your goals.</p>
                </div>
                <div className="md:w-5/12 md:ml-auto">
                  <Image src="https://placehold.co/500x300.png" alt="Browsing venues" width={500} height={300} className="rounded-lg shadow-lg" data-ai-hint="browsing website"/>
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 md:flex-row">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground z-10">2</div>
                <div className="md:w-5/12 md:order-last">
                  <h3 className="font-headline text-2xl font-bold">Invest with Stablecoins</h3>
                  <p className="mt-2 text-muted-foreground">Connect your wallet and invest top-tier stablecoins like USDC or USDT directly into the venues you choose. The process is fast, secure, and entirely on-chain.</p>
                </div>
                <div className="md:w-5/12 md:mr-auto">
                   <Image src="https://placehold.co/500x300.png" alt="Investing with crypto" width={500} height={300} className="rounded-lg shadow-lg" data-ai-hint="crypto transaction"/>
                </div>
              </div>
              <div className="flex flex-col items-center gap-8 md:flex-row">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground z-10">3</div>
                <div className="md:w-5/12">
                  <h3 className="font-headline text-2xl font-bold">Receive Monthly Payouts</h3>
                  <p className="mt-2 text-muted-foreground">Once your investment is confirmed, you'll start receiving your share of the venue's revenue directly in your wallet, paid out in stablecoins every month.</p>
                </div>
                <div className="md:w-5/12 md:ml-auto">
                  <Image src="https://placehold.co/500x300.png" alt="Receiving payouts" width={500} height={300} className="rounded-lg shadow-lg" data-ai-hint="wallet income"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Diversify Your Portfolio?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            Join a new wave of investors connecting crypto capital to real-world growth.
          </p>
          <Button asChild size="lg" className="mt-8 font-bold">
            <Link href="/venues">Start Investing Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
