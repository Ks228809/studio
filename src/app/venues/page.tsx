import VenueCard from "@/components/venue-card";
import { VENUES } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export default function VenuesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Investment Opportunities
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
            Browse our curated list of tokenized real-world venues. Find the next addition to your diversified portfolio.
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search by name or location..." className="pl-10" />
          </div>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="hotel">Boutique Hotel</SelectItem>
                <SelectItem value="airbnb">Airbnb</SelectItem>
                <SelectItem value="cafe">Cafe & Restaurant</SelectItem>
                <SelectItem value="coworking">Co-working Space</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Popularity</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="yield">Projected Yield</SelectItem>
                <SelectItem value="funding">Funding Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {VENUES.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </section>
    </div>
  );
}
