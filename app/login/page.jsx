'use client'
import Link from 'next/link';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn } from 'next-auth/react';

const page = () => {
    return (
        <div className="grow mt-8 flex flex-col items-center h-screen md:h-auto gap-4">
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold leading-10'>Log in to your account</h1>
                <p>Or <Link href="/register" className='hover:text-blue-500 transition-all underline hover:no-underline'>register a new account</Link></p>
            </div>

            <div className='p-5 rounded-lg shadow-lg w-full md:max-w-md'>
                <form action="" method="post" className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className='py-2 px-3 border-2 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className='py-2 px-3 border-2 rounded-md' />
                    </div>

                    <div className='flex justify-between text-sm'>
                        <div className='flex gap-1 items-center'>
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>

                        <Link href="/forgot-password" className='text-right hover:text-blue-500 transition-all underline hover:no-underline'>Forgot your password?</Link>
                    </div>

                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all'>Login</button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <p className="bg-white px-2">Or continue with</p>
                        </div>
                    </div>

                    <div className='flex gap-4 h-12 mt-2'>
                        <div className='rounded-md border-2 shadow-sm hover:shadow grow flex p-2 items-center text-gray-600 hover:text-black transition-all' onClick={() => signIn("google")}>
                            <Link href="/" className='w-full flex justify-center'>
                                <i className="text-lg">
                                    <FontAwesomeIcon icon={faGoogle} className='h-8' />
                                </i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page