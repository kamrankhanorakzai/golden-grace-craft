import { createFileRoute } from "@tanstack/react-router";
import { gallery } from "@/lib/products";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Journal — Luxe Jewelry" }, { name: "description", content: "Style guides, jewelry care and stories." }] }),
  component: Blog,
});

const posts = [
  { title: "How to Layer Necklaces Like a Stylist", excerpt: "Master the art of layering with these five styling rules.", tag: "Style Guide", date: "Nov 12, 2025" },
  { title: "The Science Behind Anti-Tarnish Jewelry", excerpt: "Why stainless steel and PVD plating stay brilliant.", tag: "Materials", date: "Nov 04, 2025" },
  { title: "Gifting Guide: For the Woman Who Has It All", excerpt: "Our editors' picks for meaningful, memorable gifts.", tag: "Gifting", date: "Oct 28, 2025" },
  { title: "Caring for Your Luxe Pieces", excerpt: "Simple habits to keep your jewelry shining for years.", tag: "Care", date: "Oct 15, 2025" },
];

function Blog() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">The Journal</div>
        <h1 className="mt-2 font-serif-display text-5xl sm:text-6xl">Stories & Style</h1>
      </div>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {posts.map((p, i) => (
          <a href="#" key={i} className="group">
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
              <img src={gallery[i % gallery.length]} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-gold/15 text-gold-dark px-2.5 py-0.5 tracking-widest uppercase">{p.tag}</span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h2 className="mt-2 font-serif-display text-2xl group-hover:text-gold-dark transition-colors">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
