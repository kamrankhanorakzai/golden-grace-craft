import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Package, CheckCircle2, Truck, MapPin, Home } from "lucide-react";

export const Route = createFileRoute("/track-order")({
  head: () => ({ meta: [{ title: "Track Order — Luxe Jewelry" }, { name: "description", content: "Track your Luxe Jewelry order in real time." }] }),
  component: Track,
});

function Track() {
  const [shown, setShown] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">Order Tracking</div>
        <h1 className="mt-2 font-serif-display text-5xl">Where's My Order?</h1>
        <p className="mt-3 text-muted-foreground">Enter your order details below to see the latest status.</p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setShown(true); }} className="mt-10 rounded-3xl border bg-cream p-6 sm:p-8 space-y-4">
        <div>
          <label className="text-sm font-medium">Order Number</label>
          <input required placeholder="LX-12345" className="mt-1.5 w-full rounded-full border bg-background px-5 py-3 text-sm outline-none focus:border-gold" />
        </div>
        <div>
          <label className="text-sm font-medium">Email Address</label>
          <input required type="email" placeholder="your@email.com" className="mt-1.5 w-full rounded-full border bg-background px-5 py-3 text-sm outline-none focus:border-gold" />
        </div>
        <button type="submit" className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-ink/90">Track Order</button>
      </form>

      {shown && (
        <div className="mt-10 rounded-3xl border p-6 sm:p-8 animate-float-in">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Order #LX-12345</div>
              <div className="font-serif-display text-2xl">Out for Delivery</div>
            </div>
            <span className="rounded-full bg-gold/15 text-gold-dark px-3 py-1 text-xs font-medium">Arriving tomorrow</span>
          </div>
          <ol className="mt-8 relative border-l-2 border-dashed border-gold/40 ml-3 space-y-6">
            {[
              { icon: CheckCircle2, label: "Order Placed", date: "Nov 10, 10:12 AM", done: true },
              { icon: Package, label: "Packaged with Love", date: "Nov 11, 09:30 AM", done: true },
              { icon: Truck, label: "Shipped", date: "Nov 12, 07:45 AM", done: true },
              { icon: MapPin, label: "Out for Delivery", date: "Today, 08:15 AM", done: true, active: true },
              { icon: Home, label: "Delivered", date: "Estimated tomorrow", done: false },
            ].map((step, i) => (
              <li key={i} className="pl-6">
                <span className={`absolute -left-3.5 grid h-7 w-7 place-items-center rounded-full ${step.done ? "gradient-gold text-ink" : "bg-muted text-muted-foreground border"}`}>
                  <step.icon className="h-3.5 w-3.5" />
                </span>
                <div className={`font-medium ${step.active ? "text-gold-dark" : ""}`}>{step.label}</div>
                <div className="text-xs text-muted-foreground">{step.date}</div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
