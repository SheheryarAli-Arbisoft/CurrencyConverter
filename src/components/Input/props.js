import PropTypes from 'prop-types';

export const propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export const defaultProps = {
  onChangeText: () => {},
  value: '',
  disabled: false,
};
