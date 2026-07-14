import { Link } from "@tanstack/react-router";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/products";

const badgeStyles: Record<string, string> = {
  "Best Seller": "bg-ink text-primary-foreground",
  "New": "bg-gold text-ink",
  "Limited Edition": "bg-gold-dark text-white",
  "Sale": "bg-destructive text-white",
};

export function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="absolute inset-0"
          aria-label={product.name}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase ${badgeStyles[product.badge]}`}>
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-ink">
              -{discount}%
            </span>
          )}
        </div>

        <button
          aria-label="Wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur-sm opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gold hover:text-ink"
        >
          <Heart className="h-4 w-4" />
        </button>

        <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button className="flex-1 flex items-center justify-center gap-1.5 rounded-full bg-ink py-2.5 text-xs font-medium text-primary-foreground hover:bg-ink/90">
            <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
          </button>
          <button aria-label="Quick view" className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink hover:bg-gold">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews})</span>
          <span className="mx-1.5">·</span>
          <span>{product.category}</span>
        </div>
        <Link to="/product/$slug" params={{ slug: product.slug }} className="font-medium text-foreground hover:text-gold-dark transition-colors line-clamp-1">
          {product.name}
        </Link>
        <div className="flex items-baseline gap-2">
          <span className="font-semibold">Rs. {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">Rs. {product.originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  );
}
