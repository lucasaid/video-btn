import React from "react"
import Button from "./button"
import styles from "./cta.module.scss"
import Nameplate from "./nameplate"

const Cta = ({ onClick }) => {
  return (
    <>
      <a href="#" onClick={onClick} className={styles.element}>
        <Button />
        <Nameplate />
      </a>
    </>
  )
}

export default Cta
