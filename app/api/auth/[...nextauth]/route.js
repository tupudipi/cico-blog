import prisma from '@/app/utils/connect';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            if (url.endsWith("/login")) return baseUrl;
            else if (url.startsWith("/")) return `${baseUrl}${url}`;
            else if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        }
    },
};

export const handler = NextAuth(authOptions);
export const getAuthSession = () => getServerSession(authOptions);

export { handler as GET, handler as POST };