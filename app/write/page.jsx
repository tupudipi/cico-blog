'use client'
import Image from 'next/image';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import "react-quill/dist/quill.bubble.css";
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(
    () => import('react-quill'),
    { ssr: false }
);

const WritePage = () => {
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status == "unauthenticated" || !session || session.user.email !== process.env.NEXT_PUBLIC_ADMIN_MAIL) {
        router.push('/');
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: '',
                slug: slugify(title),
                catSlug: catSlug
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${slugify(title)}`);
        }
    };

    if (session && session.user.email == process.env.NEXT_PUBLIC_ADMIN_MAIL) {
        return (
            <div className="grow mt-8 flex flex-col">
                <h1 className="text-4xl font-semibold mb-6">Write new post</h1>
                <select
                    className="h-10 border border-gray-500 rounded bg-gray-100 text-gray-900 shadow-md px-2 cursor-pointer bg-right-center text-base"
                    onChange={(e) => setCatSlug(e.target.value)}
                >
                    <option>Pick a post category</option>
                    <option value="style">style</option>
                    <option value="leisure">leisure</option>
                    <option value="food">food</option>
                    <option value="culture">culture</option>
                    <option value="travel">travel</option>
                    <option value="coding">coding</option>
                </select>
                <input
                    type="text"
                    placeholder="Title"
                    className="p-12 text-4xl border-none outline-none bg-transparent text-gray-900"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="flex gap-5 h-[700px] relative">
                    <input
                        type="file"
                        id="image"
                        style={{ display: 'none' }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button className="w-9 h-9 rounded-full bg-transparent border border-gray-900 flex items-center justify-center cursor-pointer" >
                        <label htmlFor="image" style={{ cursor: 'pointer' }}>
                            🖼️
                        </label>
                    </button>
                    <ReactQuill
                        className='w-full'
                        theme="bubble"
                        value={value}
                        onChange={setValue}
                        placeholder="Tell your story..."
                    />
                </div>
                <button className="mx-auto px-5 py-2.5 border-none bg-green-700 text-white cursor-pointer rounded-full text-base font-semibold transition-colors duration-300 w-1/3" onClick={handleSubmit}>
                    Publish
                </button>
            </div>
        )
    }

    if (!session || session.user.email !== process.env.NEXT_PUBLIC_ADMIN_MAIL) {
        return (
            <div className="grow mt-8">
            </div>
        );
    }
}

export default WritePage;