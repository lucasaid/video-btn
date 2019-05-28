import React from "react"
import styles from "./nameplate.module.scss"
const Nameplate = () => {
  return (
    <div className={styles.nameplate}>
      <div className={styles.nameplate__content}>
        <span className={styles.nameplate__text}>Make it morning</span>
      </div>
    </div>
  )
}

export default Nameplate
