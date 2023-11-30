import { eMailValidate } from './eMailValidate';

describe('eMailValidate', () => {
  it('should validate a standard email format', () => {
    expect(eMailValidate('example@example.com')).toEqual(true);
  });

  it('should invalidate an email without an @ symbol', () => {
    expect(eMailValidate('example.com')).toEqual(false);
  });

  it('should invalidate an email without a domain', () => {
    expect(eMailValidate('example@')).toEqual(false);
  });

  it('should invalidate an email with multiple @ symbols', () => {
    expect(eMailValidate('exa@mple@example.com')).toEqual(false);
  });

  it('should validate an email with subdomains', () => {
    expect(eMailValidate('example@sub.example.com')).toEqual(true);
  });

  it('should invalidate an email with special characters', () => {
    expect(eMailValidate('example!@example.com')).toEqual(false);
  });

  it('should invalidate an email without a username', () => {
    expect(eMailValidate('@example.com')).toEqual(false);
  });

  it('should validate an email with a numeric domain', () => {
    expect(eMailValidate('example@123.com')).toEqual(true);
  });

  it('should invalidate an email with spaces', () => {
    expect(eMailValidate('ex ample@example.com')).toEqual(false);
  });

  it('should validate an email with a long top-level domain', () => {
    expect(eMailValidate('example@example.engineering')).toEqual(true);
  });

  it('should invalidate an email with consecutive dots', () => {
    expect(eMailValidate('example..example@example.com')).toEqual(false);
  });
});
