import React, { useState } from 'react';

import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(option => option + 1);
        break;

      case 'neutral':
        setNeutral(option => option + 1);
        break;

      case 'bad':
        setBad(option => option + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const options = { good, neutral, bad };
  const total = good + neutral + bad;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={['good', 'neutral', 'bad']}
          options={Object.keys(options)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
}
