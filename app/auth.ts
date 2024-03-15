import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// import CredentialsProvider from "next-auth/providers/credentials";

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "online",
          response_type: "code"
        }
    }
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
    }
    
    }),
    // CredentialsProvider({
    //     name: "User Credential",
    //     credentials: {
    //       username: { type: String, required: true },
    //       password: { type: String, required: true },
    //     },
    //     authorize: async (credentials) => {
    //       const user = {id:12, name:'Abc', password:'xyz'};
    //       if(credentials?.username===user.name && credentials?.password===user.password) {
    //           return user;
    //       } else { 
    //           return null;
    //       }
    //     }
    //   }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn ({user, account}) {
        if (account!.provider == "google"){
            return user;
        }
        if (account!.provider == "github"){
            return user;
        }
    }
  }
});
