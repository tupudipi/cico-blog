import Link from 'next/link';

const Menu = () => {
  return (
    <div id="aside" className='flex flex-col gap-8 md:w-1/3'>

    <div id="archive">
      <h2 className='text-2xl font-semibold mt-6 mb-3'>Blog Archive</h2>
      <select className='border-2 rounded-md py-1 px-2 w-full'>
        <option value="">Select Month</option>
        <option value="2022-01">January 2022</option>
        <option value="2021-12">December 2021</option>
        <option value="2021-11">November 2021</option>
      </select>
    </div>

    <div id="popular">
      <h2 className='text-2xl font-semibold mt-6 mb-3'>Popular Posts</h2>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between text-gray-500'>
            <p>Cico Motan</p>
            <p>08-03-2024</p>

          </div>
          <Link href="/posts/morning-cuddles" className='w-fit hover:text-blue-700 transition-all'>The Joy of Morning Cuddles</Link>
          <p className='w-fit rounded-full py-1 px-4 bg-yellow-500 text-white opacity-75'>Culture</p>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-between text-gray-500'>
            <p>Cico Motan</p>
            <p>08-03-2024</p>

          </div>
          <Link href="/posts/fish-pate" className='w-fit hover:text-blue-700 transition-all'>The Art of Fish Pâté</Link>
          <p className='w-fit rounded-full py-1 px-4 bg-yellow-500 text-white opacity-75'>Culture</p>
        </div>
      </div>
    </div>

    <div id="selected">
      <h2 className='text-2xl font-semibold mt-6 mb-3'>Selected Posts</h2>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between text-gray-500'>
            <p>Cico Motan</p>
            <p>08-03-2024</p>

          </div>
          <Link href="/posts/morning-cuddles" className='w-fit hover:text-blue-700 transition-all'>The Thrill of Laser Pointers</Link>
          <p className='w-fit rounded-full py-1 px-4 bg-yellow-500 text-white opacity-75'>Culture</p>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-between text-gray-500'>
            <p>Cico Motan</p>
            <p>08-03-2024</p>

          </div>
          <Link href="/posts/fish-pate" className='w-fit hover:text-blue-700 transition-all'>The Best Napping Spots</Link>
          <p className='w-fit rounded-full py-1 px-4 bg-yellow-500 text-white opacity-75'>Culture</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Menu