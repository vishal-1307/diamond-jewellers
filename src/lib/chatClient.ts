// API layer for the RAG chatbot. Points at a configurable FastAPI backend
// (PUBLIC_CHAT_API_URL). Until that is set, runs in mock mode so the widget
// renders and is demoable without a backend.

const ENDPOINT = import.meta.env.PUBLIC_CHAT_API_URL as string | undefined;

export const chatEnabled = Boolean(ENDPOINT);

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function sendChat(messages: ChatMessage[]): Promise<string> {
  if (!ENDPOINT) {
    // Mock response until the FastAPI /chat endpoint is wired.
    await new Promise((r) => setTimeout(r, 500));
    return "Our AI assistant is coming soon! Meanwhile, please enquire on WhatsApp and our team will help you right away.";
  }
  const res = await fetch(`${ENDPOINT.replace(/\/$/, '')}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) throw new Error(`Chat API error ${res.status}`);
  const data = await res.json();
  return data.reply ?? data.message ?? '';
}
