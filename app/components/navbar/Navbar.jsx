import Link  from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <nav className='flex gap-3 items-center justify-between'>
        <div>
            <Image src="/logo.png" width={48} height={48} className='rounded-full'/>
        </div>
        <ul className='flex gap-3'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar