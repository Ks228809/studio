"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  venueName: z.string().min(2, {
    message: "Venue name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location is required.",
  }),
  venueType: z.string().min(2, {
    message: "Venue type is required.",
  }),
  description: z.string().min(50, {
    message: "Please provide a description of at least 50 characters.",
  }),
  fundingGoal: z.coerce.number().min(10000, {
    message: "Funding goal must be at least $10,000.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name is required.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function ApplyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      venueName: "",
      location: "",
      venueType: "",
      description: "",
      fundingGoal: 50000,
      contactName: "",
      contactEmail: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Application Submitted!",
      description: "Thank you! Our team will review your application and be in touch soon.",
    });
    form.reset();
  }

  return (
    <Card className="shadow-xl">
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Venue Application</CardTitle>
            <CardDescription>Tell us about your business and funding needs.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="venueName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Venue Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., The Bali Breeze" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="City, Country" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="venueType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Venue</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Boutique Hotel, Cafe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Venue Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your venue, what makes it special, and how you plan to use the funds."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fundingGoal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Funding Goal (USD)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="50000" {...field} />
                      </FormControl>
                      <FormDescription>
                        What is the total amount of capital you are looking to raise?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full font-bold" size="lg">Submit Application</Button>
              </form>
            </Form>
        </CardContent>
    </Card>
  );
}
