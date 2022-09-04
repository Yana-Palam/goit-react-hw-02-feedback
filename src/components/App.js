import React, { Component } from 'react';
import Options from './Options';
import Statistics from './Statistics';

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
    return this.state.good / this.countTotalFeedback();
  };

  clickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  clickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  clickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Options
          onGood={this.clickGood}
          onNeutral={this.clickNeutral}
          onBad={this.clickBad}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
