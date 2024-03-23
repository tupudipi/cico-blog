import Link from 'next/link';
import prisma from '@/app/utils/connect';

async function getData() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        posts: true,
      },
    });

    const categoriesWithViews = categories.map(category => ({
      id: category.id,
      slug: category.slug,
      title: category.title,
      image: category.image,
      totalViews: category.posts.reduce((sum, post) => sum + post.views, 0),
    }));

    const sortedCategories = categoriesWithViews.sort((a, b) => b.totalViews - a.totalViews);

    return sortedCategories;
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}

export default async function CategoryList() {
  const categories = await getData();
  const categoryColors = {
    style: 'bg-blue-500',
    food: 'bg-red-500',
    travel: 'bg-green-500',
    culture: 'bg-yellow-500',
    coding: 'bg-purple-500',
    leisure: 'bg-pink-500',
};
const shadowColors = {
  style: 'hover:shadow-blue',
  food: 'hover:shadow-red',
  travel: 'hover:shadow-green',
  culture: 'hover:shadow-yellow',
  coding: 'hover:shadow-purple',
  leisure: 'hover:shadow-pink',
};

  return (
    <div id="categories">
      <h2 className='text-2xl font-semibold mt-6 mb-3'>Categories</h2>
      <div className='flex gap-4 w-full flex-wrap'>
        {categories.map(category => {
          const colorClass = categoryColors[category.slug.toLowerCase()];
          const hoverShadow = shadowColors[category.slug.toLowerCase()];
          return (
            <Link href={`/posts?cat=${category.slug}`} className='grow' key={category.id}>
              <button className={`w-full rounded-full py-1 px-4 ${colorClass} text-white opacity-75 hover:opacity-100 ${hoverShadow} transition-all capitalize`}>
                {category.title}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  )
}
