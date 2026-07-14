import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Minus, Plus, Truck, ShieldCheck, RefreshCw, Star, Sparkles } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Luxe Jewelry` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [{ title: "Product not found" }, { name: "robots", content: "noindex" }],
  }),
  component: ProductPage,
  notFoundComponent: () => <div className="py-24 text-center">Product not found.</div>,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const gallery = product.images || [product.image, product.image, product.image];
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product.colors[0]);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <nav className="text-xs text-muted-foreground mb-6">
        <Link to="/" className="hover:text-gold-dark">Home</Link> / <Link to="/shop" className="hover:text-gold-dark">Shop</Link> / <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-cream group">
            <img src={gallery[activeImg]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold tracking-widest uppercase text-primary-foreground">{product.badge}</span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {gallery.map((g: string, i: number) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-colors ${activeImg === i ? "border-gold" : "border-transparent"}`}>
                <img src={g} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="text-xs tracking-widest uppercase text-gold-dark">{product.category}</div>
          <h1 className="mt-2 font-serif-display text-4xl lg:text-5xl">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex gap-0.5 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : ""}`} />)}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} · {product.reviews} reviews</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-serif-display text-4xl">Rs. {product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">Rs. {product.originalPrice.toLocaleString()}</span>
                <span className="rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-medium text-destructive">
                  Save Rs. {(product.originalPrice - product.price).toLocaleString()}
                </span>
              </>
            )}
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Color */}
          <div className="mt-8">
            <div className="text-sm font-medium mb-2">Color: <span className="text-muted-foreground font-normal">{color}</span></div>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button key={c} onClick={() => setColor(c)} className={`rounded-full border px-4 py-2 text-xs transition-colors ${color === c ? "bg-ink text-primary-foreground border-ink" : "hover:border-gold"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <div className="text-sm font-medium mb-2">Quantity</div>
            <div className="inline-flex items-center rounded-full border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-11 w-11 place-items-center hover:text-gold-dark"><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center font-medium">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="grid h-11 w-11 place-items-center hover:text-gold-dark"><Plus className="h-4 w-4" /></button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="flex-1 min-w-[200px] rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-primary-foreground hover:bg-ink/90">Add to Cart</button>
            <button className="flex-1 min-w-[200px] rounded-full gradient-gold px-8 py-3.5 text-sm font-medium text-ink hover:opacity-90">Buy Now</button>
            <button aria-label="Wishlist" className="grid h-12 w-12 place-items-center rounded-full border hover:border-gold hover:text-gold-dark"><Heart className="h-5 w-5" /></button>
          </div>

          {/* Perks */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { icon: Truck, label: "Free shipping over Rs. 5000" },
              { icon: RefreshCw, label: "7-day easy exchange" },
              { icon: ShieldCheck, label: "Lifetime shine warranty" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-xl border p-3 text-xs">
                <Icon className="h-4 w-4 text-gold-dark mb-1.5" />
                {label}
              </div>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-8 rounded-2xl border p-5 bg-cream">
            <div className="flex items-center gap-2 font-serif-display text-lg mb-3"><Sparkles className="h-4 w-4 text-gold" /> Specifications</div>
            <dl className="grid grid-cols-2 gap-y-2 text-sm">
              <dt className="text-muted-foreground">Material</dt><dd>{product.material}</dd>
              <dt className="text-muted-foreground">Waterproof</dt><dd>Yes</dd>
              <dt className="text-muted-foreground">Hypoallergenic</dt><dd>Yes</dd>
              <dt className="text-muted-foreground">Anti-Tarnish</dt><dd>Yes</dd>
            </dl>
          </div>
        </div>
      </div>

      {/* Related */}
      <div className="mt-24">
        <h2 className="font-serif-display text-3xl sm:text-4xl">You May Also Love</h2>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
