import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/new-arrivals")({
  head: () => ({ meta: [{ title: "New Arrivals — Luxe Jewelry" }, { name: "description", content: "The latest pieces to join our collection." }] }),
  component: () => {
    const list = products.filter((p) => p.badge === "New" || p.badge === "Limited Edition");
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="text-center">
          <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">Just In</div>
          <h1 className="mt-2 font-serif-display text-5xl sm:text-6xl">New Arrivals</h1>
          <p className="mt-3 text-muted-foreground">Fresh drops. Limited quantities.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {list.concat(products).slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    );
  },
});
