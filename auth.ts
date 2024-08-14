import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    credentials({
      credentials: {
        username: { label: "username" },
        password: { label: "username", type: "password" },
      },
      async authorize({ username, password }) {
        console.log({ username, password });
        const User = {
          name: "Suleimane Ducure",
          username: "manito@email.com",
          avatat: "",
        };
        return User;
      },
    }),
  ],
  callbacks: {
    signIn: (params) => {
      return true;
    },
  },
});
