import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Luxe Jewelry" }, { name: "description", content: "Get in touch with our concierge team." }] }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="text-xs tracking-[0.25em] uppercase text-gold-dark">We'd Love to Hear from You</div>
        <h1 className="mt-2 font-serif-display text-5xl sm:text-6xl">Get in Touch</h1>
      </div>

      <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="rounded-3xl bg-cream p-8 space-y-6">
          {[
            { icon: Mail, label: "Email", value: "hello@luxejewelry.com" },
            { icon: Phone, label: "Phone", value: "+92 300 1234567" },
            { icon: MapPin, label: "Studio", value: "12 Diamond Lane, DHA Phase 5, Karachi" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-full gradient-gold text-ink shrink-0"><Icon className="h-4.5 w-4.5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            </div>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="#" className="grid h-10 w-10 place-items-center rounded-full border hover:border-gold hover:text-gold-dark"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="grid h-10 w-10 place-items-center rounded-full border hover:border-gold hover:text-gold-dark"><Facebook className="h-4 w-4" /></a>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden border">
            <iframe
              title="Map"
              className="w-full h-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=67.05%2C24.80%2C67.10%2C24.85&layer=mapnik"
            />
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="First Name"><input className="w-full rounded-full border bg-background px-5 py-3 text-sm outline-none focus:border-gold" /></Field>
            <Field label="Last Name"><input className="w-full rounded-full border bg-background px-5 py-3 text-sm outline-none focus:border-gold" /></Field>
          </div>
          <Field label="Email"><input type="email" className="w-full rounded-full border bg-background px-5 py-3 text-sm outline-none focus:border-gold" /></Field>
          <Field label="Subject"><input className="w-full rounded-full border bg-background px-5 py-3 text-sm outline-none focus:border-gold" /></Field>
          <Field label="Message"><textarea rows={5} className="w-full rounded-2xl border bg-background px-5 py-3 text-sm outline-none focus:border-gold resize-none" /></Field>
          <button className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-ink/90">Send Message</button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
