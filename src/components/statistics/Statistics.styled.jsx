import styled from 'styled-components';

export const StatisticsItem = styled.li`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

export const StatisticName = styled.span`
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const StatisticValue = styled.span`
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;
