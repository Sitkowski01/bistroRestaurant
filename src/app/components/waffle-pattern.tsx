export function WafflePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[0, 28, 56, 84].map((x) => (
        <g key={x}>
          <rect x={x} y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
          <line x1={x + 5} y1="2" x2={x + 5} y2="22" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
          <line x1={x + 10} y1="2" x2={x + 10} y2="22" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
          <line x1={x + 15} y1="2" x2={x + 15} y2="22" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
          <line x1={x} y1="7" x2={x + 20} y2="7" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
          <line x1={x} y1="12" x2={x + 20} y2="12" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
          <line x1={x} y1="17" x2={x + 20} y2="17" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
        </g>
      ))}
    </svg>
  );
}

export function JarStamp({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" opacity="0.4" />
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <text x="24" y="20" textAnchor="middle" fill="currentColor" fontSize="6" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" opacity="0.5">HULTAJ</text>
      <text x="24" y="30" textAnchor="middle" fill="currentColor" fontSize="4.5" fontFamily="'Space Grotesk', sans-serif" opacity="0.35">KISZONE</text>
    </svg>
  );
}
