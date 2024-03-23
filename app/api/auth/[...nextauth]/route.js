import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        if (
          credentials?.email == process.env.ADMIN_EMAIL &&
          credentials?.password == process.env.ADMIN_PASSWORD
        )
          return {
            id: 1,
            email: process.env.ADMIN_EMAIL,
          };
        return null;
      },
    }),
  ],
});
export { handler as GET, handler as POST };
