import { site } from '../config/site';

/**
 * Build a wa.me link with a pre-filled message.
 * @param message Plain text; will be URL-encoded.
 */
export function waLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Per-product enquiry link with the product name pre-filled. */
export function productEnquiry(productName: string, extra?: string): string {
  const msg =
    `Hi Diamond Jewellers, I'm interested in this design: ${productName}.` +
    (extra ? ` ${extra}` : '') +
    ' Could you share details and availability?';
  return waLink(msg);
}

/** Generic enquiry link used by floating button / CTAs. */
export function generalEnquiry(): string {
  return waLink('Hi Diamond Jewellers, I have a question about your jewellery.');
}
