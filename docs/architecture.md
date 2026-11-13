# Architecture

Quote Desk has no server and no build step. Node runs the TypeScript files directly.

1. A quote request (name, email, optional phone, hours, number of windows) is checked by `validate()` in
   `src/validate.ts`. It returns a list of error messages; an empty list means the request can be priced.
2. `quoteTotal()` in `src/pricing.ts` multiplies hours by the hourly rate and adds the ladder fee and per-screen fee.
3. `src/reports/` turns a list of sent quotes into a weekly summary for the owner.

Technician notes from past jobs live in `data/jobs/` as plain text, one file per job. Nothing reads them yet.

## Business rules

- Visits are booked for 1 to 12 hours, inclusive.
- Email is required so the quote can be sent; a phone number is optional.
- Ladder fee: $15 per visit. Screen cleaning: $2.50 per screen.
