import styled from 'styled-components';

export const ButtonListItem = styled.li`
  list-style: none;
  margin-right: 4px;
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  padding: 5px;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.mainBg};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.secondaryBg};
  }
`;
