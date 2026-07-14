import { Link } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnnouncementBar } from "./AnnouncementBar";

const nav = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/collections" },
  { label: "New Arrivals", to: "/new-arrivals" },
  { label: "Best Sellers", to: "/best-sellers" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/reviews" },
  { label: "Blog", to: "/blog" },
  { label: "Track Order", to: "/track-order" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <AnnouncementBar />
      <div
        className={`w-full bg-background/90 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-[0_1px_0_0_var(--border),0_10px_30px_-20px_rgba(0,0,0,0.15)]" : "border-b"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <button
            className="lg:hidden -ml-2 p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="flex items-baseline gap-1 shrink-0">
            <span className="font-serif-display text-2xl tracking-tight sm:text-3xl">Luxe</span>
            <span className="text-gold font-serif-display text-2xl italic sm:text-3xl">Jewelry</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <IconBtn label="Search"><Search className="h-4.5 w-4.5" /></IconBtn>
            <IconBtn label="Wishlist"><Heart className="h-4.5 w-4.5" /></IconBtn>
            <IconBtn label="Account"><User className="h-4.5 w-4.5" /></IconBtn>
            <IconBtn label="Cart" badge="2"><ShoppingBag className="h-4.5 w-4.5" /></IconBtn>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-background p-6 shadow-2xl animate-float-in">
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif-display text-2xl">Luxe<span className="text-gold italic"> Jewelry</span></span>
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function IconBtn({ children, label, badge }: { children: React.ReactNode; label: string; badge?: string }) {
  return (
    <button
      aria-label={label}
      className="relative grid h-9 w-9 place-items-center rounded-full text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
      {badge && (
        <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ink">
          {badge}
        </span>
      )}
    </button>
  );
}
