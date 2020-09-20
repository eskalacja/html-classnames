const classNames = (base, extras = {}) => {
  const names = [
    base,
    ...Object.keys(extras)
      .filter((extraName) => extras[extraName])
      .map((extraName) => `${base}${extraName}`),
  ];

  return names.join(' ');
};

module.exports = classNames;
