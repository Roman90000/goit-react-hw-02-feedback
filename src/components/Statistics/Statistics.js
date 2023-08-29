import { List, ListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <List>
        <ListItem>
          <b>Good: {good}</b>
        </ListItem>
        <ListItem>
          <b>Neutral: {neutral}</b>
        </ListItem>
        <ListItem>
          <b>Bad: {bad}</b>
        </ListItem>
        <ListItem>
          <b>Total: {total}</b>
        </ListItem>
        <ListItem>
          <b>Positive Feedback: {positivePercentage}</b>
        </ListItem>
      </List>
    </div>
  );
};
