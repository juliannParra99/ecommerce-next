import dotenv from "dotenv"
import path from "path"
import payload from "payload"
import { InitOptions } from "payload/config"

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

let cached = (global as any).payload

if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    }
}

interface Args {
    initOptions?: Partial<InitOptions>
}

//ring bells with the Payload with uppercase
export const getPayloadClient = async ({
    initOptions,
}: Args = {}) => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is missing')
    }

    if (cached.client) {
        return cached.client
    }

    if (!cached.promise) {
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        })
    }

    try {
        cached.client = await cached.promise
    } catch (e: unknown) {
        cached.promise = null
        throw e
    }

    return cached.client
}

// Configure Payload CMS and provide a client through a function.
// This script sets up and caches a Payload CMS client to interact with a headless CMS.
// It utilizes the 'dotenv' package to load environment variables, and 'payload' to initialize the CMS.
// The script ensures that the Payload client is only initialized once, and subsequent calls return the cached client.

// Load environment variables from the '.env' file in the parent directory.

// Check if a cached Payload client exists globally; if not, initialize it as an empty object.

// Define the structure of the cached object with client and promise properties.

// Define the shape of the arguments expected by the getPayloadClient function.

// Export a function, getPayloadClient, which initializes and returns a Payload CMS client.
// The function ensures the required 'PAYLOAD_SECRET' environment variable is present.
// It caches the client to avoid redundant initializations and supports optional initialization options.

// Note: 'getPayloadClient' function name follows a camelCase convention for consistency.