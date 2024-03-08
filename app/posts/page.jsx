import Image from 'next/image';
import CardList from '../components/CardList/CardList';
import Menu from '../components/menu/Menu';

const page = () => {
    return (
        <main >
            <div >
                <div className='relative w:1/2 h-[350px]'>
                    {/* <Image src={`/${cat}.png`} alt={`${cat} blog`} fill className={styles.img} /> */}
                    <Image src='/coding.png' alt='Category Blog' fill className='object-cover object-center' />
                </div>

                {/* <h1 className={`${styles.title} ${styles[cat]}`}>{cat} Blog</h1> */}
                <h1 >Category Blog</h1>
            </div>

            <div className='flex gap-32'>
                {/* <CardList page={page} cat={cat} /> */}
                <CardList />
                <Menu />
            </div>
        </main>
    )
}

export default page