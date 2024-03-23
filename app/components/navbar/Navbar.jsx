'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const page = usePathname();
    const { data: session, status } = useSession();
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    console.log(isClient , status, session?.user.email, process.env.NEXT_PUBLIC_ADMIN_MAIL);

    return (
        <>
            <nav className='flex gap-3 items-center justify-between py-4'>
                <Link href="/">
                    <div className='flex gap-3 items-center'>
                        <Image src="/logo.png" width={48} height={48} className='rounded-full' alt='Cico Blog Logo' />
                        <h2 className='text-xl font-semibold'>Cico's Blog</h2>
                    </div>
                </Link>

                <ul className='hidden md:flex gap-6 items-center '>
                    <li>
                        <Link href="/">
                            <span className={page === "/" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts">
                            <span className={page === "/posts" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>Posts</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className={page === "/about" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className={page === "/contact" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>Contact</span>
                        </Link>
                    </li>

                    {isClient && status == "authenticated" && session?.user.email === process.env.NEXT_PUBLIC_ADMIN_MAIL && (
                        <li>
                            <Link href="/write">
                                <span className={page === "/write" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>Write</span>
                            </Link>
                        </li>
                    )}
                </ul>

                <div className='flex gap-4 items-center'>
                    {session ? (
                        <div className='flex gap-2'>
                            <Image src={session.user.image} width={40} height={40} className='rounded-full' alt='User Image' />
                            <span className="bg-violet-400 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full transition-all cursor-pointer" onClick={() => signOut()}>Logout</span>
                        </div>

                    ) : (
                        <Link href="/login">
                            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all">Login</span>
                        </Link>
                    )}
                    <button onClick={() => setIsOpen(!isOpen)} className="flex items-center w-[24px] h-[24px] mx-3 text-gray-800 cursor-pointer hover:text-black transition-all md:hidden z-50  peer-checked:hidden">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='h-5' />
                    </button>

                    <ul className={`absolute top-0 left-0 w-screen h-screen ${isOpen ? 'flex' : 'hidden'} flex-col justify-center items-center backdrop-blur-md bg-white/60 gap-8 peer-checked:flex md:hidden z-40`}>
                        <li>
                            <Link href="/" className='text-2xl' onClick={() => setIsOpen(false)}>
                                <span className={page === "/" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/posts" className='text-2xl' onClick={() => setIsOpen(false)}>
                                <span className={page === "/posts" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>Posts</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className='text-2xl' onClick={() => setIsOpen(false)}>
                                <span className={page === "/about" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className='text-2xl' onClick={() => setIsOpen(false)}>
                                <span className={page === "/contact" ? "font-semibold hover:text-blue-500 transition-all" : "hover:text-blue-500 transition-all"}>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar