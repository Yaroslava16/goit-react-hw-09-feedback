import React from 'react';
import { Buttons } from '../Buttons/Buttons';
import { Statistics } from '../Statistics/Statistics';
import Notification from '../Notification/NotificationMessage';
import styles from './Feedback.module.css';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = review => () => {
    this.setState({ [review]: this.state[review] + 1 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good * 100) / (good + neutral + bad)) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.conteiner}>
        <p className={styles.title}>Please leave feedback</p>

        <Buttons
          btns={Object.keys(this.state)}
          onLeaveFeedback={this.handleIncrement}
        />
        <h1 className={styles.titleStatistics}>Statistics</h1>
        {good || neutral || bad >= 1 ? (
          <Statistics
            countGood={good}
            countBad={bad}
            countNeutral={neutral}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}

export default Counter;
