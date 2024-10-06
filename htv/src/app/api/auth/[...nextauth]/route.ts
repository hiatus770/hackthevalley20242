import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from 'bcrypt';
import { neon } from "@neondatabase/serverless";
import { stringify } from "querystring";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Do some validation make sure it was cleaned and everything
                const sql = neon(process.env.DATABASE_URL as string);
                const response = await sql`SELECT * FROM USERS WHERE email=${credentials?.email}`;      
                if (response.length === 0) {  // If the user does not exist
                    return null;
                }
                const user = response[0]; 

                const passwordCorrect = await compare(credentials?.password || "", user.password);

                if (passwordCorrect) {
                    console.log(user.email + " signed in successfully ")
                    return {
                        id: user.id,
                        email: user.email,
                        type: user.type,
                        phone: user.phone,
                        name: user.name,
                        address: user.address
                    }
                }
                return null;
            }
        })
    ], 
    callbacks: {
        async session({ session, token, user }) {
            // Add custom session properties here
            if (!!session && !!session.user) {
                session.user.id = token.id;
                session.user.type = token.type;
                session.user.phone = token.phone;
                session.user.name = token.name;
                session.user.address = token.address;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.type = user.type;
                token.phone = user.phone;
                token.name = user.name;
                token.address = user.address;
            }
            return token;
        }
    }
}); 

export { handler as GET, handler as POST }

/*
import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from 'bcrypt';
import { neon } from "@neondatabase/serverless";
import { stringify } from "querystring";

const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/login'
    },
    providers: [

        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page. 
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials, req) {
                // Do some validation make sure it was cleaned and everything
                const sql = neon(process.env.DATABASE_URL as string);
                const response = await sql`SELECT * FROM USERS WHERE email=${credentials?.email}`;      
                if (response.length === 0) {  // If the user does not exist
                    return null;
                }
                const user = response[0]; 

                const passwordCorrect = await compare(credentials?.password || "", user.password);

                if (passwordCorrect) {
                    console.log(user.email + " signed in successfully ")
                    return {
                        id: user.id,
                        email: user.email,
                        type: user.type,
                    }
                }
                return null;
            }
        })
    ], 
    callbacks: {
        async session({ session, token, user }) {
            // Add custom session properties here
            if (!!session && !!session.user) {
                session.user.id = token.id;
                session.user.type = token.type;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.type = user.type;
            }
            return token;
        }
    }
}); 

export { handler as GET, handler as POST }
*/