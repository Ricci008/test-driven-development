export function calcPoints(hits: string): number {
  if (!hits.trim()) return 0;

  const parts = hits.split(" ");
  if (parts.length % 2 !== 0) return 0; // Invalid input format

  let sum = 0;

  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parseInt(parts[i], 10);
    const sector = parseInt(parts[i + 1], 10);

    if (isNaN(multiplier) || isNaN(sector)) return 0;

    sum += multiplier * sector;
  }

  return sum;
}

export function possibleCheckout(x: number): string {
  const remaining = 501 - x;

  // Checkout must be with a double
  if (remaining <= 0 || remaining % 2 !== 0 || remaining / 2 > 20) {
    return "";
  }

  return `Double ${remaining / 2}`;
}