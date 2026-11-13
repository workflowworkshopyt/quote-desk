import { test } from "node:test";
import assert from "node:assert/strict";
import { quoteTotal } from "../src/pricing.ts";

test("hours times rate", () => {
  assert.equal(quoteTotal(2, 40), 80);
});

test("extras are added", () => {
  assert.equal(quoteTotal(1, 40, { ladder: true, screens: 2 }), 60);
});
