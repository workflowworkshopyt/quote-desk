export function money(n: number): string {
  return "$" + n.toFixed(2);
}

export function percent(part: number, whole: number): string {
  return whole === 0 ? "0%" : Math.round((part / whole) * 100) + "%";
}
