import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { JWT } from "next-auth/jwt";
import type { Session, User } from "next-auth";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
      }
      return session;
    },
    async jwt({ token }: { token: JWT }) {
      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);

declare module "next-auth" {
  interface Session {
    user: User & { id: string };
  }
}