import type { NextAuthConfig } from "next-auth";
export const authConfig = {
  callbacks: {
    signIn: (params) => {
      console.log("Sign callback");
      return true;
    },
  },

  providers: [],
} satisfies NextAuthConfig;
