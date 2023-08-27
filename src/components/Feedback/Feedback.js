import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }

  render() {
    return (
      <div>
        <h1>Please leave feedbeck</h1>

        <button
          onClick={() =>
            this.setState(prevState => {
              return {
                good: prevState.good + 1,
              };
            })
          }
        >
          Good
        </button>
        <button
          onClick={() =>
            this.setState(prevState => {
              return {
                neutral: prevState.neutral + 1,
              };
            })
          }
        >
          Neutral
        </button>
        <button
          onClick={() =>
            this.setState(prevState => {
              return {
                bad: prevState.bad + 1,
              };
            })
          }
        >
          Bad
        </button>

        <h2>Statistics</h2>

        <ul>
          <li>
            <b>Good: {this.state.good}</b>
          </li>
          <li>
            <b>Neutral: {this.state.neutral}</b>
          </li>
          <li>
            <b>Bad: {this.state.bad}</b>
          </li>
          <li>
            <b>Total: {this.countTotalFeedback()}</b>
          </li>
          <li>
            <b>Positive Feedback: {this.countPositiveFeedbackPercentage()}</b>
          </li>
        </ul>
      </div>
    );
  }
}
