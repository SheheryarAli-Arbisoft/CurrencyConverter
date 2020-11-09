const size = {
  large: '36px',
  normal: '26px',
  small: '20px',
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
