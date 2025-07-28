import { notFound } from "next/navigation";
import Image from "next/image";
import { getVenueById, type Venue } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Users, DollarSign, BarChart, TrendingUp, CheckCircle } from "lucide-react";

export default function VenueDetailPage({ params }: { params: { id: string } }) {
  const venue = getVenueById(params.id);

  if (!venue) {
    notFound();
  }
  
  const progress = (venue.raisedAmount / venue.targetRaise) * 100;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Left Column: Images and Description */}
        <div className="lg:col-span-2">
          <div className="mb-6">
             <h1 className="font-headline text-4xl font-bold tracking-tight">{venue.name}</h1>
             <div className="mt-2 flex items-center gap-4 text-muted-foreground">
                <Badge variant="secondary">{venue.type}</Badge>
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{venue.location}</span>
                </div>
             </div>
          </div>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-6 grid-rows-2 gap-2 h-[500px] mb-8">
            <div className="col-span-4 row-span-2 relative rounded-lg overflow-hidden">
                <Image src={venue.images[0]} alt={`${venue.name} main view`} layout="fill" objectFit="cover" data-ai-hint="thailand hotel interior"/>
            </div>
             <div className="col-span-2 row-span-1 relative rounded-lg overflow-hidden">
                <Image src={venue.images[1]} alt={`${venue.name} view 2`} layout="fill" objectFit="cover" data-ai-hint="hotel room"/>
            </div>
             <div className="col-span-2 row-span-1 relative rounded-lg overflow-hidden">
                <Image src={venue.images[2]} alt={`${venue.name} view 3`} layout="fill" objectFit="cover" data-ai-hint="hotel pool"/>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-headline text-2xl font-bold">About the Venue</h2>
            <p className="text-muted-foreground">{venue.longDescription}</p>
          </div>

          {/* Payout History */}
           <div className="mt-12">
             <h2 className="font-headline text-2xl font-bold mb-4">Recent Payouts</h2>
              <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Amount (USDC)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {venue.payouts.map((payout) => (
                            <TableRow key={payout.date}>
                                <TableCell>{new Date(payout.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</TableCell>
                                <TableCell className="text-right font-medium">${payout.amount.toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
              </Card>
           </div>
        </div>

        {/* Right Column: Investment Card */}
        <div className="lg:col-span-1">
            <Card className="sticky top-20 shadow-xl">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Investment Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Funding Progress */}
                    <div>
                      <div className="mb-2 flex justify-between text-sm font-medium text-muted-foreground">
                        <span>Raised</span>
                        <span className="font-bold text-foreground">${venue.raisedAmount.toLocaleString()}</span>
                      </div>
                      <Progress value={progress} aria-label={`${progress.toFixed(0)}% funded`} />
                      <div className="mt-2 flex justify-between text-sm font-medium">
                        <span className="text-muted-foreground">Target</span>
                        <span>${venue.targetRaise.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="rounded-lg bg-secondary p-3">
                           <p className="text-sm text-muted-foreground">Projected Yield</p>
                           <p className="text-2xl font-bold text-primary">{venue.projectedYield}%</p>
                        </div>
                         <div className="rounded-lg bg-secondary p-3">
                           <p className="text-sm text-muted-foreground">Revenue Share</p>
                           <p className="text-2xl font-bold text-primary">{venue.revenueShare}%</p>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground flex items-center gap-2"><Users className="h-4 w-4"/>Investors</span>
                        <span className="font-medium">{venue.investorCount}</span>
                      </div>
                       <div className="flex justify-between">
                        <span className="text-muted-foreground flex items-center gap-2"><BarChart className="h-4 w-4"/>Payout Frequency</span>
                        <span className="font-medium">Monthly</span>
                      </div>
                       <div className="flex justify-between">
                        <span className="text-muted-foreground flex items-center gap-2"><DollarSign className="h-4 w-4"/>Payouts in</span>
                        <span className="font-medium">USDC / USDT</span>
                      </div>
                    </div>
                     <Button size="lg" className="w-full font-bold text-lg" disabled={progress >= 100}>
                        {progress >= 100 ? (
                          <>
                            <CheckCircle className="mr-2 h-5 w-5"/> Fully Funded
                          </>
                        ) : (
                           <>
                             <TrendingUp className="mr-2 h-5 w-5"/> Invest Now
                           </>
                        )}
                    </Button>
                    {progress >= 100 && (
                      <p className="text-center text-sm text-muted-foreground">This venue has reached its funding goal. Browse other opportunities.</p>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
