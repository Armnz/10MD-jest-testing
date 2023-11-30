import { nameValidate } from './nameValidate';

describe('nameValidate', () => {
  it('should invalidate a single character string', () => {
    expect(nameValidate('a')).toEqual(false);
  });

  it('should validate a 10 character string', () => {
    expect(nameValidate('qwertyuiop')).toEqual(true);
  });

  it('should invalidate an empty string', () => {
    expect(nameValidate('')).toEqual(false);
  });

  it('should invalidate a string with numbers', () => {
    expect(nameValidate('John123')).toEqual(false);
  });

  it('should invalidate a string with special characters', () => {
    expect(nameValidate('John_Doe')).toEqual(false);
  });

  it('should validate a string with 50 characters', () => {
    const longName = 'a'.repeat(50);
    expect(nameValidate(longName)).toEqual(true);
  });

  it('should invalidate a string with more than 50 characters', () => {
    const tooLongName = 'a'.repeat(51);
    expect(nameValidate(tooLongName)).toEqual(false);
  });

  it('should validate a string with uppercase and lowercase letters', () => {
    expect(nameValidate('AliceSmith')).toEqual(true);
  });

  it('should invalidate a string with spaces', () => {
    expect(nameValidate('John Smith')).toEqual(false);
  });

  it('should validate a two-character string', () => {
    expect(nameValidate('Al')).toEqual(true);
  });
});
