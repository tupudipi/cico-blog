'use client'

import Link from 'next/link'

import Image from 'next/image'
// import useSWR from 'swr'
// import { useSession } from 'next-auth/react'
import { useState } from 'react'

// const fetcher = async (url) => {
//     const res = await fetch(url);
//     const data = await res.json();
//     if (!res.ok) {
//         const error = new Error(data.message);
//         throw error;
//     }
//     return data;
// }

const Comments = () => {
    // const { status } = useSession();
    // const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);
    const [desc, setDesc] = useState('');

    // const handleSubmit = async () => {
    //     await fetch('http://localhost:3000/api/comments', {
    //         method: 'POST',
    //         body: JSON.stringify({ desc, postSlug }),
    //     });
    //     setDesc('');
    //     mutate();
    // };


    return (
        <div>
            <h3>Comments</h3>
            {/* {status === "authenticated" ? ( */}
                <div>
                    <textarea placeholder='write a comment...' onChange={e => setDesc(e.target.value)} value={desc}></textarea>
                    <button>Send</button>
                </div>

                {/* <Link href="/login">Login to write a comment.</Link> */}

            <div>
                {/* {isLoading ? "Loading..." : data.map((comment) => ( */}
                    <div>
                        <div>
                            <Image src='' alt="" width={50} height={50}  />
                            <div >
                                <span className=''></span>
                                <span className=''></span>
                            </div>

                        </div>
                        <p></p>
                    </div>
            </div>
        </div>
    )
}

export default Comments