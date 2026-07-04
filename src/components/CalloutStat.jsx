'use client';

export default function CalloutStat({ number, label }) {
  return (
    <div className="my-8">
      <span
        className="font-ui block mt-1"
        style={{
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: 'var(--charcoal)',
        }}
      >
        <span style={{ color: 'var(--brand-rose)', fontWeight: 'bold', fontSize: '16px' }}>
          {number}
        </span>
        {' '}
        {label}
      </span>
    </div>
  );
}
