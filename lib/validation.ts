export type ValidationResult = {
  valid: boolean;
  errors: Record<string, string>;
};

export type QuoteInput = {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  cargoType?: string;
  origin?: string;
  destination?: string;
  weight?: string;
  pickupDate?: string;
  details?: string;
};

export type ContactInput = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isBlank = (v: unknown): boolean =>
  typeof v !== "string" || v.trim().length === 0;

function check(
  errors: Record<string, string>,
  field: string,
  value: unknown,
  label: string,
) {
  if (isBlank(value)) errors[field] = `${label} is required.`;
}

export function validateQuote(input: QuoteInput): ValidationResult {
  const errors: Record<string, string> = {};
  check(errors, "fullName", input.fullName, "Full name");
  check(errors, "company", input.company, "Company name");
  check(errors, "phone", input.phone, "Phone number");
  check(errors, "origin", input.origin, "Origin");
  check(errors, "destination", input.destination, "Destination");

  if (isBlank(input.email)) {
    errors.email = "Email address is required.";
  } else if (!EMAIL.test(input.email!.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

export function validateContact(input: ContactInput): ValidationResult {
  const errors: Record<string, string> = {};
  check(errors, "name", input.name, "Name");
  check(errors, "message", input.message, "Message");

  if (isBlank(input.email)) {
    errors.email = "Email address is required.";
  } else if (!EMAIL.test(input.email!.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
