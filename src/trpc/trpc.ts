import { initTRPC } from '@trpc/server'

// This code initializes a trpc server using 
//the '@trpc/server' library. It creates a server instance 't' with context initialization to set up the trpc server, providing a structured way to define and handle RPC (Remote Procedure Call) requests within the application. The server instance exports its router and public procedures. The router defines the routes available on the server, allowing the application to define endpoints for different types of RPC calls. Public procedures are callable functions accessible from clients, enabling communication with the trpc server. Overall, this code sets up a trpc server with defined routes and procedures for RPC communication in the application.

const t = initTRPC.context().create()


export const router = t.router
export const publicProcedure = t.procedure
 