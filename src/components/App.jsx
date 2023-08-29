import 'modern-normalize';

import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Container, Button } from './Feedback/Feedback.styled';

export class App extends Component {
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
    const total = this.countTotalFeedback();

    return (
      <Container>
        <h1>Please leave feedbeck</h1>
        <Button
          onClick={() =>
            this.setState(prevState => {
              return {
                good: prevState.good + 1,
              };
            })
          }
        >
          Good
        </Button>
        <Button
          onClick={() =>
            this.setState(prevState => {
              return {
                neutral: prevState.neutral + 1,
              };
            })
          }
        >
          Neutral
        </Button>
        <Button
          onClick={() =>
            this.setState(prevState => {
              return {
                bad: prevState.bad + 1,
              };
            })
          }
        >
          Bad
        </Button>

        <h2>Statistics</h2>

        {total === 0 ? (
          <h2>"No feedback given"</h2>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Container>
    );
  }
}
