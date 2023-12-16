import { useState, useEffect } from "react";
import React from "react";
import styles from "./RaceTrack.module.css";
import ScoreCard from "./ScoreCard";

function RaceTrack() {
  const [showScoreCard, setShowScoreCard] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowScoreCard(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);
 
  return (
    <>
      <div className={styles.track}>
        <div className={styles.userOne}></div>
      </div>
      {showScoreCard && <ScoreCard />}
    </>
  );
}

export default RaceTrack;
