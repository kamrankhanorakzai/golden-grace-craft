import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Shield, Sparkles, Gem, Sun, Gift, Truck, RefreshCw, Star, Instagram } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { products, categories, reviews, gallery } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs tracking-widest uppercase text-gold-dark">
              <Sparkles className="h-3.5 w-3.5" /> New Collection 2026
            </span>
            <h1 className="mt-5 font-serif-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Timeless Jewelry <br />
              <span className="italic text-gold-dark">for Every Occasion</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Premium stainless steel jewelry designed to last. Waterproof, anti-tarnish,
              hypoallergenic, and crafted for everyday elegance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-ink/90 transition-all">
                Shop Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/collections" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium hover:border-gold hover:text-gold-dark transition-colors">
                Explore Collections
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-gold text-gold" /> 4.9 · 12k+ reviews</div>
              <div>25,000+ happy customers</div>
              <div>Ships worldwide</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-luxe">
              <img src={heroImg} alt="Luxe Jewelry" className="h-full w-full object-cover" width={1600} height={1200} />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-white p-4 shadow-luxe max-w-[220px]">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full gradient-gold text-ink"><Gem className="h-4 w-4" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Lifetime</div>
                  <div className="font-semibold text-sm">Shine Guarantee</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 rounded-full bg-ink text-white px-4 py-2 text-xs shadow-luxe">
              <Droplets className="h-4 w-4 text-gold" /> 100% Waterproof
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading eyebrow="Shop by Category" title="Featured Categories" />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-muted"
            >
              <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="font-serif-display text-xl sm:text-2xl text-white">{c.name}</div>
                <div className="mt-1 inline-flex items-center gap-1 text-xs text-gold opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Shop <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading eyebrow="Bestsellers" title="Loved by Thousands" />
            <Link to="/shop" className="text-sm font-medium text-gold-dark hover:text-ink inline-flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.slice(0, 8).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading eyebrow="The Luxe Promise" title="Why Choose Us" center />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Droplets, label: "Waterproof" },
            { icon: Shield, label: "Anti Tarnish" },
            { icon: Sparkles, label: "Hypoallergenic" },
            { icon: Gem, label: "Premium Steel" },
            { icon: Sun, label: "Lifetime Shine" },
            { icon: Gift, label: "Luxury Packaging" },
            { icon: Truck, label: "Free Shipping" },
            { icon: RefreshCw, label: "Easy Returns" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="group text-center rounded-2xl border p-6 transition-all hover:border-gold hover:shadow-luxe">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cream text-gold-dark transition-colors group-hover:gradient-gold group-hover:text-ink">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-3 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STYLE GALLERY */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="#WornWithLuxe" title="Style Gallery" center />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {gallery.map((src, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl bg-muted ${i === 0 || i === 3 ? "md:row-span-2 md:aspect-[3/5]" : "aspect-square"}`}>
                <img src={src} alt="Style" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading eyebrow="Reviews" title="What Our Customers Say" center />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((r) => (
            <div key={r.name} className="rounded-2xl border bg-background p-6 hover:shadow-luxe transition-shadow">
              <div className="flex gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={r.photo} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  {r.verified && <div className="text-[10px] uppercase tracking-widest text-gold-dark">✓ Verified Buyer</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-ink text-primary-foreground py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-gold text-sm tracking-widest uppercase"><Instagram className="h-4 w-4" /> @luxejewelry</div>
          <h2 className="mt-3 font-serif-display text-4xl sm:text-5xl">Follow Our Journey</h2>
          <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {gallery.map((g, i) => (
              <a href="#" key={i} className="relative aspect-square overflow-hidden rounded-lg group">
                <img src={g} alt="Instagram" loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors grid place-items-center">
                  <Instagram className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
          <a href="#" className="mt-10 inline-flex items-center gap-2 rounded-full gradient-gold px-7 py-3.5 text-sm font-medium text-ink hover:opacity-90">
            Follow Us <Instagram className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-cream p-8 sm:p-14 text-center">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full gradient-gold opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-gold-light opacity-30 blur-3xl" />
          <div className="relative">
            <div className="text-xs tracking-widest uppercase text-gold-dark">Exclusive Access</div>
            <h2 className="mt-3 font-serif-display text-4xl sm:text-5xl">Join Our VIP Club</h2>
            <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
              Receive exclusive offers, early access to new arrivals, and special member-only discounts.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input type="email" required placeholder="your@email.com" className="flex-1 rounded-full border bg-background px-5 py-3 text-sm outline-none focus:border-gold" />
              <button className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-primary-foreground hover:bg-ink/90">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading eyebrow="Support" title="Frequently Asked Questions" center />
        <Accordion type="single" collapsible className="mt-10">
          {[
            ["Is your jewelry waterproof?", "Yes — every Luxe piece is 100% waterproof. You can shower, swim, and sweat in them without worry."],
            ["Does it fade over time?", "No. Our premium stainless steel with PVD gold plating is engineered to keep its color for years, backed by our Lifetime Shine Guarantee."],
            ["How long is shipping?", "Standard delivery takes 2–4 business days across Pakistan. International orders arrive in 7–14 business days."],
            ["Can I exchange products?", "Absolutely. Unworn pieces in original packaging can be exchanged or returned within 7 days of delivery."],
            ["What payment methods are accepted?", "We accept Visa, Mastercard, American Express, JazzCash, Easypaisa, bank transfer, and Cash on Delivery."],
          ].map(([q, a]) => (
            <AccordionItem key={q} value={q} className="border-b">
              <AccordionTrigger className="text-left font-serif-display text-lg hover:text-gold-dark">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">{eyebrow}</div>
      <h2 className="mt-2 font-serif-display text-4xl sm:text-5xl">{title}</h2>
    </div>
  );
}
