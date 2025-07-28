export type Venue = {
  id: string;
  name: string;
  location: string;
  type: string;
  description: string;
  longDescription: string;
  images: string[];
  targetRaise: number;
  revenueShare: number;
  projectedYield: number;
  raisedAmount: number;
  investorCount: number;
  payouts: { date: string; amount: number }[];
};

export const VENUES: Venue[] = [
  {
    id: "cm-boutique-hotel",
    name: "The Chiang Mai Oasis",
    location: "Chiang Mai, Thailand",
    type: "Boutique Hotel",
    description: "A serene, 12-room boutique hotel nestled in the heart of the Old City, offering a peaceful retreat for travelers.",
    longDescription: "The Chiang Mai Oasis is a family-run boutique hotel that blends traditional Lanna architecture with modern comforts. Each of its 12 rooms is uniquely decorated, providing an authentic and comfortable stay. The property features a lush garden, a saltwater pool, and an on-site cafe serving locally sourced coffee and food. We are seeking funding to upgrade our solar power system and add a small spa facility to enhance guest experience and sustainability.",
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"],
    targetRaise: 75000,
    revenueShare: 15,
    projectedYield: 12.5,
    raisedAmount: 32000,
    investorCount: 45,
    payouts: [
      { date: "2024-05-31", amount: 650 },
      { date: "2024-06-30", amount: 720 },
      { date: "2024-07-31", amount: 810 },
    ]
  },
  {
    id: "riverside-airbnb-villas",
    name: "Riverside Airbnb Villas",
    location: "Chiang Mai, Thailand",
    type: "Airbnb",
    description: "A collection of 3 modern villas on the Ping River, offering stunning views and premium amenities for short-term rentals.",
    longDescription: "These three newly-built villas provide a luxurious and private experience for tourists and digital nomads. Each villa has a private plunge pool, a fully equipped kitchen, and high-speed internet. The location is ideal, offering tranquility while being just a short drive from the city center. Funding will be used to build a communal riverside deck and purchase kayaks for guest use, increasing the property's appeal and nightly rate.",
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"],
    targetRaise: 50000,
    revenueShare: 20,
    projectedYield: 18.0,
    raisedAmount: 50000,
    investorCount: 62,
    payouts: [
      { date: "2024-05-31", amount: 950 },
      { date: "2024-06-30", amount: 1100 },
      { date: "2024-07-31", amount: 1250 },
    ]
  },
  {
    id: "mountain-view-cafe",
    name: "Doi Suthep View Cafe",
    location: "Chiang Mai, Thailand",
    type: "Cafe & Restaurant",
    description: "A popular cafe with breathtaking views of Doi Suthep mountain, famous for its organic coffee and farm-to-table menu.",
    longDescription: "Our cafe has become a landmark for both locals and tourists. We pride ourselves on our organic, locally sourced ingredients and our specialty coffee blends. The open-air design provides a stunning panoramic view. We need capital to expand our seating area and build a small roastery on-site to start selling our own branded coffee beans, which will create a new, high-margin revenue stream.",
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"],
    targetRaise: 60000,
    revenueShare: 10,
    projectedYield: 9.8,
    raisedAmount: 15000,
    investorCount: 28,
    payouts: [
      { date: "2024-05-31", amount: 450 },
      { date: "2024-06-30", amount: 500 },
      { date: "2024-07-31", amount: 580 },
    ]
  },
  {
    id: "artisan-co-working-space",
    name: "Lanna Co-Work & Create",
    location: "Chiang Mai, Thailand",
    type: "Co-working Space",
    description: "A vibrant co-working space designed for digital nomads and local creatives, featuring regular workshops and events.",
    longDescription: "Lanna Co-Work & Create is more than just a place to work; it's a community hub. We offer hot desks, private offices, and a fully equipped podcasting studio. Our strong community is built through weekly skill-sharing workshops and networking events. We are raising funds to lease and renovate the adjacent building, doubling our capacity and adding a dedicated event space to host larger, revenue-generating events.",
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"],
    targetRaise: 100000,
    revenueShare: 25,
    projectedYield: 15.2,
    raisedAmount: 85000,
    investorCount: 95,
     payouts: [
      { date: "2024-05-31", amount: 1500 },
      { date: "2024-06-30", amount: 1650 },
      { date: "2024-07-31", amount: 1800 },
    ]
  }
];

export const getVenueById = (id: string): Venue | undefined => {
  return VENUES.find(venue => venue.id === id);
}
