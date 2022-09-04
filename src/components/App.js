import React, { Component } from 'react';
import Options from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (this.countTotalFeedback() === 0) return 0;
    return ((good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  onButtonClick = e => {
    const { option } = e.target.dataset;
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title={'Please leave feedback'}>
          <Options options={options} onLeaveFeedback={this.onButtonClick} />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
