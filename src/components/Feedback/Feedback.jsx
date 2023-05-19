import React from 'react';
import Section from '../Section/Section'
import ControlsBtn from '../ControlsBtn/ControlsBtn';
import Stats from '../Stat/Stat';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    increment = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
  totalValue = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
  };
  positiveFeedbackValue = () => {
    return this.state.good !== 0
      ? Math.round((this.state.good / this.totalValue()) * 100)
      : 0;
  }
  render() {
    const { good, bad, neutral } = this.state;
    const data = Object.keys(this.state);
    return (
<>
        <Section title="To leave your feedback, please press the button">
          <ControlsBtn
            data={data}
            increment={this.increment}
          />
        </Section>
        <Section title="Statistics">
          {this.totalValue() > 0 ? (
            <Stats
              good={good}
              neutral={neutral}
              bad={bad}
              totalValue={this.totalValue()}
              positiveFeedbackValue={this.positiveFeedbackValue()}
            />) : (<p>"No feedback yet"</p>)
          }
        </Section>
</>
    )
}
}
export default Feedback
