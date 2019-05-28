import React from "react"
import styles from "./button.module.scss"
import SVGCircle from "./svg-circle"
const Button = () => {
  return (
    <div className={styles.button}>
      <SVGCircle />
      <div className={styles.big_dot} />
      <div className={styles.dot} />
      <span className={styles.content}>
        <span className={styles.plus} />
        <span className={styles.tap}>Tap</span>
      </span>
    </div>
  )
}
export default Button
