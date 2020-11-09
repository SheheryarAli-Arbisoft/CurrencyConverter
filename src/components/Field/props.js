import PropTypes from 'prop-types';

export const propTypes = {
  onPress: PropTypes.func,
  onChangeText: PropTypes.func,
  currency: PropTypes.string,
  amount: PropTypes.string,
  disabled: PropTypes.bool,
};

export const defaultProps = {
  onPress: () => {},
  onChangeText: () => {},
  currency: '',
  amount: '',
  disabled: false,
};
