import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.statisticsList}>
      <li className={styles.statisticsListItem}>
        <b>Good:</b> {good}
      </li>
      <li className={styles.statisticsListItem}>
        <b>Neutral:</b> {neutral}
      </li>
      <li className={styles.statisticsListItem}>
        <b>Bad:</b> {bad}
      </li>
      <li className={styles.statisticsListItem}>
        <b>Total:</b> {total}
      </li>
      <li className={styles.statisticsListItem}>
        <b> Positive feedback: </b>
        {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
