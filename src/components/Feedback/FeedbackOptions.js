export const FeedbackOptions = state => {
  return (
    <div>
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
    </div>
  );
};
