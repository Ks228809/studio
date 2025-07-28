import { Leaf } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Leaf className="h-7 w-7 text-primary" />
      <span className="font-headline text-xl font-bold">VenueYield</span>
    </div>
  );
}
