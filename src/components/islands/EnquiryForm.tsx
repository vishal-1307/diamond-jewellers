import { useState } from 'react';
import { waLink } from '../../lib/waLink';

type Variant = 'contact' | 'custom';
interface Errors { name?: string; phone?: string; message?: string }

const isPhone = (v: string) => {
  const d = v.replace(/\D/g, '');
  return d.length >= 10 && d.length <= 15;
};

export default function EnquiryForm({ variant = 'contact' }: { variant?: Variant }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (!isPhone(phone)) e.phone = 'Enter a valid phone / WhatsApp number.';
    if (!message.trim()) e.message = 'Please enter a short message.';
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    setTouched(true);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const title = variant === 'custom' ? 'Custom Design Request' : 'General Enquiry';
    const msg = [
      `Hi Diamond Jewellers,`,
      ``,
      `*${title}*`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      ``,
      `Message: ${message}`,
    ].join('\n');
    window.open(waLink(msg), '_blank', 'noopener');
  }

  const liveErr = touched ? validate() : {};
  const field = 'w-full rounded-lg border px-4 py-3 text-base outline-none focus:border-[var(--color-gold)]';
  const errCls = (k: keyof Errors) => (liveErr[k] ? 'border-red-400' : 'border-[var(--color-line)]');

  return (
    <form onSubmit={onSubmit} noValidate class="space-y-4">
      <div>
        <label for="ef-name" class="mb-1 block text-sm font-medium">Your Name</label>
        <input id="ef-name" name="name" type="text" autocomplete="name" value={name}
          onChange={(e) => setName(e.target.value)} class={`${field} ${errCls('name')}`} placeholder="Your name" />
        {liveErr.name && <p class="mt-1 text-sm text-red-500">{liveErr.name}</p>}
      </div>
      <div>
        <label for="ef-phone" class="mb-1 block text-sm font-medium">Phone / WhatsApp</label>
        <input id="ef-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" value={phone}
          onChange={(e) => setPhone(e.target.value)} class={`${field} ${errCls('phone')}`} placeholder="+91 …" />
        {liveErr.phone && <p class="mt-1 text-sm text-red-500">{liveErr.phone}</p>}
      </div>
      <div>
        <label for="ef-msg" class="mb-1 block text-sm font-medium">{variant === 'custom' ? 'Your Idea' : 'Message'}</label>
        <textarea id="ef-msg" name="message" rows={variant === 'custom' ? 4 : 5} value={message}
          onChange={(e) => setMessage(e.target.value)} class={`${field} ${errCls('message')}`}
          placeholder={variant === 'custom' ? 'Describe your idea…' : 'Write your message…'} />
        {liveErr.message && <p class="mt-1 text-sm text-red-500">{liveErr.message}</p>}
      </div>
      <button type="submit" class="btn btn-primary w-full">
        {variant === 'custom' ? 'Send Request via WhatsApp' : 'Send via WhatsApp'}
      </button>
    </form>
  );
}
