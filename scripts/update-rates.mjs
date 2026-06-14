// Updates public/rates.json. Designed to run in CI (daily) or locally.
//
// To go live: set a GOLD_API_URL secret returning JSON, and map its fields in
// `fromApi()` below. Without it, the script just refreshes the `updated` date
// so the pipeline never fails and the widget keeps showing indicative rates.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.resolve(__dirname, '..', 'public', 'rates.json');

function fromApi(json) {
  // TODO(owner): map your provider's response to per-10g INR values.
  // Example shape — adjust keys to match your API:
  // return { gold_24k: json.gold24, gold_22k: json.gold22, silver: json.silver };
  return null;
}

const current = JSON.parse(await readFile(FILE, 'utf8'));
const today = new Date().toISOString().slice(0, 10);

let rates = current.rates;
const url = process.env.GOLD_API_URL;
if (url) {
  try {
    const res = await fetch(url, {
      headers: process.env.GOLD_API_KEY ? { Authorization: `Bearer ${process.env.GOLD_API_KEY}` } : {},
    });
    const json = await res.json();
    const mapped = fromApi(json);
    if (mapped) rates = mapped;
    else console.warn('fromApi() returned null — keeping existing rates. Map your API fields.');
  } catch (e) {
    console.warn('Rate fetch failed, keeping existing rates:', e.message);
  }
}

const next = { ...current, updated: today, rates };
await writeFile(FILE, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(`rates.json updated (${today}).`);
