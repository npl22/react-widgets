import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() { this.intervalID = setInterval(this.tick, 1000); }

  componentWillUnmount() { clearInterval(this.intervalID); }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
        <div className="clock-container">

          <h1>Clock</h1>
          <div className="clock">
            <ul>
              <li>Time:</li>
              <li>
                {`${this.state.date.toLocaleTimeString()}`}
              </li>
            </ul>
            <ul>
              <li>Date:</li>
              <li>
                {`${this.state.date.toLocaleDateString()}`}
              </li>
            </ul>
          </div>

        </div>
    );
  }
}

module.exports = Clock;
