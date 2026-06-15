import { useEffect, useState } from 'react';

interface ApiRates {
  gold24k: number;
  gold22k: number;
  silver: number;
  unit: string;
  city?: string;
  updatedAt: string;
}

const API_URL = import.meta.env.PUBLIC_RATES_API_URL as string | undefined;

function fmt(n: number) {
  return '₹' + n.toLocaleString('en-IN');
}

function fmtTime(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  } catch {
    return iso;
  }
}

export default function RateWidget() {
  const [data, setData] = useState<ApiRates | null>(null);

  useEffect(() => {
    if (!API_URL) return;
    fetch(`${API_URL}/rates`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json: ApiRates) => setData(json))
      .catch(() => setData(null));
  }, []);

  if (!data) return null;

  return (
    <div
      style={{
        borderBottom: '1px solid var(--color-line)',
        backgroundColor: 'var(--color-sand)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          marginInline: 'auto',
          paddingInline: '1rem',
          paddingBlock: '0.4rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0 1.25rem',
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-gold)', whiteSpace: 'nowrap' }}>
          Live Rates&nbsp;<span style={{ fontWeight: 400, color: 'var(--color-muted)' }}>({data.unit})</span>
        </span>
        <span style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
          Gold 24K&nbsp;<strong>{fmt(data.gold24k)}</strong>
        </span>
        <span style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
          Gold 22K&nbsp;<strong>{fmt(data.gold22k)}</strong>
        </span>
        <span style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
          Silver&nbsp;<strong>{fmt(data.silver)}</strong>
        </span>
        <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', whiteSpace: 'nowrap' }}>
          Updated {fmtTime(data.updatedAt)}
        </span>
      </div>
    </div>
  );
}
