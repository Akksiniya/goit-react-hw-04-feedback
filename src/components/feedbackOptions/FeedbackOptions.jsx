import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Button, ButtonListItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" display="flex" mt="10px" mb="10px">
      {options.map(item => (
        <ButtonListItem key={item}>
          <Button type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </Button>
        </ButtonListItem>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
