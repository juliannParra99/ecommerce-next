//we will be using this both in client and backend.To handle the credantion validation



import { z } from "zod"

// Schema for validating authentication credentials (email and password).
// Enforces email format and minimum password length of 8 characters.
// Provides informative error messages on validation failures.
export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
})

// Alias for the type of validated authentication credentials, inferred from the AuthCredentialsValidator schema.
// Ensures adherence to validation rules (email format, password length, etc.).
// Use this type for type safety and clarity when working with validated data.
export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>