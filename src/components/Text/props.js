import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['large', 'normal', 'small']),
  bold: PropTypes.bool,
  colorWhite: PropTypes.bool,
  marginBottom: PropTypes.bool,
};

export const defaultProps = {
  variant: 'normal',
  bold: false,
  colorWhite: false,
  marginBottom: false,
};
