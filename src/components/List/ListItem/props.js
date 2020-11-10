import PropTypes from 'prop-types';

export const propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

export const defaultProps = {
  onPress: () => {},
  text: '',
  icon: null,
  iconColor: '#000000',
};
