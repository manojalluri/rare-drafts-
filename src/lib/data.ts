import wedding from "@/assets/cat-wedding.jpg";
import auto from "@/assets/cat-automotive.jpg";
import party from "@/assets/cat-party.jpg";
import food from "@/assets/cat-food.jpg";

export const categories = [
  { slug: "wedding", title: "Weddings", img: wedding, jobs: 1240, from: 14999 },
  { slug: "party", title: "Parties & Nightlife", img: party, jobs: 980, from: 4999 },
  { slug: "automotive", title: "Automotive", img: auto, jobs: 412, from: 9999 },
  { slug: "food", title: "Food & Restaurants", img: food, jobs: 720, from: 4999 },
];

export type Creator = {
  id: string;
  name: string;
  handle: string;
  city: string;
  rating: number;
  shoots: number;
  specialty: string;
  rate: number;
  cover: string;
  badge?: string;
};

export const creators: Creator[] = [
  {
    id: "c1",
    name: "Aarav Mehta",
    handle: "@aarav.frames",
    city: "Mumbai",
    rating: 4.97,
    shoots: 312,
    specialty: "Weddings",
    rate: 14999,
    cover: wedding,
    badge: "Top Pro",
  },
  {
    id: "c2",
    name: "Sana Iqbal",
    handle: "@sana.shoots",
    city: "Bangalore",
    rating: 4.92,
    shoots: 244,
    specialty: "Parties",
    rate: 6999,
    cover: party,
    badge: "Reels Pro",
  },
  {
    id: "c3",
    name: "Devon Cole",
    handle: "@devon.lens",
    city: "Delhi",
    rating: 4.88,
    shoots: 178,
    specialty: "Automotive",
    rate: 11999,
    cover: auto,
  },
  {
    id: "c4",
    name: "Maya Reyes",
    handle: "@maya.eats",
    city: "Pune",
    rating: 4.95,
    shoots: 401,
    specialty: "Food",
    rate: 4999,
    cover: food,
    badge: "Featured",
  },
  {
    id: "c5",
    name: "Kabir Shah",
    handle: "@kabir.films",
    city: "Goa",
    rating: 4.9,
    shoots: 220,
    specialty: "Weddings",
    rate: 19999,
    cover: wedding,
  },
  {
    id: "c6",
    name: "Lila Park",
    handle: "@lila.moves",
    city: "Hyderabad",
    rating: 4.86,
    shoots: 156,
    specialty: "Parties",
    rate: 5999,
    cover: party,
  },
];

export const packages = [
  {
    name: "Spark",
    price: 4999,
    blurb: "Quick reels for parties, dinners, drops.",
    features: ["1 hour on-site", "1 reel · 30s", "10 edited stills", "Delivered in 30 min"],
    accent: false,
  },
  {
    name: "Blaze",
    price: 14999,
    blurb: "Our most-booked package for events.",
    features: [
      "3 hours on-site",
      "3 reels + raw clips",
      "60 edited stills",
      "Delivered same night",
      "Music sync + captions",
    ],
    accent: true,
  },
  {
    name: "Inferno",
    price: 34999,
    blurb: "Full-day coverage, cinematic edit.",
    features: [
      "8 hours on-site",
      "5 reels + 4-min film",
      "200 edited stills",
      "Drone + 2nd shooter",
      "48h cinematic cut",
    ],
    accent: false,
  },
];

export const testimonials = [
  {
    name: "Riya Kapoor",
    role: "Bride · Mumbai",
    quote: "Reels were on my Instagram before the cake was cut. Surreal.",
  },
  {
    name: "Arjun N.",
    role: "Marketing Lead · Zomato",
    quote: "We do brand activations weekly. Flashshot is now a line item.",
  },
  {
    name: "Tara M.",
    role: "Influencer",
    quote: "I stopped carrying my own gear. Faster, sharper, way better.",
  },
];
