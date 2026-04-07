/**
 * Sanitize user input to prevent XSS and injection attacks.
 * Strips HTML tags, trims whitespace, and limits length.
 */
export const sanitizeText = (input: string, maxLength: number): string => {
  return input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/[<>"'&]/g, "") // strip remaining dangerous chars
    .replace(/\s+/g, " ") // collapse multiple whitespace
    .trim()
    .substring(0, maxLength);
};

/** Validate that prayer request content is non-empty after sanitization. */
export const validatePrayerContent = (
  text: string,
): { valid: boolean; error?: string } => {
  const cleaned = sanitizeText(text, 500);
  if (cleaned.length === 0) {
    return { valid: false, error: "Prayer request cannot be empty." };
  }
  if (cleaned.length < 3) {
    return { valid: false, error: "Please write at least a few words." };
  }
  return { valid: true };
};

/** Validate optional name field. */
export const validateName = (
  name: string,
): { valid: boolean; error?: string } => {
  const cleaned = sanitizeText(name, 50);
  if (cleaned.length === 0) {
    return { valid: false, error: "Please enter your name." };
  }
  if (cleaned.length < 2) {
    return { valid: false, error: "Name must be at least 2 characters." };
  }
  return { valid: true };
};
