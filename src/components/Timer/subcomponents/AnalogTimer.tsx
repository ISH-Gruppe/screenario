import styles from "./AnalogTimer.module.scss";

export const AnalogTimer = ({
  seconds,
  totalSeconds,
}: {
  seconds: number;
  totalSeconds: number;
}) => {
  return (
    <div className={styles.clock}>
      <div className="clock">
        <div
          className={styles.progressBackground}
          style={{
            // @ts-ignore
            "--filler-rotation": `${totalSeconds / 60 <= 30 ? 90 : 270}deg`,
            // @ts-ignore
            "--progress": `${90 + (totalSeconds / 60 / 60) * 360}deg`,
            // @ts-ignore
            "--filler-color": totalSeconds / 60 > 30 ? "var(--color)" : "white",
          }}
        />
        <div
          className={`${styles.secondHand} ${styles.hand}`}
          style={{ transform: `rotate(${180 + (seconds / 60) * 360}deg)` }}
        />
        {/*<div*/}
        {/*  className={`${styles.minuteHand} ${styles.hand}`}*/}
        {/*  style={{ transform: `rotate(${180 + (minutes / 60) * 360}deg)` }}*/}
        {/*/>*/}
        {/*<div*/}
        {/*  className={`${styles.hourHand} ${styles.hand}`}*/}
        {/*  style={{ transform: `rotate(${180 + (hours / 24) * 360}deg)` }}*/}
        {/*/>*/}
        <div className={`${styles.center}`}></div>
        <div className="legend">
          {Array(60)
            .fill(1)
            .map((_, i) => (
              <div
                key={i}
                className={`${styles.tick} ${i % 5 === 0 ? styles.big : ""}`}
                style={{ transform: `rotate(${i * 6}deg)` }}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};
