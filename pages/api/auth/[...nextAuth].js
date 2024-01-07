// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import { connectToDatabase } from "../../../utils/db";

export default NextAuth({
  providers: [
    {
      id: "google",
      name: "Google",
      type: "oauth",
      version: "2.0",
      scope: "openid profile email",
      params: { grant_type: "authorization_code" },
      accessTokenUrl: "https://accounts.google.com/o/oauth2/token",
      requestTokenUrl: "https://accounts.google.com/o/oauth2/auth",
      authorizationUrl: "https://accounts.google.com/o/oauth2/auth",
      profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    // Add other providers if needed
  ],
  database: process.env.MONGODB_URI, 
  callbacks: {
    async session(session, user) {
      return Promise.resolve({
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      });
    },
  }, 
  pages: {
    signIn: "/auth/signin",
  }, 
});
