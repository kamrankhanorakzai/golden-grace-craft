export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  badge?: "Best Seller" | "New" | "Limited Edition" | "Sale";
  material: string;
  colors: string[];
  description: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const products: Product[] = [
  {
    id: "p1", slug: "eternal-gold-chain", name: "Eternal Gold Chain Necklace",
    category: "Necklaces", price: 4499, originalPrice: 6999,
    image: img("photo-1611652022419-a9419f74343d"),
    images: [img("photo-1611652022419-a9419f74343d"), img("photo-1599643477877-530eb83abc8e"), img("photo-1602751584552-8ba73aad10e1")],
    rating: 4.9, reviews: 342, badge: "Best Seller",
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Rose Gold"],
    description: "A timeless piece crafted from premium stainless steel with a lustrous 18K gold plating. Waterproof, anti-tarnish, and hypoallergenic.",
  },
  {
    id: "p2", slug: "solitaire-halo-ring", name: "Solitaire Halo Ring",
    category: "Rings", price: 2999, originalPrice: 4499,
    image: img("photo-1605100804763-247f67b3557e"),
    rating: 4.8, reviews: 218, badge: "New",
    material: "Stainless Steel with Zirconia", colors: ["Silver", "Gold"],
    description: "Elegant halo design featuring a brilliant-cut center stone surrounded by pavé accents.",
  },
  {
    id: "p3", slug: "pearl-drop-earrings", name: "Pearl Drop Earrings",
    category: "Earrings", price: 1899, originalPrice: 2999,
    image: img("photo-1535632066927-ab7c9ab60908"),
    rating: 4.9, reviews: 456, badge: "Best Seller",
    material: "Freshwater Pearl & Gold Plated Steel", colors: ["Gold"],
    description: "Delicate freshwater pearls suspended from minimalist gold-plated hooks.",
  },
  {
    id: "p4", slug: "infinity-tennis-bracelet", name: "Infinity Tennis Bracelet",
    category: "Bracelets", price: 3499, originalPrice: 4999,
    image: img("photo-1515562141207-7a88fb7ce338"),
    rating: 4.7, reviews: 189, badge: "Limited Edition",
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Silver"],
    description: "A continuous line of shimmering stones set in a flexible link bracelet.",
  },
  {
    id: "p5", slug: "celeste-anklet", name: "Celeste Star Anklet",
    category: "Anklets", price: 1499,
    image: img("photo-1573408301185-9146fe634ad0"),
    rating: 4.8, reviews: 127, badge: "New",
    material: "Gold Plated Stainless Steel", colors: ["Gold"],
    description: "Dainty anklet adorned with tiny star charms — perfect for layering.",
  },
  {
    id: "p6", slug: "monaco-luxury-watch", name: "Monaco Luxury Watch",
    category: "Watches", price: 8999, originalPrice: 12999,
    image: img("photo-1524592094714-0f0654e20314"),
    rating: 4.9, reviews: 89, badge: "Limited Edition",
    material: "Stainless Steel, Sapphire Crystal", colors: ["Gold", "Silver", "Rose Gold"],
    description: "A refined timepiece with a sunburst dial and premium stainless steel bracelet.",
  },
  {
    id: "p7", slug: "duo-heart-pendant", name: "Duo Heart Pendant Necklace",
    category: "Necklaces", price: 2299, originalPrice: 3499,
    image: img("photo-1599643478518-a784e5dc4c8f"),
    rating: 4.8, reviews: 267, badge: "Sale",
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Rose Gold"],
    description: "Two intertwined hearts symbolizing eternal bond.",
  },
  {
    id: "p8", slug: "royal-gift-set", name: "Royal Gift Set",
    category: "Gift Sets", price: 6999, originalPrice: 9999,
    image: img("photo-1600721391776-b5cd0e0048f9"),
    rating: 4.9, reviews: 156, badge: "Best Seller",
    material: "Necklace, Earrings & Bracelet", colors: ["Gold"],
    description: "A curated trio of our best-sellers presented in signature luxury packaging.",
  },
];

export const categories = [
  { name: "Necklaces", image: img("photo-1611652022419-a9419f74343d"), slug: "necklaces" },
  { name: "Rings", image: img("photo-1605100804763-247f67b3557e"), slug: "rings" },
  { name: "Bracelets", image: img("photo-1515562141207-7a88fb7ce338"), slug: "bracelets" },
  { name: "Earrings", image: img("photo-1535632066927-ab7c9ab60908"), slug: "earrings" },
  { name: "Anklets", image: img("photo-1573408301185-9146fe634ad0"), slug: "anklets" },
  { name: "Watches", image: img("photo-1524592094714-0f0654e20314"), slug: "watches" },
  { name: "Gift Sets", image: img("photo-1600721391776-b5cd0e0048f9"), slug: "gift-sets" },
];

export const reviews = [
  { name: "Aisha Khan", photo: "https://i.pravatar.cc/120?img=48", rating: 5, text: "Absolutely stunning quality. My necklace still looks brand new after 6 months of daily wear.", verified: true },
  { name: "Priya Sharma", photo: "https://i.pravatar.cc/120?img=32", rating: 5, text: "The packaging alone made me gasp. This is a gift I'd be proud to give — or keep.", verified: true },
  { name: "Sara Ahmed", photo: "https://i.pravatar.cc/120?img=45", rating: 5, text: "Waterproof claims are 100% real. Wore mine to the beach and swimming — zero tarnish.", verified: true },
  { name: "Zara Ali", photo: "https://i.pravatar.cc/120?img=36", rating: 5, text: "Bought the Royal Gift Set for my sister's wedding. She was in tears. Truly heirloom quality.", verified: true },
  { name: "Hana Rehman", photo: "https://i.pravatar.cc/120?img=44", rating: 5, text: "Customer service is exceptional. Fast shipping, beautiful pieces. Now a loyal customer.", verified: true },
];

export const gallery = [
  img("photo-1611591437281-460bfbe1220a"),
  img("photo-1617038220319-276d3cfab638"),
  img("photo-1602283454577-b6df1c6f8d51"),
  img("photo-1599643477877-530eb83abc8e"),
  img("photo-1602752275197-9a1eb1c5f2a5"),
  img("photo-1588444837495-c6cfeb53f32d"),
];
