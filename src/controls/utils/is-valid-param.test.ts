import { isValidParam } from './is-valid-param';

describe('isValidParam', () => {
  test('returns true for empty string', () => {
    expect(isValidParam('')).toBeTruthy();
  });

  test('returns true for valid value', () => {
    expect(isValidParam('test')).toBeTruthy();
  });

  test('returns false for value with ?', () => {
    expect(isValidParam('?test')).toBeFalsy();
  });

  test('returns false for value with =', () => {
    expect(isValidParam('test=')).toBeFalsy();
  });
});
