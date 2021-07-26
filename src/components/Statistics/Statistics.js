import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { total, positiveFeedback, countGood, countNeutral, countBad } =
      this.props;
    return (
      <>
        <ul className={styles.list}>
          <li>
            <p className={styles.text}>Good: {countGood}</p>
          </li>
          <li>
            <p className={styles.text}>Neutral: {countNeutral}</p>
          </li>
          <li>
            <p className={styles.text}>Bad: {countBad}</p>
          </li>

          <li>
            <p className={styles.text}>
              Total: <span>{total}</span>
            </p>
          </li>
          <li>
            <p className={styles.text}>
              Positive feedback: <span>{positiveFeedback} %</span>
            </p>
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  countGood: PropTypes.number.isRequired,
  countNeutral: PropTypes.number.isRequired,
  countBad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  PositiveFeedback: PropTypes.func.isRequired,
};
