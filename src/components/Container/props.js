import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  themeBackground: PropTypes.bool,
};

export const defaultProps = {
  centered: false,
  themeBackground: false,
};
