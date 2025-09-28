export function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" className="fill-current" />
      <path d="M6.8 9.4c3-.8 6.5-.5 9.5.9" className="stroke-neutral-950"
            strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M7.3 12.1c2.5-.6 5.2-.4 7.6.7" className="stroke-neutral-950"
            strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M7.9 14.7c2-.5 4-.3 5.8.5" className="stroke-neutral-950"
            strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="2" y="6" width="20" height="12" rx="3" className="fill-current" />
      <polygon points="10,9 16,12 10,15" className="fill-neutral-950" />
    </svg>
  );
}
