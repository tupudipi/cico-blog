import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav className='flex gap-3 items-center justify-between py-4'>
                <div className='flex gap-3 items-center'>
                    <Image src="/logo.png" width={48} height={48} className='rounded-full' />
                    <h2 className='text-xl font-semibold'>Cico's Blog</h2>
                </div>
                <ul className='flex gap-3 items-center'>
                    <li><Link href="/" className="hover:text-blue-500 transition-all">Home</Link></li>
                    <li><Link href="/about" className="hover:text-blue-500 transition-all">About</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-500 transition-all">Contact</Link></li>
                    <li><Link href="/login" className="hover:text-blue-500 transition-all">Login</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar