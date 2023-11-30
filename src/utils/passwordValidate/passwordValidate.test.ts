import { passwordValidate } from './passwordValidate';

describe('passwordValidate', () => {
  it('should validate a password with characters, digits, and special characters', () => {
    expect(passwordValidate('Password1!')).toEqual(true);
  });

  it('should invalidate a password without digits', () => {
    expect(passwordValidate('Password!')).toEqual(false);
  });

  it('should invalidate a password without special characters', () => {
    expect(passwordValidate('Password1')).toEqual(false);
  });

  it('should invalidate a password with less than 8 characters', () => {
    expect(passwordValidate('Pass1!')).toEqual(false);
  });

  it('should validate a password with mixed case, digits, and special characters', () => {
    expect(passwordValidate('PassWord123!@#')).toEqual(true);
  });

  it('should invalidate a password with only lowercase letters', () => {
    expect(passwordValidate('password1!')).toEqual(false);
  });

  it('should invalidate a password with only uppercase letters', () => {
    expect(passwordValidate('PASSWORD1!')).toEqual(false);
  });

  it('should invalidate a password with only digits', () => {
    expect(passwordValidate('12345678')).toEqual(false);
  });

  it('should invalidate a password with only special characters', () => {
    expect(passwordValidate('!@#$%^&*')).toEqual(false);
  });

  it('should validate a long password with the required components', () => {
    expect(passwordValidate('LongPassword12345!@#')).toEqual(true);
  });

  it('should invalidate a password with whitespace', () => {
    expect(passwordValidate('Password 1!')).toEqual(false);
  });
});
