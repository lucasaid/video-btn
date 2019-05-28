import React from "react"
import styles from "./svg-circle.module.scss"
const SVGCircle = () => {
  return (
    <svg viewBox="0 0 120 120" className={styles.progressRing}>
      <circle className={styles.progressRing__circle} r="30" cx="60" cy="60" />
    </svg>
  )
}
export default SVGCircle
