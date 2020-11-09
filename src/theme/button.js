const spacing = {
  normal: '8px',
  small: '6px',
};

export const getPadding = variant => {
  switch (variant) {
    case 'normal':
      return spacing.normal;
    case 'small':
      return spacing.small;
    default:
      return 0;
  }
};
