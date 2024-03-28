import Image from 'next/image';
import Link from 'next/link';
import prisma from '@/app/utils/connect';
import Pagination from '../pagination/Pagination';

const categoryColors = {
  style: 'text-blue-500',
  food: 'text-red-500',
  travel: 'text-green-500',
  culture: 'text-yellow-500',
  coding: 'text-purple-500',
  leisure: 'text-pink-500',
};

export default async function CardList({ page, cat }) {
  const POSTS_PER_PAGE = 2;

  page = Number(page);
  if (isNaN(page)) {
    page = 1;
  }

  const query = {
    take: POSTS_PER_PAGE,
    skip: (page - 1) * POSTS_PER_PAGE,
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  const [posts, count] = await prisma.$transaction([
    prisma.post.findMany(query),
    prisma.post.count({ where: query.where })
  ]);

  const hasPrev = POSTS_PER_PAGE * (Number(page) - 1) > 0;
  const hasNext = POSTS_PER_PAGE * Number(page) < count;


  return (
    <div id="posts" className='sm:w-full md:w-2/3 flex flex-col justify-between'>
      <div id="post-list">
        <h2 className='text-2xl font-semibold mt-6 mb-3'>Latest Posts</h2>
        <div className='flex flex-col gap-16'>
          {posts.map((post) => (
            <div key={post.id} className='flex flex-col md:flex-row gap-4 items-center'>
              <div>
                <Image src="/coding.png" alt="Post Image" width={300} height={300} />
              </div>
              <div className='flex flex-col gap-4 w-full'>
                <div className='flex justify-between w-full'>
                  <p>{post.createdAt.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                  <p className={categoryColors[post.catSlug]}>{post.catSlug.toUpperCase()}</p>
                </div>
                <h3 className='text-xl font-semibold'>{post.title}</h3>
                <p>{post.desc}</p>
                <Link href={`/posts/${post.slug}`} className='underline hover:text-blue-500 transition-all w-fit'>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev}/>
    </div>
  )
}
