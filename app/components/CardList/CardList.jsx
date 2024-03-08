import Image from 'next/image';
import Link from 'next/link';

const CardList = () => {
  return (
    <div id="posts" className='sm:w-full md:w-2/3 flex flex-col justify-between'>
      <div id="post-list">
        <h2 className='text-2xl font-semibold mt-6 mb-3'>Latest Posts</h2>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <div>
              <Image src="/cico.png" alt="Cico the cat" width={300} height={300} />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p>08-03-2024</p>
                <p className='text-yellow-600'>Culture</p>
              </div>
              <h3 className='text-xl font-semibold'>The Joy of Morning Cuddles</h3>
              <p>There's nothing like the warmth of a morning cuddle to start the day off right. Join me as I share my purr-sonal tips for the perfect wake-up routine!</p>
              <Link href="/posts/morning-cuddles" className='underline hover:text-blue-500 transition-all w-fit'>Read More</Link>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            <div>
              <Image src="/cico.png" alt="Cico the cat" width={300} height={300} />
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between'>
                <p>08-03-2024</p>
                <p className='text-yellow-600'>Culture</p>
              </div>
              <h3 className='text-xl font-semibold'>The Art of Fish Pâté</h3>
              <p>From the finest tuna to the most succulent salmon, I've got the lowdown on the best fish pâté in town. Join me as I share my top tips for the purr-fect pâté!</p>
              <Link href="/posts/fish-pate" className='underline hover:text-blue-500 transition-all w-fit'>Read More</Link>
            </div>
          </div>
        </div>
      </div>

      <div id='page-buttons' className='flex justify-between mt-4'>
        <button className='border-2 py-1 px-4 border-blue-400 text-white hover:blue-red-700 shadow-md  hover:shadow-lg transition-all bg-blue-400 bg-opacity-75 hover:bg-opacity-100'>Previous</button>
        <button className='border-2 py-1 px-4 border-blue-400 text-white hover:blue-red-700 shadow-md  hover:shadow-lg transition-all bg-blue-400 bg-opacity-75 hover:bg-opacity-100'>Next</button>
      </div>

    </div>
  )
}

export default CardList