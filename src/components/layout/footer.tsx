import Link from "next/link";
import Logo from "@/components/icons/logo";
import { Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <p className="mt-4 text-muted-foreground">
              Unlocking Crypto Capital for the World’s Most Underfunded & Underbanked Places.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <h3 className="font-headline font-semibold">Platform</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/for-investors" className="text-muted-foreground hover:text-primary">For Investors</Link></li>
                <li><Link href="/for-venue-owners" className="text-muted-foreground hover:text-primary">For Venue Owners</Link></li>
                <li><Link href="/venues" className="text-muted-foreground hover:text-primary">Browse Venues</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/how-it-works" className="text-muted-foreground hover:text-primary">How It Works</Link></li>
                <li><Link href="/bali-pilot" className="text-muted-foreground hover:text-primary">Bali Pilot</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-headline font-semibold">Slogan</h3>
              <p className="mt-4 text-muted-foreground">Real Places. Real Yields. No Delays.</p>
               <p className="mt-2 text-muted-foreground">Borderless Trust Layer for Real-World Revenue.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mekoin, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
