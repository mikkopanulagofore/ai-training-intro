// local@domain.tld: no whitespace or extra @, and the domain needs at least one dot
const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

export function validateEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}
