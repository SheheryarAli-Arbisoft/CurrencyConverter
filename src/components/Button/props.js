import PropTypes from 'prop-types';

export const propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'small']),
  themeBackground: PropTypes.bool,
};

export const defaultProps = {
  onPress: () => {},
  value: '',
  variant: 'normal',
  themeBackground: false,
};
