import { useState } from 'react';
import { sendChat, chatEnabled, type ChatMessage } from '../../lib/chatClient';
import { generalEnquiry } from '../../lib/waLink';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hi! Ask me about our collections, bridal sets, or custom designs.' },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    const next = [...messages, { role: 'user' as const, content: text }];
    setMessages(next);
    setInput('');
    setBusy(true);
    try {
      const reply = await sendChat(next);
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((m) => [...m, { role: 'assistant', content: 'Something went wrong. Please try WhatsApp for now.' }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Launcher — left side, same height as WhatsApp button on the right */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat assistant"
        className="fixed left-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-[var(--color-gold)] text-white shadow-lg"
        style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 80px)' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-6A8.4 8.4 0 1 1 21 11.5z" />
        </svg>
      </button>

      {open && (
        <div className="fixed left-2 right-2 z-50 flex max-h-[70vh] flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-2xl md:left-auto md:right-6 md:w-96" style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 164px)' }}>
          <div className="flex items-center justify-between bg-[var(--color-gold)] px-4 py-3 text-white">
            <span className="font-semibold">Diamond Jewellers Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-xl leading-none">×</button>
          </div>

          {!chatEnabled && (
            <p className="bg-[var(--color-sand)] px-4 py-2 text-center text-xs text-[var(--color-muted)]">
              Preview mode — AI answers coming soon.
            </p>
          )}

          <div className="flex-1 space-y-2 overflow-y-auto p-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <span
                  className={
                    'inline-block max-w-[85%] rounded-2xl px-3 py-2 text-sm ' +
                    (m.role === 'user' ? 'bg-[var(--color-gold)] text-white' : 'bg-[var(--color-sand)] text-[var(--color-ink)]')
                  }
                >
                  {m.content}
                </span>
              </div>
            ))}
            {busy && <p className="text-left text-xs text-[var(--color-muted)]">…</p>}
          </div>

          <form onSubmit={submit} className="flex gap-2 border-t border-[var(--color-line)] p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm outline-none focus:border-[var(--color-gold)]"
            />
            <button type="submit" disabled={busy} className="btn btn-primary px-4 py-2 text-sm">Send</button>
          </form>
          <a href={generalEnquiry()} target="_blank" rel="noopener" className="border-t border-[var(--color-line)] py-2 text-center text-xs text-[var(--color-whatsapp)]">
            Or chat on WhatsApp →
          </a>
        </div>
      )}
    </>
  );
}
