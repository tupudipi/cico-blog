'use server'

export default async function getCommentData(post) {
    try {
        const comments = await prisma.comment.findMany({
            include: {
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
            where: {
                postSlug: post,
            }
        });
        return comments;
    } catch (err) {
        throw new Error('Failed to fetch data');
    }

    return comments;
}