import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

// Paste your n8n AI Agent webhook URL here to connect the chatbot.
const CHATBOT_WEBHOOK_URL = "";

type Msg = { id: string; role: "user" | "bot"; text: string; time: string };

const suggested = [
  "Show Best Sellers",
  "Shipping Information",
  "Return Policy",
  "Track My Order",
  "Gift Recommendations",
  "Product Care",
];

const mockResponses: Record<string, string> = {
  "Show Best Sellers":
    "Our current best sellers are the Eternal Gold Chain, Pearl Drop Earrings, and the Royal Gift Set. Would you like a direct link?",
  "Shipping Information":
    "We offer free shipping on orders above Rs. 5000. Standard delivery takes 2–4 business days across Pakistan.",
  "Return Policy":
    "You can exchange or return unworn items within 7 days of delivery. Original packaging is required.",
  "Track My Order":
    "You can track your order any time on our Track Order page — you'll just need your order number and email.",
  "Gift Recommendations":
    "For gifting we recommend the Royal Gift Set or the Duo Heart Pendant — both come with our signature luxury packaging. ✨",
  "Product Care":
    "All our pieces are waterproof, anti-tarnish and hypoallergenic. To keep them shining, gently wipe with a soft cloth after use.",
};

const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hello ✨ I'm your Luxe Jewelry assistant. How can I help you today?",
      time: now(),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  async function send(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setInput("");
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text: clean, time: now() };
    setMessages((m) => [...m, userMsg]);
    setTyping(true);

    try {
      let reply = mockResponses[clean];
      if (CHATBOT_WEBHOOK_URL) {
        const res = await fetch(CHATBOT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: clean, history: messages }),
        });
        const data = await res.json().catch(() => ({}));
        reply = (data.reply || data.output || data.message) as string;
      }
      await new Promise((r) => setTimeout(r, 700));
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "bot",
          text: reply ??
            "Thanks for your message! One of our specialists will be in touch shortly. In the meantime, feel free to browse our collections.",
          time: now(),
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[70] grid h-14 w-14 place-items-center rounded-full gradient-gold text-ink shadow-luxe transition-transform hover:scale-105"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-30" />
        {open ? <X className="h-6 w-6 relative" /> : <MessageCircle className="h-6 w-6 relative" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[70] w-[min(92vw,380px)] overflow-hidden rounded-3xl border bg-background shadow-luxe animate-float-in">
          {/* Header */}
          <div className="relative bg-ink text-primary-foreground p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-ink">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-serif-display text-lg leading-tight">Luxe Concierge</div>
                <div className="flex items-center gap-1.5 text-[11px] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online — replies in seconds
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="max-h-[380px] overflow-y-auto bg-cream px-4 py-4 space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[80%]">
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-ink text-primary-foreground rounded-br-sm"
                        : "bg-white text-foreground border rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                  <div className={`mt-1 text-[10px] text-muted-foreground ${m.role === "user" ? "text-right" : ""}`}>{m.time}</div>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border bg-white px-3.5 py-3 flex gap-1">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Suggested */}
          {messages.length < 3 && (
            <div className="border-t bg-background px-4 py-3 flex flex-wrap gap-1.5">
              {suggested.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-medium text-gold-dark hover:bg-gold hover:text-ink transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t bg-background p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about our jewelry..."
              className="flex-1 rounded-full border bg-muted/40 px-4 py-2.5 text-sm outline-none focus:border-gold focus:bg-background"
            />
            <button
              type="submit"
              aria-label="Send"
              className="grid h-10 w-10 place-items-center rounded-full gradient-gold text-ink transition-transform hover:scale-105 disabled:opacity-50"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
