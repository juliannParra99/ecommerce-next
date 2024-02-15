//this will be the entrey point for our express-server
import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextHandler, nextApp } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc";

// Set up an Express server to host a Next.js application.
// This script initializes the server, configures middleware to handle Next.js requests,
// and starts the server, providing a smooth integration between Express and Next.js.
// It also logs relevant information such as admin URLs and the Next.js application URL.

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Creates a context for trpc Express middleware using the request and response objects.
const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
      },
    },
  });

  // Sets up an Express middleware at "/api/trpc" to handle trpc requests using 'appRouter' and 'createContext'.

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    // payload.logger.info('Next.js started')

    app.listen(PORT, async () => {
      // payload.logger.info(
      //     `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      // )
    });
  });
};

start();
