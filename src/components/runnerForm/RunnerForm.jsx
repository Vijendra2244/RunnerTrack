import React, { useState } from "react";
import styles from "./RunnerForm.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function RunnerForm() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    speed: "",
    time: "",
  });
  const [participants, setParticipants] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;

    setUserDetails({
      ...userDetails,
      [e.target.name]: value,
    });
  };
  
  return (
    <>
      <div className={styles.runnerContainer}>
        <h1 className={styles.runnerHeading}>RUNNER DETAILS</h1>
        <p className={styles.runnerMainTag}>*you can add max 10 participants</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setParticipants([...participants, userDetails]);
            setUserDetails({
              userName: "",
              speed: "",
              time: "",
            });
          }}
        >
          <label className={styles.runnerLabel} htmlFor="panticipantsName">
            Name
          </label>
          <input
            onChange={handleChange}
            value={userDetails.userName}
            className={styles.runnerInput}
            type={"text"}
            name="userName"
            placeholder={"Usain Bolt"}
            id="participantsName"
          />
          <label className={styles.runnerLabel} htmlFor="speed">
            Speed
          </label>
          <input
            onChange={handleChange}
            value={userDetails.speed}
            name="speed"
            className={styles.runnerInput}
            type={"text"}
            placeholder={"30km/h"}
            id="speed"
          />
          <label className={styles.runnerLabel} htmlFor="speedTimer">
            Speed Time
          </label>
          <input
            onChange={handleChange}
            value={userDetails.time}
            name="time"
            className={styles.runnerInput}
            type={"text"}
            placeholder={"10.00"}
            id="speedTimer"
          />
          <input
            className={styles.addRunnerButton}
            type="submit"
            value={"+ ADD RUNNER"}
            disabled={participants.length == 10}
          />
        </form>
      </div>
      <div className={styles.mainContainerList}>
        <h1 className={styles.heading}>LIST OF PARTICIPANTS</h1>
        <div className={styles.tableUsers}>
          <table className={styles.tableHeading}>
            <thead>
              <tr>
                <td className={styles.tableDataList}>Name</td>
                <td className={styles.tableDataList}>Speed</td>
                <td className={styles.tableDataList}>Start time</td>
                <td className={styles.tableDataList}>End time</td>
              </tr>
            </thead>
            <tbody className={styles.userData}>
              {participants.map((participant, index) => (
                <tr key={index}>
                  <td className={styles.table}>{participant.userName}</td>
                  <td className={styles.table}>{participant.speed}</td>
                  <td className={styles.table}>{participant.time}</td>
                  <td className={styles.table}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div className={styles.button}>
         <Link to="/race">
           <button  className={styles.btn}>
            Start Race <FaArrowRightLong />
          </button>
         </Link>
        </div>
      </div>
    </>
  );
}

export default RunnerForm;
