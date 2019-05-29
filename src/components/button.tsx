import React from "react"
import styles from "./button.module.scss"
import SVGCircle from "./svg-circle"
const Button = () => {
  return (
    <div className={styles.button}>
      <SVGCircle />
      <div className={styles.dot} />
      <div className={styles.content}>
        <div className={styles.plus} />
        <span className={styles.tap}>Tap</span>
      </div>
    </div>
  )
}
export default Button
