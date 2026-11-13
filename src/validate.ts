export interface QuoteRequest {
  name: string;
  email: string;
  phone?: string;
  hours: number;
  windows: number;
}

// Business rules: a visit is booked for 1 to 12 hours (inclusive). Email is required; phone is optional.
const MIN_HOURS = 1;
const MAX_HOURS = 12;

export function validate(req: QuoteRequest): string[] {
  const errors: string[] = [];
  if (!req.name.trim()) errors.push("name is required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.email)) errors.push("email is invalid");
  if (req.phone !== undefined && !/^[0-9 +()-]{7,}$/.test(req.phone)) errors.push("phone is invalid");
  if (req.hours < MIN_HOURS || req.hours >= MAX_HOURS) errors.push("hours must be between 1 and 12");
  if (!Number.isInteger(req.windows) || req.windows < 1) errors.push("windows must be a whole number of at least 1");
  return errors;
}
