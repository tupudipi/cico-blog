'use client'

import Link from 'next/link'

import Image from 'next/image'
import { useState } from 'react'

const Comments = () => {
    const [desc, setDesc] = useState('');

    return (
        <div id='container'>
            <h3 id='title' className='text-2xl font-semibold mt-6 mb-3'>Comments</h3>
            {/* {status === "authenticated" ? ( */}
                <div id='write' className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-7'>
                    <textarea id='input' placeholder='write a comment...' onChange={e => setDesc(e.target.value)} value={desc} className='p-5 w-full rounded-md border-solid border-2 border-gray-200'></textarea>
                    <button id='button' className='w-full md:w-fit px-5 py-4 bg-blue-400 text-white font-bold border-none cursor-pointer rounded-md hover:bg-blue-600 transition-all'>Send</button>
                </div>

                {/* <Link href="/login">Login to write a comment.</Link> */}

            <div id='comments' className='mb-12'>
                {/* {isLoading ? "Loading..." : data.map((comment) => ( */}
                    <div id='comment' className='mt-12'>
                        <div id='user' className='flex items-center gap-5 mb-5'>
                            <Image className='rounded-full object-cover' id='avatar' src='/coding.png' alt="Comment Author Image" width={50} height={50}  />
                            <div id='userInfo' className='flex flex-col gap-1 text-gray-500'>
                                <span className='font-medium'>User Name</span>
                                <span className='text-sm'>08.03.2024</span>
                            </div>
                        </div>

                        <p id='text' className='text-lg font-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed ratione nam error dignissimos hic, necessitatibus quo iusto molestiae fugit quam sint amet consectetur praesentium, ex nihil. Accusantium, autem rerum.
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default Comments