import type { PlaybackEvent } from "./types";

export type HighlightIndex = {
  four: number[];
  six: number[];
  wicket: number[];
};

export function buildHighlightIndex(events: PlaybackEvent[]): HighlightIndex {
  const four: number[] = [];
  const six: number[] = [];
  const wicket: number[] = [];
  for (const event of events) {
    if (event.clip === "FOUR") four.push(event.index);
    else if (event.clip === "SIX") six.push(event.index);
    else if (event.clip === "WICKET") wicket.push(event.index);
  }
  return { four, six, wicket };
}

/** Next highlight strictly after `from`. Undefined if none remain. */
export function nextAfter(from: number, list: number[]): number | undefined {
  return list.find((index) => index > from);
}

export function firstEventOfOver(
  events: PlaybackEvent[],
  innings: 1 | 2,
  over: number,
): number | undefined {
  const found = events.find(
    (event) => event.innings === innings && event.over === over,
  );
  return found?.index;
}

export function oversInInnings(events: PlaybackEvent[], innings: 1 | 2): number[] {
  const set = new Set<number>();
  for (const event of events) {
    if (event.innings === innings) set.add(event.over);
  }
  return [...set].sort((a, b) => a - b);
}
