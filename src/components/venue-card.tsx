import Link from "next/link";
import Image from "next/image";
import type { Venue } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users } from "lucide-react";

type VenueCardProps = {
  venue: Venue;
};

export default function VenueCard({ venue }: VenueCardProps) {
  const progress = (venue.raisedAmount / venue.targetRaise) * 100;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader className="p-0">
        <Link href={`/venues/${venue.id}`} className="block">
          <div className="relative h-48 w-full">
            <Image
              src={venue.images[0]}
              alt={venue.name}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 group-hover:opacity-90"
              data-ai-hint="thailand boutique hotel"
            />
            <Badge className="absolute right-2 top-2" variant="secondary">{venue.type}</Badge>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <Link href={`/venues/${venue.id}`}>
          <CardTitle className="font-headline mb-2 text-xl hover:text-primary">{venue.name}</CardTitle>
        </Link>
        <CardDescription className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4" />
          {venue.location}
        </CardDescription>
        <p className="mt-4 text-sm text-muted-foreground">{venue.description}</p>
        
        <div className="mt-6 space-y-4">
          <div>
            <div className="mb-2 flex justify-between text-sm font-medium">
              <span>Raised</span>
              <span>${venue.raisedAmount.toLocaleString()} / ${venue.targetRaise.toLocaleString()}</span>
            </div>
            <Progress value={progress} aria-label={`${progress.toFixed(0)}% funded`} />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Yield</p>
              <p className="font-bold text-primary">{venue.projectedYield}%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Revenue Share</p>
              <p className="font-bold text-primary">{venue.revenueShare}%</p>
            </div>
             <div>
              <p className="text-sm text-muted-foreground">Investors</p>
              <p className="font-bold text-primary flex items-center justify-center gap-1">
                <Users className="h-4 w-4" />
                {venue.investorCount}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-secondary/50 p-4">
         <Button asChild className="w-full font-bold">
           <Link href={`/venues/${venue.id}`}>View Opportunity</Link>
         </Button>
      </CardFooter>
    </Card>
  );
}
