import next from "next"

// Configure and export a Next.js application instance and request handler.
// This script uses the 'next' package to set up a Next.js application.
// It specifies the development mode based on the environment, defines the port, 
// and exports the application instance and request handler for use in the main Express server file.

const PORT = Number(process.env.PORT) || 3000

export const nextApp = next({
    dev: process.env.NODE_ENV !== "production",
    port: PORT
})

export const nextHandler = nextApp.getRequestHandler()