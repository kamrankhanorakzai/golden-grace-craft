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
  inStock?: boolean;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const products: Product[] = [
  {
    id: "p1", slug: "eternal-gold-chain", name: "Eternal Gold Chain Necklace",
    category: "Necklaces", price: 129, originalPrice: 189,
    image: img("photo-1611652022419-a9419f74343d"),
    images: [img("photo-1611652022419-a9419f74343d"), img("photo-1599643477877-530eb83abc8e"), img("photo-1602751584552-8ba73aad10e1")],
    rating: 4.9, reviews: 342, badge: "Best Seller",
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Rose Gold"],
    description: "A timeless piece crafted from premium stainless steel with a lustrous 18K gold plating. Waterproof, anti-tarnish, and hypoallergenic.",
  },
  {
    id: "p2", slug: "solitaire-halo-ring", name: "Solitaire Halo Ring",
    category: "Rings", price: 89, originalPrice: 135,
    image: img("photo-1605100804763-247f67b3557e"),
    rating: 4.8, reviews: 218, badge: "New",
    material: "Stainless Steel with Zirconia", colors: ["Silver", "Gold"],
    description: "Elegant halo design featuring a brilliant-cut center stone surrounded by pavé accents.",
  },
  {
    id: "p3", slug: "pearl-drop-earrings", name: "Pearl Drop Earrings",
    category: "Earrings", price: 59, originalPrice: 89,
    image: img("photo-1535632066927-ab7c9ab60908"),
    rating: 4.9, reviews: 456, badge: "Best Seller",
    material: "Freshwater Pearl & Gold Plated Steel", colors: ["Gold"],
    description: "Delicate freshwater pearls suspended from minimalist gold-plated hooks.",
  },
  {
    id: "p4", slug: "infinity-tennis-bracelet", name: "Infinity Tennis Bracelet",
    category: "Bracelets", price: 105, originalPrice: 149,
    image: img("photo-1515562141207-7a88fb7ce338"),
    rating: 4.7, reviews: 189, badge: "Limited Edition",
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Silver"],
    description: "A continuous line of shimmering stones set in a flexible link bracelet.",
  },
  {
    id: "p5", slug: "celeste-anklet", name: "Celeste Star Anklet",
    category: "Anklets", price: 45,
    image: img("photo-1573408301185-9146fe634ad0"),
    rating: 4.8, reviews: 127, badge: "New",
    material: "Gold Plated Stainless Steel", colors: ["Gold"],
    description: "Dainty anklet adorned with tiny star charms — perfect for layering.",
  },
  {
    id: "p6", slug: "monaco-luxury-watch", name: "Monaco Luxury Watch",
    category: "Watches", price: 279, originalPrice: 389,
    image: img("photo-1524592094714-0f0654e20314"),
    rating: 4.9, reviews: 89, badge: "Limited Edition",
    material: "Stainless Steel, Sapphire Crystal", colors: ["Gold", "Silver", "Rose Gold"],
    description: "A refined timepiece with a sunburst dial and premium stainless steel bracelet.",
  },
  {
    id: "p7", slug: "duo-heart-pendant", name: "Duo Heart Pendant Necklace",
    category: "Necklaces", price: 69, originalPrice: 99,
    image: img("photo-1599643478518-a784e5dc4c8f"),
    rating: 4.8, reviews: 267, badge: "Sale",
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Rose Gold"],
    description: "Two intertwined hearts symbolizing eternal bond.",
  },
  {
    id: "p8", slug: "royal-gift-set", name: "Royal Gift Set",
    category: "Gift Sets", price: 199, originalPrice: 289,
    image: img("photo-1600721391776-b5cd0e0048f9"),
    rating: 4.9, reviews: 156, badge: "Best Seller",
    material: "Necklace, Earrings & Bracelet", colors: ["Gold"],
    description: "A curated trio of our best-sellers presented in signature luxury packaging.",
  },
  {
    id: "p9", slug: "aurora-tennis-necklace", name: "Aurora Tennis Necklace",
    category: "Necklaces", price: 159, originalPrice: 215,
    image: img("photo-1599643478518-a784e5dc4c8f"),
    rating: 4.8, reviews: 203, badge: "Limited Edition",
    material: "Rhodium Plated Steel with Cubic Zirconia", colors: ["Silver", "Gold"],
    description: "A red-carpet staple: 84 hand-set brilliant stones in a fluid, weightless line.",
  },
  {
    id: "p10", slug: "milano-cuban-chain", name: "Milano Cuban Link Chain",
    category: "Necklaces", price: 119,
    image: img("photo-1602751584552-8ba73aad10e1"),
    rating: 4.7, reviews: 174,
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Silver"],
    description: "A bold 5mm Cuban link with a secure box clasp — sculpted for everyday statement wear.",
  },
  {
    id: "p11", slug: "petite-initial-necklace", name: "Petite Initial Necklace",
    category: "Necklaces", price: 55, originalPrice: 79,
    image: img("photo-1611591437281-460bfbe1220a"),
    rating: 4.9, reviews: 512, badge: "Best Seller",
    material: "14K Gold Plated Stainless Steel", colors: ["Gold", "Rose Gold", "Silver"],
    description: "Personalize your everyday layer with a delicate script initial pendant.",
  },
  {
    id: "p12", slug: "vintage-signet-ring", name: "Vintage Signet Ring",
    category: "Rings", price: 75,
    image: img("photo-1603561591411-07134e71a2a9"),
    rating: 4.6, reviews: 98, badge: "New",
    material: "Polished Stainless Steel", colors: ["Gold", "Silver"],
    description: "A heirloom-inspired signet with a softly domed face and hand-finished edges.",
  },
  {
    id: "p13", slug: "eternity-band-ring", name: "Pavé Eternity Band",
    category: "Rings", price: 95, originalPrice: 129,
    image: img("photo-1598560917505-59a3ad559071"),
    rating: 4.9, reviews: 288, badge: "Sale",
    material: "Stainless Steel with Cubic Zirconia", colors: ["Silver", "Gold", "Rose Gold"],
    description: "A full circle of pavé stones — beautiful alone or stacked with your engagement ring.",
  },
  {
    id: "p14", slug: "stackable-ring-trio", name: "Stackable Ring Trio",
    category: "Rings", price: 65,
    image: img("photo-1605100804763-247f67b3557e"),
    rating: 4.7, reviews: 141,
    material: "18K Gold Plated Stainless Steel", colors: ["Gold"],
    description: "Three complementary bands — plain, twisted and pavé — designed to be worn together.",
  },
  {
    id: "p15", slug: "gold-huggie-hoops", name: "Gold Huggie Hoop Earrings",
    category: "Earrings", price: 49, originalPrice: 69,
    image: img("photo-1630019852942-f89202989a59"),
    rating: 4.9, reviews: 634, badge: "Best Seller",
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Silver"],
    description: "The everyday hoop: snug 12mm huggies that never come off, in the shower or the sea.",
  },
  {
    id: "p16", slug: "crystal-studs", name: "Crystal Solitaire Studs",
    category: "Earrings", price: 39,
    image: img("photo-1596944924616-7b38e7cfac36"),
    rating: 4.8, reviews: 377,
    material: "Stainless Steel with Cubic Zirconia", colors: ["Silver", "Gold"],
    description: "A 5mm brilliant-cut solitaire in a four-prong setting — refined and endlessly wearable.",
  },
  {
    id: "p17", slug: "cascade-drop-earrings", name: "Cascade Statement Drops",
    category: "Earrings", price: 79, originalPrice: 109,
    image: img("photo-1629224316810-9d8805b95e76"),
    rating: 4.7, reviews: 112, badge: "New",
    material: "Gold Plated Steel with Crystal", colors: ["Gold"],
    description: "Sculptural cascading drops that catch every light — made for evenings out.",
  },
  {
    id: "p18", slug: "herringbone-bracelet", name: "Herringbone Flat Bracelet",
    category: "Bracelets", price: 72,
    image: img("photo-1611591437281-460bfbe1220a"),
    rating: 4.8, reviews: 198,
    material: "18K Gold Plated Stainless Steel", colors: ["Gold", "Silver"],
    description: "A liquid-smooth herringbone weave that lies flat against the wrist.",
  },
  {
    id: "p19", slug: "paperclip-chain-bracelet", name: "Paperclip Chain Bracelet",
    category: "Bracelets", price: 58, originalPrice: 82,
    image: img("photo-1626784215021-2e39ccf971cd"),
    rating: 4.7, reviews: 165, badge: "Sale",
    material: "14K Gold Plated Stainless Steel", colors: ["Gold", "Rose Gold"],
    description: "Elongated links with an adjustable extender — the modern layering essential.",
  },
  {
    id: "p20", slug: "beaded-charm-anklet", name: "Beaded Charm Anklet",
    category: "Anklets", price: 42,
    image: img("photo-1573408301185-9146fe634ad0"),
    rating: 4.6, reviews: 88,
    material: "Gold Plated Steel & Glass Beads", colors: ["Gold", "Silver"],
    description: "Tiny faceted beads and a single heart charm for a sunlit, barefoot look.",
  },
  {
    id: "p21", slug: "rose-gold-mesh-watch", name: "Rose Gold Mesh Watch",
    category: "Watches", price: 189, originalPrice: 249,
    image: img("photo-1523170335258-f5ed11844a49"),
    rating: 4.8, reviews: 143, badge: "Sale",
    material: "Stainless Steel Mesh, Mineral Glass", colors: ["Rose Gold", "Gold"],
    description: "A slim 34mm case on a breathable mesh strap — quietly elegant, day to night.",
  },
  {
    id: "p22", slug: "classic-leather-watch", name: "Heritage Leather Watch",
    category: "Watches", price: 215,
    image: img("photo-1533139502658-0198f920d8e8"),
    rating: 4.7, reviews: 76, badge: "New",
    material: "Italian Leather & Stainless Steel", colors: ["Gold", "Silver"],
    description: "Full-grain Italian leather paired with a sunray dial and sapphire-coated glass.",
  },
  {
    id: "p23", slug: "bridal-pearl-set", name: "Bridal Pearl Gift Set",
    category: "Gift Sets", price: 165, originalPrice: 229,
    image: img("photo-1617038220319-276d3cfab638"),
    rating: 4.9, reviews: 121, badge: "Limited Edition",
    material: "Freshwater Pearls & Gold Plated Steel", colors: ["Gold", "Silver"],
    description: "Necklace, studs and bracelet in matched freshwater pearls — a keepsake wedding trio.",
  },
  {
    id: "p24", slug: "everyday-layering-set", name: "Everyday Layering Set",
    category: "Gift Sets", price: 139, originalPrice: 179,
    image: img("photo-1588444837495-c6cfeb53f32d"),
    rating: 4.8, reviews: 208, badge: "Best Seller",
    material: "18K Gold Plated Stainless Steel", colors: ["Gold"],
    description: "Three necklaces in graduated lengths, pre-styled so layering never tangles.",
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
  { name: "Ava Mitchell", photo: "https://i.pravatar.cc/120?img=48", rating: 5, text: "Absolutely stunning quality. My necklace still looks brand new after 6 months of daily wear.", verified: true },
  { name: "Sofia Ramirez", photo: "https://i.pravatar.cc/120?img=32", rating: 5, text: "The packaging alone made me gasp. This is a gift I'd be proud to give — or keep.", verified: true },
  { name: "Olivia Bennett", photo: "https://i.pravatar.cc/120?img=45", rating: 5, text: "Waterproof claims are 100% real. Wore mine to the beach and swimming — zero tarnish.", verified: true },
  { name: "Emma Carter", photo: "https://i.pravatar.cc/120?img=36", rating: 5, text: "Bought the Royal Gift Set for my sister's wedding. She was in tears. Truly heirloom quality.", verified: true },
  { name: "Hannah Brooks", photo: "https://i.pravatar.cc/120?img=44", rating: 5, text: "Customer service is exceptional. Fast shipping, beautiful pieces. Now a loyal customer.", verified: true },
];

export const gallery = [
  img("photo-1611591437281-460bfbe1220a"),
  img("photo-1617038220319-276d3cfab638"),
  img("photo-1620656798579-1984d9e87df7"),
  img("photo-1599643477877-530eb83abc8e"),
  img("photo-1608042314453-ae338d80c427"),
  img("photo-1588444837495-c6cfeb53f32d"),
];
