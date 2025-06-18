import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!, //this is the google client id that you get from google cloud , "paste that in .env file".
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, //this is the google client secret that you get from google cloud , "paste that in .env file".
    },
  },
});
