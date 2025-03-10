import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Log the NEXTAUTH_SECRET to verify it's being passed correctly
console.log("NEXTAUTH_SECRET in auth.ts:", process.env.NEXT_PUBLIC_NEXTAUTH_SECRET);

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Callbacks
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },

  // Cookies configuration
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`, // Secure cookie name
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production", // Secure in production
      },
    },
  },

  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
});