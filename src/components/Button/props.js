import PropTypes from 'prop-types';

export const propTypes = {
  onPress: PropTypes.func,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'small']),
  icon: PropTypes.node,
  themeBackground: PropTypes.bool,
};

export const defaultProps = {
  onPress: () => {},
  icon: null,
  value: '',
  variant: 'normal',
  themeBackground: false,
};
