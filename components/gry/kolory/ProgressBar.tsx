import styles from "./ProgressBar.module.css";

interface Props {
  progress: number;
}

const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.ProgressBarDone} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
