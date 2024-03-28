'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import getCommentData from '@/app/actions/getCommentData'
import handleSubmit from '@/app/actions/handleSubmit'

export default function Comments({ post }) {
    const [desc, setDesc] = useState('');
    const { data: session, status } = useSession();
    const [comments, setComments] = useState([]);
    const [trigger, setTrigger] = useState(0);
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
        const fetchComments = async () => {
            const data = await getCommentData(post);
            setComments(data);
        };

        fetchComments();
    }, [trigger]);

    return (
        <div id='container'>
            <h3 id='title' className='text-2xl font-semibold mt-6 mb-3'>Comments</h3>
            {status == "authenticated" ? (
                <div id='write' className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-7'>
                    <textarea id='input' placeholder='write a comment...' onChange={e => setDesc(e.target.value)} value={desc} className='p-5 w-full rounded-md border-solid border-2 border-gray-200'></textarea>
                    <button id='button' className='w-full md:w-fit px-5 py-4 bg-blue-400 text-white font-bold border-none cursor-pointer rounded-md hover:bg-blue-600 transition-all'
                        onClick={async () => {
                            setIsLoading(true); 
                            console.log(`desc: ${desc}, post slug: ${post}`);
                            await handleSubmit(desc, post);
                            setDesc('');
                            setTrigger(trigger + 1);
                            setIsLoading(false);
                            }
                        }
                    >
                        {isLoading ? 'Loading...' : 'Send'}
                    </button>
                </div>
            ) : (
                <>
                    <p>Only logged in users can leave comments.</p>
                    <Link href="/login">
                        <span className="hover:text-blue-700 underline py-2 transition-all">Log in</span>
                    </Link>
                </>
            )}

            <div id='comments' className='mb-12'>
                {comments.map((comment) => (
                    <div id='comment' className='mt-12'>
                        <div id='user' className='flex items-center gap-5 mb-5'>
                            <Image className='rounded-full object-cover' id='avatar' src={comment.user.image} alt="Comment Author Image" width={50} height={50} />
                            <div id='userInfo' className='flex flex-col gap-1 text-gray-500'>
                                <span className='font-medium'>{comment.user.name}</span>
                                <span className='text-sm'>{comment.createdAt.toLocaleString()}</span>
                            </div>
                        </div>

                        <p id='text' className='text-lg font-light'>
                            {comment.desc}
                        </p>
                    </div>
                )
                )}
            </div>
        </div>
    )
}