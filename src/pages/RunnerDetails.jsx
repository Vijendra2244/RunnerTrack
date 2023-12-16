import React from 'react'
import styles from "./RunnerDetails.module.css"
import RunnerForm from '../components/runnerForm/RunnerForm'


function RunnerDetails() {
  return (
     <>
        <div className={styles.mainContianer}>
           <RunnerForm/>
        </div>
      </>
  )
}

export default RunnerDetails