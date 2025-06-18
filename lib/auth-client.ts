import { createAuthClient } from "better-auth/react";

// Create a single auth client instance
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // optional if client/server are same domain
});

// Destructure from that same instance
export const { signIn, signUp, useSession } = authClient;
