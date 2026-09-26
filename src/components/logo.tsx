import { cn } from "@/lib/utils";

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <span className={cn("brand-lockup", light && "brand-light", compact && "brand-compact")}>
      <span className="brand-symbol" aria-hidden="true"><i/><i/></span>
      {!compact && <span className="brand-wordmark"><strong>ZERO</strong><strong>ONE</strong></span>}
    </span>
  );
}
