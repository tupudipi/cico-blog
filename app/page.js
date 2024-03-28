import Link from 'next/link';
import Image from 'next/image';
import Menu from './components/menu/Menu';
import CategoryList from './components/categoryList/CategoryList';
import CardList from './components/CardList/CardList';

export default function Home(props) {
  const { page } = props;
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
          <div className='flex flex-col md:flex-row gap-4 py-4'>
            <div>
              <Image src="/cico.png" alt="Cico the cat" width={900} height={900} />
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <h2 className='text-xl font-semibold'>Meow there! 🐾 Join me on a whisker-twitching adventure through my world of feline musings!</h2>
              <p>Embark on a feline odyssey with yours truly! From the joy of morning cuddles to savoring the finest pâté, and reveling in the thrill of laser pointers, this is my cozy corner of the web. Explore the tales and the intriguing world behind these green eyes. Dive in and discover the purr-sonalities that make me the one and only Cico! 🐾✨</p>
              <Link href="/about">
                <button className='w-full md:w-fit rounded-full border-2 py-1 px-4 border-gray-400 text-gray-400 hover:border-gray-700 shadow-md hover:text-gray-700 hover:shadow-lg transition-all'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <CategoryList />

        <div id="content" className='flex flex-col md:flex-row md:justify-between sm:gap-12 md:gap-32'>
          <CardList page={page} />
          <Menu />
        </div>

      </main>
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  const page = query && query.page ? Number(query.page) : 1;
  return { page };
};
