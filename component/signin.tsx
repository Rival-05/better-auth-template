// component/signin.tsx
'use client';

import { signIn } from "@/lib/auth-client"; // BetterAuth client
import { Button } from "@/components/ui/button"; // shadcn/ui

export default function SignInButton() {
  const handleSignIn = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard", // redirect after login
      });
    } catch (err) {
      console.error("Google Sign-In failed:", err);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <Button
        onClick={handleSignIn}
        className="bg-black text-white hover:bg-zinc-800 rounded-lg px-6 py-2 text-sm"
      >
        Sign In with Google
      </Button>
    </div>
  );
}
