import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        name: {label: "Name", type: "name"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {email: credentials.email},
        });

        if (!user) {
          const newUser = await prisma.user.create({
            data: {
              name: credentials.name ?? credentials.email,
              email: credentials.email,
              password: await bcrypt.hash(credentials.password, 10),
            },
          });

          return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          } as any;
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        } as any;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({token, user}: { token: any, user: any }) {
      return {...token, id: token.id ?? user?.id};
    },
    async session({session, token}: { session: any, token: any }) {
      return {...session, user: {...session.user, id: token.id}};
    },
  },
}
