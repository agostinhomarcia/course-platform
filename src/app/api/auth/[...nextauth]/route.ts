import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Admin", email: "admin@example.com" };

        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin"
        ) {
          return user;
        } else {
          return null; // Retorne null se as credenciais estiverem incorretas
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Página de login
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
