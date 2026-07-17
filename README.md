<div align="center">

# 💎 Luxe Jewelry — AI-Powered Luxury Concierge

**A premium e-commerce frontend for a luxury jewelry & fashion accessories brand, powered by a smart AI agent that chats, guides, and personalizes every visitor experience.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TanStack Start](https://img.shields.io/badge/TanStack%20Start-1.x-FF4154?logo=react&logoColor=white)](https://tanstack.com/start)
[![n8n](https://img.shields.io/badge/n8n-AI%20Agent-FF6D5A?logo=n8n&logoColor=white)](https://n8n.io)

</div>

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [AI Concierge Experience](#ai-concierge-experience)
3. [Agent Architecture](#agent-architecture)
4. [How the Agent Works](#how-the-agent-works)
   - [1. Collect Customer Information](#1-collect-customer-information)
   - [2. LLM Brain — Reasoning](#2-llm-brain--reasoning)
   - [3. Tools & Confirmation Actions](#3-tools--confirmation-actions)
   - [4. Memory & Personalization](#4-memory--personalization)
   - [5. Personalized Documents](#5-personalized-documents)
   - [6. Logging & Audit Trail](#6-logging--audit-trail)
   - [7. Security Layer](#7-security-layer)
5. [Project Structure](#project-structure)
6. [Configuration](#configuration)
7. [Security & Privacy](#security--privacy)
8. [Deployment](#deployment)
9. [Roadmap](#roadmap)

---

## 🌟 Overview

**Luxe Jewelry** is a modern, responsive luxury storefront featuring:

- **Elegant, brand-forward design** — clean white canvas, gold accents (`#D4AF37`), refined typography, and smooth animations inspired by premium jewelry brands.
- **Full shopping experience** — Home, Shop, Product Detail, Collections, New Arrivals, Best Sellers, About, Reviews, Blog, Track Order, and Contact pages.
- **Floating AI Concierge** — a gold, ChatGPT-style chatbot that guides visitors, answers questions, recommends products, and collects leads.

The AI agent is **LLM-native**. It uses a large language model as its reasoning brain and connects to real-world tools (email, staff alerts, order lookups, personalized documents) to deliver actionable, trustworthy support.

---

## 🤖 AI Concierge Experience

When a visitor opens the chat, the Luxe Concierge does more than reply with text. It runs a complete agent loop:

| Capability | What it does |
| --- | --- |
| **Guided Shopping** | Asks about occasion, budget, style, and recipient to recommend the perfect piece. |
| **Product Q&A** | Answers questions about materials, sizing, waterproofing, care, and availability using the brand knowledge base. |
| **Order Tracking** | Collects order details and returns tracking or status updates. |
| **Lead Capture** | Politely collects name, email, phone, and preferences for follow-up. |
| **Confirmation Emails** | Sends a personalized email to the customer and notifies staff via email/Slack. |
| **Memory** | Remembers the visitor’s preferences across the conversation for a coherent, warm experience. |
| **Personalized Documents** | Generates a tailored recommendation summary or style guide (e.g., PDF, email body, or markdown). |
| **Logging & Audit** | Records every interaction for quality assurance, safety review, and analytics. |
| **Security Layer** | Validates input, masks PII, enforces rate limits, and signs webhook requests. |

---

## 🏗️ Agent Architecture

```mermaid
flowchart TD
    A[Website Visitor] -->|Opens chat / sends message| B(Luxe Jewelry Frontend)
    B -->|POST {message, sessionId, history}| C[n8n AI Agent Webhook]
    C --> D[LLM Brain]
    D --> E[Reasoning & Tool Selection]
    E -->|Needs data| F[Memory Store]
    E -->|Needs product info| G[RAG Knowledge Base]
    E -->|Action required| H[Tool Executor]
    H --> I[Email Customer]
    H --> J[Email / Notify Staff]
    H --> K[Order Tracking]
    H --> L[Generate Personalized Document]
    H --> M[Logging & Analytics]
    D --> N[Natural Language Reply]
    N --> C
    C -->|Markdown / structured response| B
    B -->|Typewriter reveal| A
    O[Security Layer] -->|Validate, sanitize, rate-limit| C
```

### Frontend Component

The floating chat widget is implemented in:

```text
src/components/site/Chatbot.tsx
```

It sends every message to a configurable webhook URL:

```ts
const CHATBOT_WEBHOOK_URL = "";
```

The payload includes:

```json
{
  "message": "User's latest message",
  "sessionId": "uuid-for-this-browser-session",
  "history": [
    { "role": "bot", "text": "..." },
    { "role": "user", "text": "..." }
  ]
}
```

A fresh `sessionId` is created on every page refresh so each visit starts clean, unless you choose to persist identity across sessions.

---

## 🔁 How the Agent Works

### 1. Collect Customer Information

The agent is designed to **progressively profile** the visitor. It collects only what is needed, when it is needed:

- **Intent**: "Are you shopping for yourself, a gift, or an event?"
- **Occasion**: Anniversary, birthday, wedding, everyday wear, etc.
- **Style Preferences**: Minimalist, vintage, bold, classic, etc.
- **Budget**: Price range to filter recommendations.
- **Product Signals**: Jewelry type, metal, gemstone, size.
- **Contact Details**: Name, email, phone for follow-up or order tracking.
- **Order ID**: For tracking or returns.

All collected data is passed through the security layer and only stored in memory with explicit consent.

### 2. LLM Brain — Reasoning

The LLM acts as the **central brain**. It receives:

- The full conversation history.
- The current customer message.
- Memory (preferences, facts learned earlier).
- Relevant product knowledge from the RAG knowledge base.

It then decides:

- What to say next.
- Which tool to call (if any).
- Whether enough information has been gathered to make a recommendation.
- Whether to escalate to a human specialist.

### 3. Tools & Confirmation Actions

The agent can invoke **tools** to perform real actions. Example tools:

| Tool | Purpose |
| --- | --- |
| `sendCustomerEmail` | Sends a confirmation, summary, or follow-up email to the visitor. |
| `notifyStaff` | Alerts the sales/support team with lead details and conversation summary. |
| `trackOrder` | Looks up order status and returns tracking information. |
| `findProducts` | Queries the product catalog for matching recommendations. |
| `generatePersonalizedDocument` | Builds a personalized recommendation PDF or style guide. |
| `scheduleCallback` | Books a callback or consultation request. |

Each tool returns structured data back to the LLM, which then explains the result to the customer in natural language.

### 4. Memory & Personalization

The agent maintains memory at two levels:

- **Session Memory**: Keeps the conversation coherent within a single browser session.
- **Long-term Memory** *(optional)*: Stores customer preferences across sessions (e.g., favorite metal, ring size, past purchases) when the user opts in.

This enables personalized answers like:

> “Since you loved gold necklaces last time, here are three new arrivals that match your style.”

### 5. Personalized Documents

The agent can generate a **personalized document** for the customer:

- Curated product shortlist with reasons.
- Style guide for the occasion.
- Care instructions for the chosen piece.
- Price summary and discount eligibility.

The document can be returned as markdown in the chat, sent via email, or rendered as a downloadable PDF.

### 6. Logging & Audit Trail

Every interaction is logged for:

- **Customer support review** — see exactly what the agent said.
- **Quality improvement** — identify where the agent gets confused.
- **Compliance** — maintain records of consent and data use.
- **Safety** — detect harmful or off-brand responses.

Logged fields include timestamp, session ID, anonymized user ID, message, tool calls, tool results, latency, and any errors.

### 7. Security Layer

Security is built into the agent pipeline, not bolted on. Key controls:

| Layer | Control |
| --- | --- |
| **Webhook Validation** | Verify the request origin and signature before processing. |
| **Input Sanitization** | Strip HTML, limit message length, and block malicious payloads. |
| **Rate Limiting** | Cap messages per session and IP to prevent abuse. |
| **PII Masking** | Detect and mask sensitive data in logs (email, phone, address). |
| **Consent Check** | Confirm consent before storing contact details or sending emails. |
| **Data Minimization** | Keep only what is necessary and auto-delete old session data. |
| **Staff Escalation** | Route sensitive or high-value requests to a human agent. |
| **Secure Transport** | Enforce HTTPS/TLS for all frontend ↔ backend communication. |

---

## 📁 Project Structure

```text
luxe-jewelry/
├── public/                  # Static assets, favicon, hero images
├── src/
│   ├── components/site/     # Layout, header, footer, chatbot, product cards
│   ├── hooks/               # Mobile detection and other shared hooks
│   ├── lib/                 # Utilities, product data, error reporting
│   ├── routes/              # TanStack Start file-based routes
│   ├── router.tsx           # Router configuration
│   ├── server.ts            # Server entry
│   ├── start.ts             # Client entry + middleware
│   └── styles.css           # Tailwind CSS theme & brand tokens
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## ⚙️ Configuration

### Chatbot Webhook

Update the webhook URL in `src/components/site/Chatbot.tsx` to point to your n8n AI Agent:

```ts
const CHATBOT_WEBHOOK_URL = "https://your-n8n-instance/webhook/your-agent-path";
```

### Environment Variables

Create a `.env` file for local development if needed:

```env
# Optional: override the public webhook endpoint
VITE_CHATBOT_WEBHOOK_URL=https://n8n-postgres.aiconsultix.com/webhook/Fahion-Chat-bot
```

Server-side environment variables (used by n8n / backend):

```env
# Email service credentials for customer/staff notifications
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Staff notification email
STAFF_ALERT_EMAIL=support@luxejewelry.com

# Optional: vector database / memory store
MEMORY_API_URL=
MEMORY_API_KEY=

# Optional: knowledge base / RAG
RAG_API_URL=
RAG_API_KEY=
```

---

## 🔒 Security & Privacy

1. **Never hardcode secrets** in the frontend. Use environment variables and server-side tools only.
2. **Validate and sanitize** all chat input before it reaches the LLM or memory.
3. **Sign webhooks** between the frontend and n8n to prevent spoofing.
4. **Mask PII** in logs and analytics.
5. **Ask for consent** before storing contact details or sending emails.
6. **Rate-limit** the chat endpoint to prevent spam and cost abuse.
7. **Review logs** regularly for model drift, abuse, or sensitive data leakage.
8. **Escalate to humans** for high-value transactions, complaints, or sensitive requests.

---

## 🚀 Deployment

The project is built with **TanStack Start** and can be deployed to any platform that supports Vite + Node.js/Worker runtimes:

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build
```

For the full AI agent experience, deploy the companion n8n workflow with:

- LLM node (OpenAI, Anthropic, or local model via AI gateway)
- Memory nodes (e.g., Redis, Postgres, or vector store)
- Email nodes (SMTP, SendGrid, Mailgun)
- Webhook trigger matching the `CHATBOT_WEBHOOK_URL`

---

## 🗺️ Roadmap

- [ ] Multilingual concierge support
- [ ] Voice-to-text chat input
- [ ] Persistent customer accounts and cross-session memory
- [ ] Direct add-to-cart and checkout guidance from chat
- [ ] Advanced analytics dashboard for conversation insights
- [ ] Fine-tuned brand voice model for ultra-premium tone

---

<div align="center">

**Built with care, gold, and a little AI magic.** ✨

</div>
