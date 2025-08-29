export function truncateDecimal(value: number): number {
  return Math.floor(value * 100) / 100;
}
