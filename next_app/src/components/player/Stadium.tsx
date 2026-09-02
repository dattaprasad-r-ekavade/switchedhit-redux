import type { ClipId } from "@/lib/replay/types";
import { clipLabel } from "@/lib/replay/clips";
import styles from "./Stadium.module.css";

const CLIP_CLASS: Record<ClipId, string> = {
  DOT: styles.dot,
  RUN_1: styles.run1,
  RUN_2: styles.run2,
  RUN_3: styles.run3,
  FOUR: styles.four,
  SIX: styles.six,
  WICKET: styles.wicket,
  WIDE: styles.wide,
  NOBALL: styles.noball,
};

const CHIP_CLASS: Record<ClipId, string> = {
  DOT: styles.chipDot,
  RUN_1: styles.chipRun,
  RUN_2: styles.chipRun,
  RUN_3: styles.chipRun,
  FOUR: styles.chipFour,
  SIX: styles.chipSix,
  WICKET: styles.chipWicket,
  WIDE: styles.chipExtra,
  NOBALL: styles.chipExtra,
};

const FIELDERS = [
  { x: "50%", y: "7%" },
  { x: "74%", y: "16%" },
  { x: "88%", y: "42%" },
  { x: "76%", y: "72%" },
  { x: "24%", y: "72%" },
  { x: "12%", y: "42%" },
  { x: "26%", y: "16%" },
  { x: "66%", y: "30%" },
];

function Figure({
  className,
  color,
}: {
  className: string;
  color: string;
}) {
  return (
    <div className={className}>
      <span className={styles.head} style={{ background: color }} />
      <span className={styles.body} style={{ background: color }} />
    </div>
  );
}

export function Stadium({
  clip,
  clipKey,
  battingColor,
  bowlingColor,
  muted,
  playing,
}: {
  clip: ClipId;
  clipKey: number;
  battingColor: string;
  bowlingColor: string;
  muted: boolean;
  playing: boolean;
}) {
  "use no memo";
  const boundary = clip === "FOUR" || clip === "SIX";
  return (
    <div className={`${styles.scene} ${playing ? CLIP_CLASS[clip] : ""}`}>
      <div className={`${styles.chip} ${CHIP_CLASS[clip]}`}>
        {clipLabel(clip)}
        {boundary ? " · BOUNDARY" : clip.startsWith("RUN") ? " · INFIELD" : null}
      </div>
      {muted ? <div className={styles.muted}>Muted</div> : null}
      <div className={styles.tvTag}>Bowler&apos;s end · TV</div>
      {playing && boundary ? (
        <div
          key={`call-${clipKey}`}
          className={clip === "SIX" ? styles.callSix : styles.callFour}
        >
          {clip === "SIX" ? "SIX" : "FOUR"}
        </div>
      ) : null}
      {playing && clip.startsWith("RUN") ? (
        <div key={`run-${clipKey}`} className={styles.callRun}>
          {clip === "RUN_3" ? "3" : clip === "RUN_2" ? "2" : "1"}
        </div>
      ) : null}

      <div className={styles.stage}>
        <div className={styles.world}>
          <div className={styles.ground}>
            <div className={styles.rope} />
            <div className={styles.pitch}>
              <div className={styles.creaseNear} />
              <div className={styles.creaseFar} />
              <div className={styles.stumpsNear} />
              <div className={styles.stumpsFar} />
            </div>
            {FIELDERS.map((spot, i) => (
              <div
                key={i}
                className={styles.fielder}
                style={{ left: spot.x, top: spot.y, background: bowlingColor }}
              />
            ))}
            <Figure
              key={`bowler-${clipKey}`}
              className={styles.bowler}
              color={bowlingColor}
            />
            <Figure className={styles.nonStriker} color={battingColor} />
            <Figure
              key={`striker-${clipKey}`}
              className={styles.striker}
              color={battingColor}
            />
            <Figure className={styles.keeper} color="#ece6d4" />
            <div key={`shadow-${clipKey}`} className={styles.ballShadow} />
            <div key={`ball-${clipKey}`} className={styles.ball} />
          </div>
        </div>
      </div>
    </div>
  );
}
