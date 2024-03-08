import Image from "next/image";
import Comments from "../../components/comments/Comments";
import Menu from "../../components/menu/Menu";

// const getData = async (slug) => {
//     const res = await fetch(`http://localhost:3000/api/posts/${slug}`, 
//     {
//         cache: "no-store",
//     })
//     if (!res.ok) {
//         throw new Error("Network response was not ok")
//     }

//     return res.json();
// }

const SinglePage = async () => {
    // const { slug } = params;

    // const data = await getData(slug);

    return (
        <main>
            <div>
                <div>
                    <h2>Post title</h2>
                    <div>
                        <div className=''>
                            <Image src='' alt='' fill className='' />
                        </div>
                        <div >
                            <span >Post Author User Name</span>
                            <span >08.03.2024</span>
                        </div>
                    </div>
                </div>

                <div>
                    <Image src='' alt='' fill className='' />
                </div>

            </div>

            <div className="flex gap-32">
                <div >
                    <div>
                        <p>Post content Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo nulla cupiditate harum obcaecati iusto porro. Sequi veritatis culpa porro maxime recusandae quod est! Tempora corrupti exercitationem error sapiente molestiae.
                            Quis rem asperiores nam laboriosam corporis assumenda, quas odio nesciunt consequatur fugiat aut nulla laborum quibusdam temporibus. Animi non explicabo quasi doloremque exercitationem, ipsum, nam incidunt voluptate nesciunt, similique error?
                        </p>
                    </div>

                    <div >
                        <Comments />
                    </div>
                </div>

                <Menu />
            </div>
        </main>
    )
}

export default SinglePage