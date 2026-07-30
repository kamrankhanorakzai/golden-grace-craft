import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { ProductCard } from "@/components/site/ProductCard";
import { SlidersHorizontal, Grid3x3, List } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [{ title: "Shop — Luxe Jewelry" }, { name: "description", content: "Explore the full Luxe Jewelry collection." }] }),
  component: Shop,
});

const categoryList = ["All", "Necklaces", "Rings", "Bracelets", "Earrings", "Anklets", "Watches", "Gift Sets"];
const materials = ["Stainless Steel", "Gold Plated", "Rose Gold", "Silver"];
const colors = ["Gold", "Silver", "Rose Gold"];
const sizes = ["S", "M", "L", "XL"];

function Shop() {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("featured");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [priceMax, setPriceMax] = useState(400);

  let filtered = products.filter((p) => (cat === "All" || p.category === cat) && p.price <= priceMax);
  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">Collection</div>
        <h1 className="mt-2 font-serif-display text-5xl sm:text-6xl">Shop All</h1>
        <p className="mt-3 text-muted-foreground">{filtered.length} pieces to fall in love with</p>
      </div>

      <div className="mt-12 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="space-y-8">
          <FilterBlock title="Categories">
            <ul className="space-y-1.5 text-sm">
              {categoryList.map((c) => (
                <li key={c}>
                  <button onClick={() => setCat(c)} className={`w-full text-left rounded-md px-2 py-1.5 transition-colors ${cat === c ? "bg-ink text-primary-foreground" : "hover:bg-muted"}`}>{c}</button>
                </li>
              ))}
            </ul>
          </FilterBlock>
          <FilterBlock title="Price Range">
            <input type="range" min={25} max={400} step={25} value={priceMax} onChange={(e) => setPriceMax(+e.target.value)} className="w-full accent-[oklch(0.78_0.14_85)]" />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>$25</span><span className="font-medium text-foreground">Up to {formatPrice(priceMax)}{priceMax >= 400 ? "+" : ""}</span>
            </div>
          </FilterBlock>
          <FilterBlock title="Material">{materials.map((m) => <Chip key={m}>{m}</Chip>)}</FilterBlock>
          <FilterBlock title="Color">
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => <Chip key={c}>{c}</Chip>)}
            </div>
          </FilterBlock>
          <FilterBlock title="Size">
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => <Chip key={s}>{s}</Chip>)}
            </div>
          </FilterBlock>
        </aside>

        <div>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-4 border-b">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4" /> {filtered.length} products
            </div>
            <div className="flex items-center gap-3">
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border bg-background px-4 py-2 text-sm outline-none focus:border-gold">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <div className="flex rounded-full border overflow-hidden">
                <button aria-label="Grid" onClick={() => setView("grid")} className={`p-2 ${view === "grid" ? "bg-ink text-primary-foreground" : ""}`}><Grid3x3 className="h-4 w-4" /></button>
                <button aria-label="List" onClick={() => setView("list")} className={`p-2 ${view === "list" ? "bg-ink text-primary-foreground" : ""}`}><List className="h-4 w-4" /></button>
              </div>
            </div>
          </div>

          <div className={view === "grid" ? "grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" : "space-y-6"}>
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-1">
            {[1, 2, 3, 4].map((n) => (
              <button key={n} className={`h-9 w-9 rounded-full text-sm font-medium ${n === 1 ? "bg-ink text-primary-foreground" : "border hover:border-gold"}`}>{n}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-serif-display text-lg mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn(!on)} className={`rounded-full border px-3 py-1.5 text-xs mr-1.5 mb-1.5 transition-colors ${on ? "bg-ink text-primary-foreground border-ink" : "hover:border-gold"}`}>
      {children}
    </button>
  );
}
