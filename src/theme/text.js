const size = {
  large: '30px',
  normal: '22px',
  small: '18px',
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
