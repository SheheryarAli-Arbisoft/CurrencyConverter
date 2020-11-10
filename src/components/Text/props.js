import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(['large', 'normal', 'small']),
  bold: PropTypes.bool,
  colorWhite: PropTypes.bool,
  marginBottom: PropTypes.bool,
};

export const defaultProps = {
  children: '',
  variant: 'normal',
  bold: false,
  colorWhite: false,
  marginBottom: false,
};
