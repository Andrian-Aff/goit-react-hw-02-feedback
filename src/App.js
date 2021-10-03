import React, { Component } from 'react';
import './App.css';

import Statisticts from './Components/Statistics';
import FeedBackOptions from './Components/FeedBackOptions';
import Section from './Components/Section';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  countTotalFeedback() {}

  countPositiveFeedbackPercentage() {}

  onLeaveFeedback() {}

  render() {
    const { good, bad, neutral } = this.state;
    const isVisible = Object.values(this.state).reduce(
      (acc, el) => (el ? acc + 1 : acc),
      0,
    )
      ? true
      : false;

    return (
      <Section title={'Please leave feedback'}>
        <FeedBackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {isVisible ? (
          <Notification message="No feedback given" />
        ) : (
          <Statisticts
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
