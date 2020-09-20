const classNames = require('../index');

describe('classNames', () => {
  it('should return base class when no extras', () => {
    expect(classNames('test')).toBe('test');
  });

  it('should add one class', () => {
    const result = classNames('test', {
      '--has-one': true,
      '--has-two': false,
    });

    expect(result).toBe('test test--has-one');
  });

  it('should add all classes', () => {
    const result = classNames('test', {
      '--has-one': true,
      '--has-two': true,
    });

    expect(result).toBe('test test--has-one test--has-two');
  });

  it('should add no classes', () => {
    const result = classNames('test', {
      '--has-one': false,
      '--has-two': false,
    });

    expect(result).toBe('test');
  });
});
