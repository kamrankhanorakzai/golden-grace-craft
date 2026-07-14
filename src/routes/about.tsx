import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { Gem, Heart, Leaf, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Luxe Jewelry" }, { name: "description", content: "Our story, values and craftsmanship." }] }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">Our Story</div>
          <h1 className="mt-2 font-serif-display text-5xl sm:text-6xl leading-[1.05]">Crafted for a Lifetime <span className="italic text-gold-dark">of Shine</span></h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Luxe Jewelry was born from a simple idea: exquisite jewelry shouldn't be reserved for
            special occasions. We use premium stainless steel and PVD gold plating so every piece
            can be worn every day — through showers, workouts, and life's tender moments.
          </p>
        </div>
        <div className="mt-14 mx-auto max-w-5xl px-4">
          <img src={heroImg} alt="Our workshop" className="w-full aspect-[16/9] object-cover rounded-3xl shadow-luxe" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs tracking-widest uppercase text-gold-dark">Our Mission</div>
          <h2 className="mt-2 font-serif-display text-4xl sm:text-5xl">Beautiful jewelry, no compromises.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We believe luxury should be lived-in. Every Luxe piece is engineered to resist water,
            tarnish, and time — so you can wear it, love it, and hand it down.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Gem, title: "Premium Materials", text: "316L stainless steel and 18K PVD gold plating." },
            { icon: Leaf, title: "Ethically Sourced", text: "Responsibly sourced components, zero shortcuts." },
            { icon: Heart, title: "Hypoallergenic", text: "Safe for every skin type, sensitive included." },
            { icon: Sparkles, title: "Lifetime Shine", text: "Guaranteed to never fade or tarnish." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border p-5 hover:border-gold transition-colors">
              <Icon className="h-6 w-6 text-gold-dark" />
              <div className="mt-3 font-serif-display text-lg">{title}</div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-xs tracking-widest uppercase text-gold">Our Craftsmanship</div>
          <h2 className="mt-2 font-serif-display text-4xl sm:text-5xl">Every piece, a small ceremony</h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            From the first sketch to the final polish, every Luxe piece is inspected by hand.
            We take our time — because heirlooms deserve nothing less.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 text-left">
            {[["7 yrs", "In business"], ["25k+", "Happy customers"], ["4.9★", "Average rating"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 p-6">
                <div className="font-serif-display text-4xl text-gold">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
