import { capitalize } from '..';

describe('Capitalize letters', () => {
  test('when pass undefined', () => {
    expect(capitalize.letter(undefined)).toBe(undefined);
  });

  test('when pass empty string', () => {
    expect(capitalize.letter('')).toBe('');
  });

  test('only first letter of word should be capitalized', () => {
    expect(capitalize.letter('my name is arjun ghimire')).toBe('My name is arjun ghimire');
  });

  test('when pass undefined ', () => {
    expect(capitalize.words(undefined)).toBe(undefined);
  });

  test('when pass empty string', () => {
    expect(capitalize.words('')).toBe('');
  });

  test('when both word are in lower case', () => {
    expect(capitalize.words('arjun ghimire')).toBe('Arjun Ghimire');
  });

  test('When both word are in upper case', () => {
    expect(capitalize.words('Arjun Ghimire')).toBe('Arjun Ghimire');
  });

  test('when one word is in lower case and one word is in upper case', () => {
    expect(capitalize.words('arjun Ghimire')).toBe('Arjun Ghimire');
  });

  test('when one word is in number and one word is in lower case', () => {
    expect(capitalize.words('1st place')).toBe('1st Place');
  });
});
