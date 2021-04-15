import styles from "./ProgressBar.module.css";

interface Props {
  postep: number;
}

const ProgressBar: React.FC<Props> = ({ postep }) => {
  return (
    <div className={styles.ProgressBar}>
      <div className={styles.ProgressBarDone} style={{ width: `${postep}%` }} />
    </div>
  );
};

export default ProgressBar;
