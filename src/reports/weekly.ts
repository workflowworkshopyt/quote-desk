export interface SentQuote {
  date: string; // YYYY-MM-DD
  total: number;
  accepted: boolean;
}

export function weeklySummary(quotes: SentQuote[]): { sent: number; accepted: number; value: number } {
  const accepted = quotes.filter((q) => q.accepted);
  return {
    sent: quotes.length,
    accepted: accepted.length,
    value: accepted.reduce((sum, q) => sum + q.total, 0),
  };
}
