import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/best-sellers")({
  head: () => ({ meta: [{ title: "Best Sellers — Luxe Jewelry" }, { name: "description", content: "The pieces our customers love most." }] }),
  component: () => {
    const list = [...products].sort((a, b) => b.reviews - a.reviews);
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="text-center">
          <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">Customer Favorites</div>
          <h1 className="mt-2 font-serif-display text-5xl sm:text-6xl">Best Sellers</h1>
          <p className="mt-3 text-muted-foreground">Loved by thousands, tested by daily wear.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    );
  },
});
