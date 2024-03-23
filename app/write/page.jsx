'use client'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const WritePage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status=="unauthenticated" || !session || session.user.email !== process.env.NEXT_PUBLIC_ADMIN_MAIL) {
            router.push('/');
        }
    }, [session]);

    console.log(status, session?.user.email, process.env.NEXT_PUBLIC_ADMIN_MAIL);

    if (session && session.user.email == process.env.NEXT_PUBLIC_ADMIN_MAIL) {
        return (
            <div className="grow mt-8">
                <h1 className="text-xl font-semibold mb-6">Write new post</h1>
            </div>
        )
    }

    if (!session || session.user.email !== process.env.NEXT_PUBLIC_ADMIN_MAIL) {
        return (
            <div className="grow mt-8">
                <h1 className="text-xl font-semibold text-red-500">You are not authorized to access this page</h1>
            </div>
        );
    }
}

export default WritePage;