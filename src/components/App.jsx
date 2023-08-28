import 'modern-normalize';

import { Component } from 'react';
import { Statistics } from './Feedback/Statistics';
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

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          message={'There is no feedback'}
        />
      </Container>
    );
  }
}
