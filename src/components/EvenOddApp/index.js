import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state

    const countName = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="count-heading">
            Count <span>{count}</span>
          </h1>
          <p className="count-paragraph">Count is {countName}</p>
          <button
            className="btn-style"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
