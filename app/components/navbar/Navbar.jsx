'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const page = usePathname();
    console.log(page)

    return (
        <>
            <nav className='flex gap-3 items-center justify-between py-4'>
                <div className='flex gap-3 items-center'>
                    <Image src="/logo.png" width={48} height={48} className='rounded-full' alt='Cico Blog Logo' />
                    <h2 className='text-xl font-semibold'>Cico's Blog</h2>
                </div>
                <ul className='flex gap-6 items-center'>
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
                </ul>

                <div className='flex gap-4 items-center'>
                    <Link href="/login">
                        <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all">Login</span>
                    </Link>
                    <i className="w-[22px] h-[22px] mx-3 text-gray-800 cursor-pointer hover:text-black hover:shadow-md transition-all md:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </div>
            </nav>
        </>
    )
}

export default Navbar