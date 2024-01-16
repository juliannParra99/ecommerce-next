import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import dotenv from 'dotenv'

// This file configures a Payload CMS project, defining settings for server URL, collections, routes, bundler,
// meta information for the admin interface, rate limiting, editor configuration, MongoDB database connection,
// TypeScript type generation, and other project-specific parameters.
// It utilizes various Payload packages such as bundler-webpack, db-mongodb, and richtext-slate.

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [], 
  routes: {
    admin: '/sell',
  },
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- DigitalGiraffe',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})