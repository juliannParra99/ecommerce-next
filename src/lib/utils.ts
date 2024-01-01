import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This function formats a price value based on given options and returns a formatted string.

// The function takes two parameters:
// - price: a number or string representing the price value.
// - options: an optional object containing formatting options.
export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT"; // Specifies the currency type (default: USD)
    notation?: Intl.NumberFormatOptions["notation"]; // Specifies notation type (default: compact)
  } = {} // Default empty object if options are not provided
) {
  // Destructure the options object to extract currency and notation, assigning default values if not provided
  const { currency = "USD", notation = "compact" } = options;

  // Convert the price to a numeric value if it's a string
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  // Create a new Intl.NumberFormat object to format the numericPrice
  // using the specified currency, notation, and other formatting options
  // The maximumFractionDigits is set to 2 to display up to 2 decimal places.
  // Format the numericPrice according to the options and return the formatted price as a string
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}
