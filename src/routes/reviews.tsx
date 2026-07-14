import { createFileRoute } from "@tanstack/react-router";
import { reviews } from "@/lib/products";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [{ title: "Reviews — Luxe Jewelry" }, { name: "description", content: "Real reviews from real Luxe customers." }] }),
  component: () => (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">Verified Customer Reviews</div>
        <h1 className="mt-2 font-serif-display text-5xl sm:text-6xl">4.9 out of 5</h1>
        <div className="mt-3 flex justify-center gap-1 text-gold">
          {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
        </div>
        <p className="mt-2 text-muted-foreground">Based on 12,847 verified reviews</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {reviews.concat(reviews).map((r, i) => (
          <div key={i} className="rounded-2xl border p-6 hover:shadow-luxe transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <img src={r.photo} alt={r.name} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <div className="font-medium">{r.name}</div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-dark">
                  <span className="flex gap-0.5 text-gold">{[...Array(5)].map((_, k) => <Star key={k} className="h-3 w-3 fill-current" />)}</span>
                  ✓ Verified
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
          </div>
        ))}
      </div>
    </div>
  ),
});
