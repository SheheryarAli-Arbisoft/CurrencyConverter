import PropTypes from 'prop-types';

export const propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  keyboardType: PropTypes.oneOf(['numeric']),
};

export const defaultProps = {
  onChangeText: () => {},
  value: '',
  disabled: false,
  keyboardType: 'numeric',
};
