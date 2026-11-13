export interface Extras {
  ladder?: boolean;
  screens?: number;
}

export const LADDER_FEE = 15;
export const SCREEN_FEE = 2.5;

export function quoteTotal(hours: number, rate: number, extras: Extras = {}): number {
  let total = hours * rate;
  if (extras.ladder) total += LADDER_FEE;
  if (extras.screens) total += extras.screens * SCREEN_FEE;
  return total;
}
