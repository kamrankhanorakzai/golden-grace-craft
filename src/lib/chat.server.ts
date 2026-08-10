const WEBHOOK_URL = "https://n8n-postgres.aiconsultix.com/webhook/Fahion-Chat-bot";

export async function callChatAgent(payload: unknown): Promise<string> {
  const res = await fetch(process.env["CHAT_WEBHOOK_URL"] || WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const data = (await res.json()) as Record<string, unknown> | string;
    if (typeof data === "string") return data;
    const candidate =
      (data.reply as string) ??
      (data.output as string) ??
      (data.message as string) ??
      (data.text as string) ??
      (data.response as string) ??
      ((data.data as Record<string, unknown> | undefined)?.output as string) ??
      "";
    return candidate || JSON.stringify(data);
  }
  return await res.text();
}
