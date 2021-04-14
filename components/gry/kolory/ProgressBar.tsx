import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

interface Props {
  czasTrwaniaSek: number;
}

const ProgressBar = ({ czasTrwaniaSek }) => {
  const [done, setDone] = useState(0);
  // const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      // const newStyle = {
      //   width: `${done}%`,
      // };

      // setStyle(newStyle);
      // console.log("a");

      setDone((d) => {
        if (d < 100) {
          d += 5;
        }
        return d;
      });
    }, 100);
  }, [done]);

  return (
    <div className={styles.ProgressBar}>
      <div className={styles.ProgressBarDone} style={{ width: `${Math.floor(done)}%` }}>
        {/* {done} */}
      </div>
    </div>
  );
};

export default ProgressBar;
