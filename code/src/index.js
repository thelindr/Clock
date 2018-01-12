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

  handleClick = () => {
    clearInterval(this.timerID) // Makes ticking stop
  }

  handleResumeClick = () => {
    this.timerID = setInterval( // Resume clock ticking
      () => this.tick(),
      1000
    )
  }

  checkIfEvening = () => {
    if (this.state.date > 12) {
      return true
    } else {
      return false
    }
  }

  setClassName = () => {
    if (this.checkIfEvening()) {
      return "evening"
    } else {
      return "noon"
    }
  }

  render() {
    return (
      <div id="contentBox" className={this.setClassName()}>
        <h1>What Time is It?</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div className="buttonBox">
          <button onClick={this.handleClick}>
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
