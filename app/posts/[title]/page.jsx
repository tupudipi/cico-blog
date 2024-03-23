import Image from "next/image";
import Comments from "@/app/components/comments/Comments";
import Menu from "@/app/components/menu/Menu";
import prisma from "@/app/utils/connect";

async function getData(slug) {
    const post = await prisma.post.update({
        where: { slug },
        data: { views: { increment: 1 } },
        include: { user: true },
    });
    return post;
}

export default async function SinglePage({ params }) {
    const post = await getData(params.title);

    return (
        <main>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-5">
                <div className="flex-1">
                    <h2 className="text-3xl mb-8 md:mb-12 font-semibold text-center md:text-left">{post.title}</h2>
                    <div className="flex flex-row items-center gap-4">
                        <div className='w-[50px] h-[50px] relative z-10'>
                            <Image src='/coding.png' alt='Post Author User Image' fill className='rounded-full object-cover' />
                        </div>
                        <div className="flex flex-col gap-1 text-gray-500 items-center md:items-start">
                            <span className="font-medium">{post.user.name}</span>
                            <span >{post.createdAt.toLocaleString()}</span>
                        </div>
                    </div>
                </div>

                <div className="grow h-[350px] min-w-[350px] relative">
                    <Image src='/coding.png' alt='Post Image' fill className='object-cover' />
                </div>
            </div>

            <div id='content' className="flex flex-col gap-12">
                <div id='post'>
                    <p className="font-light leading-7 mb-5 text-lg text-justify w-full">
                        {post.desc}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-2/3">
                        <Comments />
                    </div>
                    <Menu />
                </div>
            </div>
        </main>
    )
}