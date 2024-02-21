//this file contain a separete API endpoint; that handles the authentication logic.
import { AuthCredentialsValidator } from '../lib/validators/account-credentials-validator'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '../get-payload'
import { TRPCError } from '@trpc/server'

// This file contains an API endpoint that handles user creation in PayloadCMS and sends
// verification emails as part of the registration process. It can be used to allow users 
//to register for an application and manage their authentication. And it could implement other
//things related with payloadCMS


export const authRouter = router({
    //this will create an user in payloadCms
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input
      const payload = await getPayloadClient()

      // check if user already exists
      const { docs: users } = await payload.find({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      })

      if (users.length !== 0)
        throw new TRPCError({ code: 'CONFLICT' })

      //this operation will automaticaly send an email veification for our sign in
      await payload.create({
        //collection is like a database table
        collection: 'users',
        data: {
          email,
          password,
          role: 'user',
        },
      })

      return { success: true, sentToEmail: email }

    })
})