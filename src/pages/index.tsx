import React from "react"
import Cta from "../components/cta"
import styles from "./index.module.scss"

class Application extends React.Component {
  video: React.RefObject<HTMLVideoElement>
  state: {
    cta: boolean
    clicked: boolean
  }
  constructor(props) {
    super(props)
    this.video = React.createRef()
    this.state = {
      cta: false,
      clicked: false,
    }
    this.onClick = this.onClick.bind(this)
  }
  componentDidMount() {
    if (this.video.current) {
      this.video.current.addEventListener("timeupdate", () => {
        if (this.video.current) {
          if (
            Math.floor(this.video.current.currentTime) === 2 &&
            !this.state.cta &&
            !this.state.clicked
          ) {
            this.setState({
              cta: true,
            })
            this.video.current.pause()
          } else if (Math.floor(this.video.current.currentTime) !== 2) {
            this.setState({
              cta: false,
              clicked: false,
            })
          }
        }
      })
    }
  }
  onClick() {
    this.setState({
      cta: false,
      clicked: true,
    })
    if (this.video.current) {
      this.video.current.play()
    }
  }
  render() {
    return (
      <div>
        <div className={styles.video_container}>
          {this.state.cta && <Cta onClick={this.onClick} />}
          <video
            ref={this.video}
            className={styles.video}
            muted={true}
            autoPlay={true}
            controls={false}
          >
            <source
              src="https://giant.gfycat.com/FrightenedColorfulItalianbrownbear.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  }
}
export default Application
