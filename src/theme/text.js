const size = {
  large: '30px',
  normal: '20px',
  small: '16px',
};

export const getTextSize = variant => {
  switch (variant) {
    case 'large':
      return size.large;
    case 'normal':
      return size.normal;
    case 'small':
      return size.small;
    default:
      return 0;
  }
};
