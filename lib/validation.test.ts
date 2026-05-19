import { test } from "node:test";
import assert from "node:assert/strict";
import { validateQuote, validateContact } from "./validation";

test("validateQuote: passes with all required fields", () => {
  const r = validateQuote({
    fullName: "Asha Mwanga",
    company: "Acme Ltd",
    email: "asha@acme.co.tz",
    phone: "+255700000000",
    cargoType: "Container",
    origin: "Dar es Salaam",
    destination: "Kigali, Rwanda",
  });
  assert.equal(r.valid, true);
  assert.deepEqual(r.errors, {});
});

test("validateQuote: flags missing required fields", () => {
  const r = validateQuote({});
  assert.equal(r.valid, false);
  assert.ok(r.errors.fullName);
  assert.ok(r.errors.company);
  assert.ok(r.errors.email);
  assert.ok(r.errors.phone);
  assert.ok(r.errors.origin);
  assert.ok(r.errors.destination);
});

test("validateQuote: flags invalid email", () => {
  const r = validateQuote({
    fullName: "A",
    company: "B",
    email: "not-an-email",
    phone: "123",
    origin: "X",
    destination: "Y",
  });
  assert.equal(r.valid, false);
  assert.ok(r.errors.email);
});

test("validateContact: passes with required fields", () => {
  const r = validateContact({
    name: "Juma",
    email: "juma@example.com",
    subject: "General Inquiry",
    message: "Hello, I need a quote for cargo.",
  });
  assert.equal(r.valid, true);
  assert.deepEqual(r.errors, {});
});

test("validateContact: flags missing name, email, message", () => {
  const r = validateContact({ email: "bad" });
  assert.equal(r.valid, false);
  assert.ok(r.errors.name);
  assert.ok(r.errors.email);
  assert.ok(r.errors.message);
});
