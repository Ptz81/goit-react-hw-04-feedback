import css from '../Feedback.module.css'
import PropTypes from 'prop-types'

const Stats = ({ good, neutral, bad, totalValue, positiveFeedbackValue }) => {
  return (
    <ul className={css.feedback_value}>
      <li className={css.feedback_item}> Good: {good}</li>
      <li className={css.feedback_item}>Neutral: {neutral}</li>
      <li className={css.feedback_item}>Bad: {bad}</li>
      <li className={css.feedback_item}>Total: {totalValue}</li>
      <li className={css.feedback_item}>Positive feedback: {positiveFeedbackValue}%</li>
    </ul>
  );
};
Stats.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalValue: PropTypes.number.isRequired,
  positiveFeedbackValue: PropTypes.number.isRequired,
}
export default Stats
