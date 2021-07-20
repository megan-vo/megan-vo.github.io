const sizes = {
  xs: '320px',
  sm: '768px',
  med: '900px',
  lg: '1200px'
};

const devices = {
  xs: `(min-width: ${sizes.xs})`,
  sm: `(min-width: ${sizes.sm})`,
  med: `(min-width: ${sizes.med})`,
  lg: `(min-width: ${sizes.lg})`
};

export default devices;
