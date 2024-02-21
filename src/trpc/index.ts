import { authRouter } from './auth-router'
import { publicProcedure, router } from './trpc'
//this would be our server

// This file defines the main router of our application using trpc, an RPC (Remote Procedure Call) router.

export const appRouter = router({
  
  //this will be our server, but for all our procedures we want to separete the logic using authRouther
  auth: authRouter
})

export type AppRouter  = typeof appRouter