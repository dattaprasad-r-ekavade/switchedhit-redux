import { CLIP_IDS } from "@/lib/replay/types";
import { CLIP_LENGTH_MS, clipLabel } from "@/lib/replay/clips";
import { SiteChrome } from "@/components/site/SiteChrome";

export const metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return (
    <SiteChrome>
      <main className="mx-auto w-full max-w-3xl px-5 py-12">
        <h1 className="display text-4xl">Settings</h1>
        <section className="card mt-8">
          <h2 className="display text-2xl">Credits</h2>
          <p className="mt-3 text-[var(--muted)]">
            Ball-by-ball data:{" "}
            <a className="underline decoration-[var(--gold)]" href="https://cricsheet.org">
              Cricsheet.org
            </a>{" "}
            (ODC-BY — attribute). Keep zip licence notices intact on ingest.
          </p>
        </section>
        <section className="card mt-4">
          <h2 className="display text-2xl">Legal posture</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--muted)]">
            <li>Unofficial 3D replay. Not a live broadcast. Not affiliated with BCCI or ICC.</li>
            <li>No crests, kits, or player faces. Initials and generic jersey colours only.</li>
            <li>Mute is on by default. No fake “live now” badges on finished games.</li>
            <li>First innings free, always. No accounts in this spike.</li>
          </ul>
        </section>
        <section className="card mt-4">
          <h2 className="display text-2xl">Event → clip map</h2>
          <table className="mt-4 w-full text-sm">
            <thead>
              <tr className="text-left text-[var(--muted)]">
                <th className="pb-2 font-normal">Clip</th>
                <th className="pb-2 font-normal">Default length</th>
              </tr>
            </thead>
            <tbody>
              {CLIP_IDS.map((id) => (
                <tr key={id} className="border-t border-white/5">
                  <td className="py-2">
                    {clipLabel(id)} <span className="text-[var(--muted)]">({id})</span>
                  </td>
                  <td>{(CLIP_LENGTH_MS[id] / 1000).toFixed(1)}s</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </SiteChrome>
  );
}
