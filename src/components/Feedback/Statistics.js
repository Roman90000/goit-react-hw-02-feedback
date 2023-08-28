import { StatisticsContainer } from './Feedback.styled';
import { List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  message,
}) => {
  return (
    <StatisticsContainer>
      <h2>{message}</h2>

      <List>
        <li>
          <b>Good: {good}</b>
        </li>
        <li>
          <b>Neutral: {neutral}</b>
        </li>
        <li>
          <b>Bad: {bad}</b>
        </li>
        <li>
          <b>Total: {total}</b>
        </li>
        <li>
          <b>Positive Feedback: {positivePercentage}</b>
        </li>
      </List>
    </StatisticsContainer>
  );
};
