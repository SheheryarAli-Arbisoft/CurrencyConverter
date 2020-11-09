const padding = {
  normal: '8px',
  small: '6px',
};

export const getPadding = variant => {
  switch (variant) {
    case 'normal':
      return padding.normal;
    case 'small':
      return padding.small;
    default:
      return 0;
  }
};
