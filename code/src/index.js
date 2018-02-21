import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  handlePauseClick = () => {
    clearInterval(this.timerID) // Makes ticking stop
  }

  handleResumeClick = () => {
    this.timerID = setInterval( // Resume clock ticking
      () => this.tick(),
      1000
    )
  }

  checkIfEven = () => {
    if (this.state.date.getSeconds() % 2 === 0) { // if seconds is an even number
      return true
    } else {
      return false
    }
  }

  setClassName = () => {
    if (this.checkIfEven()) {
      return "even"
    } else {
      return "odd"
    }
  }

  render() {
    return (
      <div className="clock">
        <div id="contentBox" className={this.setClassName()}>
          <h1>{this.state.date.getDate()}/{this.state.date.getMonth() + 1}
            {' '}{this.state.date.getFullYear()}
          </h1>
          <h2>{this.state.date.toLocaleTimeString()}.</h2>
        </div>
        <div className="buttonBox">
          <button onClick={this.handlePauseClick}>
        Timeout
          </button>
          <button onClick={this.handleResumeClick}>
        Resume
          </button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
