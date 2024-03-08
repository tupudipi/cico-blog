import Link from 'next/link';

const CategoryList = () => {
  return (
    <div id="categories">
    <h2 className='text-2xl font-semibold mt-6 mb-3'>Categories</h2>
    <div className='flex gap-4 w-full flex-wrap'>
      <Link href="/posts?cat=style" className='grow'>
        <button className='w-full rounded-full py-1 px-4 bg-blue-500 text-white opacity-75 hover:opacity-100 hover:shadow-blue transition-all'>Style</button>
      </Link>
      <Link href="/posts?cat=food" className='grow'>
        <button className='w-full rounded-full py-1 px-4 bg-red-500 text-white opacity-75 hover:opacity-100 hover:shadow-red transition-all'>Food</button>
      </Link>
      <Link href="/posts?cat=travel" className='grow'>
        <button className='w-full rounded-full py-1 px-4 bg-green-500 text-white opacity-75 hover:opacity-100 hover:shadow-green transition-all'>Travel</button>
      </Link>
      <Link href="/posts?cat=culture" className='grow'>
        <button className='w-full rounded-full py-1 px-4 bg-yellow-500 text-white opacity-75 hover:opacity-100 hover:shadow-yellow transition-all'>Culture</button>
      </Link>
      <Link href="/posts?cat=coding" className='grow'>
        <button className='w-full rounded-full py-1 px-4 bg-purple-500 text-white opacity-75 hover:opacity-100 hover:shadow-purple transition-all'>Coding</button>
      </Link>
      <Link href="/posts?cat=leisure" className='grow'>
        <button className='w-full rounded-full py-1 px-4 bg-pink-500 text-white opacity-75 hover:opacity-100 hover:shadow-pink transition-all'>Leisure</button>
      </Link>
    </div>
  </div>
  )
}

export default CategoryList