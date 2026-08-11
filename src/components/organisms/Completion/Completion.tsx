import styles from "./Completion.module.scss";

const Completion = () => (
  <div className={styles.container}>
    <div className={styles.copy}>
      <h1 className={styles.title}>
        Thank you for using the <br />
        Smart Waiting Room<span>TM</span>
      </h1>
      <div className={styles.directions}>Please return the headset to the front desk</div>
    </div>
  </div>
);

export default Completion;
