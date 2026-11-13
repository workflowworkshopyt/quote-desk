import { validate } from "./validate.ts";
import { quoteTotal } from "./pricing.ts";

const request = { name: "Sample Customer", email: "customer@example.com", hours: 3, windows: 18 };
const errors = validate(request);
if (errors.length) {
  console.log("Cannot quote:", errors.join("; "));
} else {
  console.log(`Quote for ${request.name}: $${quoteTotal(request.hours, 42.5, { ladder: true, screens: 6 })}`);
}
