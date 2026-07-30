import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="font-serif-display text-3xl">Luxe<span className="text-gold italic"> Jewelry</span></div>
          <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
            Timeless jewelry crafted from premium stainless steel. Waterproof, anti-tarnish,
            hypoallergenic — designed for a lifetime of shine.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> hello@luxejewelry.com</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +1 (212) 555-0184</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> New York, NY, USA</div>
          </div>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 hover:border-gold hover:text-gold transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <Col title="Quick Links" items={[
          ["Home", "/"], ["Shop", "/shop"], ["Collections", "/collections"],
          ["New Arrivals", "/new-arrivals"], ["Best Sellers", "/best-sellers"],
        ]} />
        <Col title="Customer" items={[
          ["Contact", "/contact"], ["Track Order", "/track-order"],
          ["Reviews", "/reviews"], ["Blog", "/blog"], ["About", "/about"],
        ]} />
        <Col title="Policies" items={[
          ["Shipping", "#"], ["Returns", "#"], ["Privacy", "#"],
          ["Terms", "#"], ["FAQ", "/#faq"],
        ]} />
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Luxe Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-3 text-white/70">
            {["VISA", "Mastercard", "AmEx", "Discover", "PayPal", "Apple Pay", "Klarna"].map((p) => (
              <span key={p} className="rounded border border-white/15 px-2 py-1 text-[10px] tracking-widest">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-serif-display text-lg mb-4 text-gold">{title}</h4>
      <ul className="space-y-2.5 text-sm text-white/70">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link to={href as string} className="hover:text-gold transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
