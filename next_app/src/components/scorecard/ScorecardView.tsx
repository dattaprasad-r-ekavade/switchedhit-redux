import type { InningsCard } from "@/lib/replay/types";

function overs(balls: number) {
  return `${Math.floor(balls / 6)}.${balls % 6}`;
}

export function ScorecardView({ innings }: { innings: InningsCard[] }) {
  return (
    <div className="grid gap-6">
      {innings.map((card) => (
        <section key={card.team} className="card overflow-x-auto">
          <header className="mb-4 flex items-end justify-between gap-4">
            <h2 className="display text-2xl">{card.team}</h2>
            <p className="font-mono text-xl">
              {card.runs}/{card.wickets}{" "}
              <span className="text-sm text-[var(--muted)]">({card.overs} ov)</span>
            </p>
          </header>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[var(--muted)]">
                <th className="pb-2 font-normal">Batter</th>
                <th className="pb-2 font-normal">R</th>
                <th className="pb-2 font-normal">B</th>
                <th className="pb-2 font-normal">4</th>
                <th className="pb-2 font-normal">6</th>
                <th className="pb-2 font-normal">Dismissal</th>
              </tr>
            </thead>
            <tbody>
              {card.batters.map((batter) => (
                <tr key={batter.name} className="border-t border-white/5">
                  <td className="py-2">{batter.name}</td>
                  <td>{batter.runs}</td>
                  <td>{batter.balls}</td>
                  <td>{batter.fours}</td>
                  <td>{batter.sixes}</td>
                  <td className="text-[var(--muted)]">{batter.out ?? "not out"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="mt-6 w-full text-sm">
            <thead>
              <tr className="text-left text-[var(--muted)]">
                <th className="pb-2 font-normal">Bowler</th>
                <th className="pb-2 font-normal">O</th>
                <th className="pb-2 font-normal">R</th>
                <th className="pb-2 font-normal">W</th>
                <th className="pb-2 font-normal">Extras</th>
              </tr>
            </thead>
            <tbody>
              {card.bowlers.map((bowler) => (
                <tr key={bowler.name} className="border-t border-white/5">
                  <td className="py-2">{bowler.name}</td>
                  <td>{overs(bowler.balls)}</td>
                  <td>{bowler.runs}</td>
                  <td>{bowler.wickets}</td>
                  <td>{bowler.extras}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
