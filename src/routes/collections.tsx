import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/collections")({
  head: () => ({ meta: [{ title: "Collections — Luxe Jewelry" }, { name: "description", content: "Curated jewelry collections for every moment." }] }),
  component: Collections,
});

function Collections() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">Curated Collections</div>
        <h1 className="mt-2 font-serif-display text-5xl sm:text-6xl">Made for Moments</h1>
        <p className="mt-4 text-muted-foreground">Every collection tells a story — discover pieces designed for how you live, love, and celebrate.</p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {categories.map((c, i) => (
          <Link key={c.slug} to="/shop" className={`group relative overflow-hidden rounded-3xl bg-muted ${i % 3 === 0 ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/5]"}`}>
            <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="text-xs tracking-widest uppercase text-gold mb-2">Collection</div>
              <h2 className="font-serif-display text-4xl text-white">{c.name}</h2>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-white/90 group-hover:text-gold transition-colors">
                Explore <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
