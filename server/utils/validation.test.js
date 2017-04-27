const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should allow string with non-space characters', () => {
    let result = isRealString('Test String  ');
    expect(result).toBe(true);
  });

  it('should reject non-string values', () => {
    let result = isRealString(156);
    expect(result).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let result = isRealString('   ');
    expect(result).toBe(false);
  });
});
