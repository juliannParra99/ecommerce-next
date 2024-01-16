//this will be the entrey point for our express-server
import express from "express"
import { getPayloadClient } from "./get-payload"
import { nextHandler, nextApp } from "./next-utils"


// Set up an Express server to host a Next.js application. 
// This script initializes the server, configures middleware to handle Next.js requests, 
// and starts the server, providing a smooth integration between Express and Next.js. 
// It also logs relevant information such as admin URLs and the Next.js application URL.

const app = express()
const PORT = Number(process.env.PORT) || 3000


const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                cms.logger.info(`Admin URL: ${cms.getAdminURL()}`)
            },
        },
    })

    app.use((req, res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
        // payload.logger.info('Next.js started')

        app.listen(PORT, async () => {
            // payload.logger.info(
            //     `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
            // )
        })
    })
}

start()