import { publicProcedure, router } from './trpc'
//this would be our server

// This file defines the main router of our application using trpc, an RPC (Remote Procedure Call) router.

export const appRouter = router({
      // mock: We define a route called 'anyApiRoute' that is publicly accessible.

  anyApiRoute: publicProcedure.query(()=>{
    return "hello there"
  }),
})

export type AppRouter  = typeof appRouter