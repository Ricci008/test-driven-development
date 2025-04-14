export function isValid(isbn13: string): boolean {
  if (!/^\d{13}$/.test(isbn13)) {
    return false;
  }

  const digits = isbn13.split("").map(Number);
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    const weight = i % 2 === 0 ? 1 : 3; 
    sum += digits[i] * weight;
  }

  const checksum = (10 - (sum % 10)) % 10;
  return checksum === digits[12];
}