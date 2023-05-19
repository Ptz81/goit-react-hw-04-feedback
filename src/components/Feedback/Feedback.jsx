import React from 'react';
import { useState } from 'react';
import Section from '../Section/Section'
import ControlsBtn from '../ControlsBtn/ControlsBtn';
import Stats from '../Stat/Stat';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function increment(color) {
    switch (color) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  }
  const totalValue = good + neutral + bad;
  const valueRate = {good, neutral, bad};
  function positiveFeedbackValue () {
    return good !== 0
      ? Math.round((good / totalValue) * 100)
      : 0;
  }
    return (
<>
        <Section title="To leave your feedback, please press the button">
          <ControlsBtn
            valueRate={valueRate}
            increment={increment}
          />
        </Section>
        <Section title="Statistics">
          {totalValue > 0 ? (
            <Stats
              good={good}
              neutral={neutral}
              bad={bad}
              totalValue={totalValue}
              positiveFeedbackValue={positiveFeedbackValue()}
            />) : (<p>"No feedback yet"</p>)
          }
        </Section>
</>
    )
}
// }
export default Feedback
