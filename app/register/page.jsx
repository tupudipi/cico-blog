import Link from 'next/link';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const page = () => {
    return (
        <div className="grow mt-8 flex flex-col items-center h-screen md:h-auto gap-4">
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold leading-10'>Register a new account</h1>
                <p>Or <Link href="/login" className='hover:text-blue-500 transition-all underline hover:no-underline'>log in to an existing account</Link></p>
            </div>

            <div className='p-5 rounded-lg shadow-lg w-full md:max-w-md'>
                <form action="" method="post" className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="user">Username</label>
                        <input type="text" name="user" id="user" className='py-2 px-3 border-2 rounded-md' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className='py-2 px-3 border-2 rounded-md' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className='py-2 px-3 border-2 rounded-md' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password-confirm">Confirm Password</label>
                        <input type="password" name="password-confirm" id="password-confirm" className='py-2 px-3 border-2 rounded-md' />
                    </div>

                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all'>Register</button>
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
                        <div className='rounded-md border-2 shadow-sm hover:shadow grow flex p-2 items-center text-gray-600 hover:text-black transition-all '>
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