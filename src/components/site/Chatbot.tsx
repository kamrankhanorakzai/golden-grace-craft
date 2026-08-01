import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { playReceiveSound, playSendSound } from "@/lib/chat-sounds";

// n8n AI Agent webhook
const CHATBOT_WEBHOOK_URL = "https://n8n-postgres.aiconsultix.com/webhook/Fahion-Chat-bot";

type Msg = { id: string; role: "user" | "bot"; text: string; time: string };

const suggested = [
  "Show Best Sellers",
  "Shipping Information",
  "Return Policy",
  "Track My Order",
  "Gift Recommendations",
  "Product Care",
];

const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// Clean and normalize raw agent output into readable markdown
function cleanReply(raw: unknown): string {
  let s = typeof raw === "string" ? raw : JSON.stringify(raw ?? "", null, 2);
  s = s.trim();
  // Strip wrapping quotes
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1);
  }
  // Unescape common sequences
  s = s
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "  ")
    .replace(/\\r/g, "")
    .replace(/\\"/g, '"')
    .replace(/\\'/g, "'");
  // Collapse 3+ newlines
  s = s.replace(/\n{3,}/g, "\n\n");
  return s.trim();
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hello ✨ I'm your **Luxe Jewelry** assistant. How can I help you today?",
      time: now(),
    },
  ]);
  // Fresh session id per browser load — refreshing the page starts a new chat session.
  const sessionIdRef = useRef<string>(
    typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `luxe-${Date.now()}`,
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  // Typewriter effect — reveal text like ChatGPT
  function streamBotMessage(fullText: string) {
    const id = crypto.randomUUID();
    const time = now();
    setMessages((m) => [...m, { id, role: "bot", text: "", time }]);
    let i = 0;
    const step = Math.max(1, Math.ceil(fullText.length / 240)); // ~240 ticks max
    const interval = window.setInterval(() => {
      i = Math.min(fullText.length, i + step);
      setMessages((m) => m.map((msg) => (msg.id === id ? { ...msg, text: fullText.slice(0, i) } : msg)));
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
      if (i >= fullText.length) window.clearInterval(interval);
    }, 18);
  }

  async function send(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setInput("");
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text: clean, time: now() };
    setMessages((m) => [...m, userMsg]);
    setTyping(true);

    let reply = "";
    try {
      const res = await fetch(CHATBOT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: clean,
          sessionId: sessionIdRef.current,
          history: messages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });
      const contentType = res.headers.get("content-type") || "";
      let data: unknown;
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = await res.text();
      }
      // Try common shapes
      const anyData = data as Record<string, unknown> | string;
      if (typeof anyData === "string") {
        reply = cleanReply(anyData);
      } else {
        const candidate =
          (anyData.reply as string) ??
          (anyData.output as string) ??
          (anyData.message as string) ??
          (anyData.text as string) ??
          (anyData.response as string) ??
          ((anyData.data as Record<string, unknown> | undefined)?.output as string) ??
          "";
        reply = cleanReply(candidate || JSON.stringify(anyData));
      }
    } catch {
      reply = "Sorry, I couldn't reach the assistant right now. Please try again in a moment.";
    } finally {
      setTyping(false);
    }

    if (!reply) {
      reply = "Thanks for your message! One of our specialists will be in touch shortly.";
    }
    streamBotMessage(reply);
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
                <div className="max-w-[85%]">
                  <div
                    className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-ink text-primary-foreground rounded-br-sm"
                        : "bg-white text-foreground border rounded-bl-sm"
                    }`}
                  >
                    {m.role === "bot" ? (
                      <div className="chat-md">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.text || "\u200B"}</ReactMarkdown>
                      </div>
                    ) : (
                      m.text
                    )}
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
