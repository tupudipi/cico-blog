'use server'
import prisma from "../utils/connect";
import { getAuthSession } from "../api/auth/[...nextauth]/route";

export default async function handleSubmit(desc, postSlug) {
    const session = await getAuthSession();
    if (!session) return { error: 'You must be logged in to comment', status: 401 };
    try {
        if (!postSlug) {
            throw new Error('Post slug is undefined');
        }

        const createdComment = await prisma.comment.create({
            data: {
                desc,
                post: { connect: { slug: postSlug } },
                user: { connect: { email: session.user.email } },
            },
        });
        return { comment: createdComment, status: 201 };
    } catch (error) {
        return { error: error.message, status: 500 };
    }
}