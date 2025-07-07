const { isValidName, isValidEmail } = require('../../src/services/validation');

describe('Validation des champs utilisateur', () => {
  test('Nom valide', () => {
    expect(isValidName('toto')).toBe(true);
    expect(isValidName('')).toBe(false);
    expect(isValidName('    ')).toBe(false);
    expect(isValidName(null)).toBe(false);
  });

  test('Email valide', () => {
    expect(isValidEmail('toto@example.com')).toBe(true);
    expect(isValidEmail('pasunemail')).toBe(false);
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail(null)).toBe(false);
  });
});