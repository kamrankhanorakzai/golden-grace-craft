import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  message: z.string().min(1).max(4000),
  sessionId: z.string().max(200),
  history: z
    .array(z.object({ role: z.enum(["user", "bot"]), text: z.string().max(8000) }))
    .max(50)
    .default([]),
});

export const sendChatMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { callChatAgent } = await import("./chat.server");
    try {
      const reply = await callChatAgent(data);
      return { reply };
    } catch {
      return { reply: "" };
    }
  });
