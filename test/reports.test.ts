import { test } from "node:test";
import assert from "node:assert/strict";
import { weeklySummary } from "../src/reports/weekly.ts";
import { money, percent } from "../src/reports/format.ts";

test("weekly summary counts accepted value", () => {
  const s = weeklySummary([
    { date: "2026-11-02", total: 120, accepted: true },
    { date: "2026-11-03", total: 80, accepted: false },
  ]);
  assert.deepEqual(s, { sent: 2, accepted: 1, value: 120 });
});

test("formatting", () => {
  assert.equal(money(5), "$5.00");
  assert.equal(percent(1, 4), "25%");
});
