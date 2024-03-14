import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <>
            <nav className='flex gap-3 items-center justify-between py-4'>
                <div className='flex gap-3 items-center'>
                    <Image src="/logo.png" width={48} height={48} className='rounded-full' alt='Cico Blog Logo' />
                    <h2 className='text-xl font-semibold'>Cico's Blog</h2>
                </div>
                <ul className='flex gap-6 items-center'>
                    <li><Link href="/" className="hover:text-blue-500 transition-all">Home</Link></li>
                    <li><Link href="/posts" className="hover:text-blue-500 transition-all">Posts</Link></li>
                    <li><Link href="/about" className="hover:text-blue-500 transition-all">About</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-500 transition-all">Contact</Link></li>
                </ul>

                <div className='flex gap-4 items-center'>
                    <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all">
                        Login
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