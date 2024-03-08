import Image from 'next/image';
import CardList from '../components/CardList/CardList';
import Menu from '../components/menu/Menu';

const page = () => {
    return (
        <main >
            <div className='flex flex-col items-center'>
                <div className='relative w-full md:w-3/4 h-[350px]'>
                    {/* <Image src={`/${cat}.png`} alt={`${cat} blog`} fill className={styles.img} /> */}
                    <Image src='/coding.png' alt='Category Blog' fill className='object-cover object-center' />
                </div>

                {/* <h1 className={`${styles.title} ${styles[cat]}`}>{cat} Blog</h1> */}
                <h1 className='text-white py-[10px] px-[5px] bg-yellow-400 text-2xl font-bold text-center self-stretch'>Category Blog</h1>
            </div>

            <div className='flex flex-col md:flex-row gap-12 md:gap-32'>
                {/* <CardList page={page} cat={cat} /> */}
                <CardList />
                <Menu />
            </div>
        </main>
    )
}

export default page