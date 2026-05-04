import styles from "./Calibration.module.scss";

export default function Calibration() {
  return (
    <button className={styles.calibrationButton}>
      <span className={styles.label}>Calibration</span>

      <svg className={styles.ring} viewBox="0 0 200 66" aria-hidden="true">
        <path
          className={styles.ringPath}
          pathLength="1"
          d="
            M 100 1.5
            H 167
            A 31.5 31.5 0 0 1 198.5 33
            A 31.5 31.5 0 0 1 167 64.5
            H 33
            A 31.5 31.5 0 0 1 1.5 33
            A 31.5 31.5 0 0 1 33 1.5
            H 100
          "
        />
      </svg>
    </button>
  );
}
