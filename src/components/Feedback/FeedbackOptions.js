import { Button } from './Feedback.styled';

export const FeedbackOptions = options => {
  return (
    <div>
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
    </div>
  );
};
