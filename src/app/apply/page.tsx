import { ApplyForm } from "./apply-form";
import Image from "next/image";

export default function ApplyPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Fund Your Venue's Future
          </h1>
          <p className="text-lg text-muted-foreground">
            Ready to grow without the constraints of traditional financing? Complete the form to start the conversation. Our team will review your application and get in touch to discuss the next steps.
          </p>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
             <Image
                src="https://placehold.co/600x400.png"
                alt="Venue owner planning"
                fill
                className="object-cover"
                data-ai-hint="business owner planning"
             />
          </div>
        </div>
        
        <div>
          <ApplyForm />
        </div>
      </div>
    </div>
  );
}
