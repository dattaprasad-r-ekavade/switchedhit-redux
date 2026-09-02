import type { ReactNode } from "react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(246,231,178,0.08)] bg-[#06140c]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="display text-lg tracking-tight">
          SwitchedHit
          <span className="ml-2 text-xs font-sans uppercase tracking-[0.18em] text-[var(--gold)]">
            Replay
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <Link href="/library" className="hover:text-[var(--cream)]">
            Library
          </Link>
          <Link href="/settings" className="hover:text-[var(--cream)]">
            Settings
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.switchedhit.replay"
            className="btn primary !py-1.5 !text-xs"
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[rgba(246,231,178,0.08)] px-5 py-8 text-sm text-[var(--muted)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:justify-between">
        <p className="disclaimer-strip">
          Unofficial 3D replay. Not a live broadcast. Not affiliated with BCCI
          or ICC.
        </p>
        <p>
          Ball-by-ball data:{" "}
          <a className="underline decoration-[var(--gold)]" href="https://cricsheet.org">
            Cricsheet.org
          </a>
          <span className="mx-2">·</span>
          <Link href="/sim-retired">Old sim retired</Link>
        </p>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
