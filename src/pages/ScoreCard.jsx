import React from "react";
import styles from "./ScoreCard.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { Link } from "react-router-dom";

function ScoreCard() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className={styles.main}>
      <div className={styles.table}>
        <h1 className={styles.heading}>SCORE BOARD</h1>
        <table className={styles.tableData}>
          <thead>
            <tr>
              <td className={styles.data}>Position</td>
              <td className={styles.data}>Name</td>
              <td className={styles.data}>Speed</td>
              <td className={styles.data}>Start time</td>
              <td className={styles.data}>End time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.rankers}>1st</td>
              <td className={styles.rankers}>Usain Bolt</td>
              <td className={styles.rankers}>50 km/h</td>
              <td className={styles.rankers}>10:00</td>
              <td className={styles.rankers}>12:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.button}>
        <Link to="/">
          <button className={styles.btn}>
            <FaArrowLeft />
            Back to home
          </button>
        </Link>
        <button className={styles.btnOne} onClick={handleRefresh}>
          Restart Race <IoIosRefresh />
        </button>
      </div>
    </div>
  );
}

export default ScoreCard;
