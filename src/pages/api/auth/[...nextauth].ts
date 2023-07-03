import { addUser } from '@/service/user';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
	],
	callbacks: {
		async signIn({ user: { name, email, image } }) {
			if (!email) {
				return false;
			}
			addUser({
				name: name || '',
				email: email,
				image: image,
				posts: [],
			});
			return true;
		},
	},

	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/auth/signin',
	},
};

export default NextAuth(authOptions);
