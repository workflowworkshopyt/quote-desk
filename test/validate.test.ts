import { test } from "node:test";
import assert from "node:assert/strict";
import { validate } from "../src/validate.ts";

const ok = { name: "Ana", email: "ana@example.com", hours: 2, windows: 10 };

test("a normal request is valid", () => {
  assert.deepEqual(validate(ok), []);
});

test("email is required", () => {
  assert.deepEqual(validate({ ...ok, email: "ana" }), ["email is invalid"]);
});

test("phone is optional but checked when given", () => {
  assert.deepEqual(validate({ ...ok, phone: "555 0100 22" }), []);
  assert.deepEqual(validate({ ...ok, phone: "abc" }), ["phone is invalid"]);
});

test("hours from 1 to 12 inclusive are accepted", () => {
  assert.deepEqual(validate({ ...ok, hours: 1 }), []);
  assert.deepEqual(validate({ ...ok, hours: 12 }), []);
  assert.deepEqual(validate({ ...ok, hours: 13 }), ["hours must be between 1 and 12"]);
  assert.deepEqual(validate({ ...ok, hours: 0 }), ["hours must be between 1 and 12"]);
});
