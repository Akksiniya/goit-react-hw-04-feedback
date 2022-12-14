import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import {
  StatisticName,
  StatisticValue,
  StatisticsItem,
} from 'components/statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box as="ul">
      <StatisticsItem>
        <StatisticName>Good:</StatisticName>
        <StatisticValue>{good}</StatisticValue>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticName>Neutral:</StatisticName>
        <StatisticValue>{neutral}</StatisticValue>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticName>Bad:</StatisticName>
        <StatisticValue>{bad}</StatisticValue>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticName>Total:</StatisticName>
        <StatisticValue>{total}</StatisticValue>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticName>Positive feedback:</StatisticName>
        <StatisticValue>{positivePercentage}%</StatisticValue>
      </StatisticsItem>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
