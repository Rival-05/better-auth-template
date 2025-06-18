# 🔐 Next.js Auth Starter: BetterAuth + Prisma + Neon + Shadcn/UI

A full-featured authentication starter built with:

- ✅ **BetterAuth** (Modern fork of NextAuth)
- ✅ **Prisma** ORM
- ✅ **Neon** Postgres (or any PostgreSQL)
- ✅ **Shadcn/UI** for clean UI components
- ✅ **Next.js App Router**
- ✅ **Google OAuth Sign-In** (with easy provider swap)

---

## Why BetterAuth ?

BetterAuth is a modern drop-in replacement for NextAuth, optimized for newer versions of Next.js and with improved DX.

## ✨ Features

- Google Sign-In with BetterAuth
- Prisma DB setup (Neon or custom Postgres)
- Pre-styled `Sign in with Google` button (Shadcn/UI)
- Automatic user/session storage
- Redirect to `/dashboard` after login
- Easily swappable OAuth providers (GitHub, Discord, etc.)

---

# 🤝 Contribute
PRs and feedback welcome! If you find this helpful, drop a ⭐️ on the repo!

## 🚀 Getting Started

### 1. Clone this repository

- git clone https://github.com/YOUR-USERNAME/your-repo-name.git
- cd your-repo-name
- pnpm install

### 2. Setup .env file

Create a .env file in the root and add the following or (replace with your in already created one):

- Your BetterAuth secret :
  - BETTER_AUTH_SECRET=your_better_auth_secret
  - BETTER_AUTH_URL=your_better_auth_url

- Google OAuth Credentials (get them from Google Cloud Console)
  - GOOGLE_CLIENT_ID=your_google_client_id
  - GOOGLE_CLIENT_SECRET=your_google_client_secret

- Prisma DB connection (use Neon or any Postgres URL)
  - DATABASE_URL=your_postgres_connection_string

### 3. Push Prisma schema to DB

- npx prisma db push

### 4. Run the dev server

- pnpm dev
 - Visit http://localhost:3000

### 5. 🔐 Sign-In Flow

- Click the "Sign In with Google" button.
- On successful login, user is redirected to /dashboard (if you want to make him redirect to any other page then provide the route in signin.tsx file inplace of dashboard).
- User data is stored in the database via Prisma.

### 6. 🔄 Want to use GitHub, Discord, etc.?

- Go to your auth config (usually auth.ts) and replace the Google provider with (Github, Twitter or Discord or any other..etc):

For eg:
(For Github: )
import { betterAuth } from "better-auth"

<pre>
export const auth = betterAuth({<br>
    socialProviders: {<br>
        github: {<br> 
            clientId: process.env.GITHUB_CLIENT_ID as string,<br> 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,<br> 
        },<br> 
    },<br>
})<br>
</pre>
Similarly for other socialProviders as well. For more refer to https://www.better-auth.com/docs/authentication/email-password

