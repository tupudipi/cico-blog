import Image from 'next/image';
import CardList from '../components/CardList/CardList';
import Menu from '../components/menu/Menu';
import CategoryList from '../components/categoryList/CategoryList';

const page = ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const cat = searchParams?.cat || 'default'; // Set 'default' as the default category

    const categoryColors = {
        style: 'bg-blue-400',
        food: 'bg-red-400',
        travel: 'bg-green-400',
        culture: 'bg-yellow-400',
        coding: 'bg-purple-400',
        leisure: 'bg-pink-400',
    };

    const colorClass = categoryColors[cat.toLowerCase()] || 'bg-indigo-400'; // Changed color to 'bg-indigo-400'

    return (
        <main >
            <div className='flex flex-col items-center'>
                <div className='relative w-full md:w-3/4 h-[350px] shadow-lg'>
                    <Image src={cat !== 'default' ? `/${cat}.png` : '/cico.png'} alt={`${cat} blog`} fill className='object-cover object-center' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                </div>

                <h1 className={`relative z-10 text-white py-[10px] px-[5px] ${colorClass} text-2xl font-bold text-center self-stretch capitalize`}>{cat !== 'default' ? `${cat} Blog` : 'Blog'}</h1>
            </div>

            <div className='flex flex-col md:flex-row gap-12 md:gap-32'>
                {cat !== 'default' ? <CardList page={page} cat={cat} /> : <CardList />}
                <Menu />
            </div>
            <CategoryList />
        </main>
    )
}

export default page