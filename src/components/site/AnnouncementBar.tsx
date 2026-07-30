const items = [
  "✨ Free Shipping on Orders on U.S. Orders Over $75",
  "🎁 Premium Gift Packaging Available",
  "⭐ Trusted by 25,000+ Customers",
  "💎 Waterproof & Anti-Tarnish Guarantee",
];

export function AnnouncementBar() {
  return (
    <div className="bg-ink text-primary-foreground overflow-hidden py-2 text-xs tracking-[0.15em] uppercase">
      <div className="marquee flex w-max gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-16">
            {t}
            <span className="text-gold">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
