import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grow">
      <main className='flex flex-col gap-8'>
        <div id="header">
          <h1 className="text-3xl font-semibold">Hi, I'm Cico, welcome to my blog!</h1>
          <p>
            Discover what I have to say about fish pâté, laser pointers and the best napping spots.
          </p>
        </div>

        <div id="intro">
          <div className='flex gap-4 py-4'>
            <div>
              <Image src="/cico.png" alt="Cico the cat" width={900} height={900} />
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <h2 className='text-xl font-semibold'>Meow there! 🐾 Join me on a whisker-twitching adventure through my world of feline musings!</h2>
              <p>Embark on a feline odyssey with yours truly! From the joy of morning cuddles to savoring the finest pâté, and reveling in the thrill of laser pointers, this is my cozy corner of the web. Explore the tales and the intriguing world behind these green eyes. Dive in and discover the purr-sonalities that make me the one and only Cico! 🐾✨</p>
              <Link href="/about">
                <button className='rounded-full border-2 py-1 px-4 border-gray-400 text-gray-400 hover:border-gray-700 shadow-md hover:text-gray-700 hover:shadow-lg transition-all'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div id="categories">
          <h2 className='text-2xl font-semibold mt-6 mb-3'>Categories</h2>
          <div className='flex gap-4 w-full'>
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


        <div id="content" className='flex justify-between gap-32'>

          <div id="posts" className='w-2/3 flex flex-col justify-between'>
            <div id="post-list">
              <h2 className='text-2xl font-semibold mt-6 mb-3'>Latest Posts</h2>
              <div className='flex flex-col gap-16'>
                <div className='flex gap-4 items-center'>
                  <div>
                    <Image src="/cico.png" alt="Cico the cat" width={300} height={300} />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                      <p>08-03-2024</p>
                      <p>Culture</p>
                    </div>
                    <h3 className='text-xl font-semibold'>The Joy of Morning Cuddles</h3>
                    <p>There's nothing like the warmth of a morning cuddle to start the day off right. Join me as I share my purr-sonal tips for the perfect wake-up routine!</p>
                    <Link href="/posts/morning-cuddles" className='underline hover:text-blue-500 transition-all w-fit'>Read More</Link>
                  </div>
                </div>
                <div className='flex gap-4 items-center'>
                  <div>
                    <Image src="/cico.png" alt="Cico the cat" width={300} height={300} />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                      <p>08-03-2024</p>
                      <p>Culture</p>
                    </div>
                    <h3 className='text-xl font-semibold'>The Art of Fish Pâté</h3>
                    <p>From the finest tuna to the most succulent salmon, I've got the lowdown on the best fish pâté in town. Join me as I share my top tips for the purr-fect pâté!</p>
                    <Link href="/posts/fish-pate" className='underline hover:text-blue-500 transition-all w-fit'>Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div id='page-buttons' className='flex justify-between'>
              <button className='border-2 py-1 px-4 border-blue-400 text-white hover:blue-red-700 shadow-md  hover:shadow-lg transition-all bg-blue-400 bg-opacity-75 hover:bg-opacity-100'>Previous</button>
              <button className='border-2 py-1 px-4 border-blue-400 text-white hover:blue-red-700 shadow-md  hover:shadow-lg transition-all bg-blue-400 bg-opacity-75 hover:bg-opacity-100'>Next</button>
            </div>
          </div>

          <div id="aside" className='flex flex-col gap-8 w-1/3'>

            <div id="archive">
              <h2 className='text-2xl font-semibold mt-6 mb-3'>Blog Archive</h2>
              <select className='border-2 rounded-md py-1 px-2'>
                <option value="">Select Month</option>
                <option value="2022-01">January 2022</option>
                <option value="2021-12">December 2021</option>
                <option value="2021-11">November 2021</option>
                {/* Add more options for other months */}
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
                  <p>Culture</p>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between text-gray-500'>
                    <p>Cico Motan</p>
                    <p>08-03-2024</p>

                  </div>
                  <Link href="/posts/fish-pate" className='w-fit hover:text-blue-700 transition-all'>The Art of Fish Pâté</Link>
                  <p>Culture</p>
                </div>
                {/* Add more divs for other popular posts */}
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
                  <p>Culture</p>
                </div>

                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between text-gray-500'>
                    <p>Cico Motan</p>
                    <p>08-03-2024</p>

                  </div>
                  <Link href="/posts/fish-pate" className='w-fit hover:text-blue-700 transition-all'>The Best Napping Spots</Link>
                  <p>Culture</p>
                </div>
                {/* Add more divs for other popular posts */}
              </div>
            </div>



          </div>
        </div>

      </main>
    </div>
  );
}
