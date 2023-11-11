import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ],
    database: process.env.DB_URL,
    session: {
        jwt: true,
    },
    jwt: {
        secret: 'dlaodaohle ahohoho'
    },
    callbacks: {
        async jwt(token, user) {
            console.log(user)
            if (user && user.id) {
                token.id = user.id;
            }
            return token;
        },
        async session(session, token) {
            session.user.id = token.id;
            return session
        }
    }

});