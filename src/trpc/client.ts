import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from './'

// This code creates a hook for React using '@trpc/react-query', which facilitates communication between the front-end and back-end of the application. It uses the 'createTRPCReact' function to create the hook, specifying 'AppRouter' as the type to configure the hook with the application's router.
export const trpc = createTRPCReact<AppRouter>({})

