import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'
import Link from 'next/link';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="flex justify-between mt-10 mb-2">
            <div className="w-1/2">
                <div className="flex gap-4 items-center">
                    <Image src="/logo.png" alt="Cico Blog Logo" width={50} height={50} className="rounded-full" />
                    <h2>Cico Blog</h2>
                </div>
                <p>Paws and whiskers, thanks for wandering through my digital realm. Stay curious, stay cozy! 🐾✨</p>
                <div className="flex gap-4 items-center">
                    <Link href="mailto:tupudipi@gmail.com">
                        <i className="mx-3 text-gray-600 hover:text-black hover:shadow-md transition-all">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/alexandru-stefan-tudor">
                        <i className="mx-3 text-gray-600 hover:text-black hover:shadow-md transition-all">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </i>
                    </Link>
                    <Link href="https://github.com/tupudipi">
                        <i className="mx-3 text-gray-600 hover:text-black hover:shadow-md transition-all">
                            <FontAwesomeIcon icon={faGithub} />
                        </i>
                    </Link>
                </div>
            </div>

            <div className="flex gap-6 w-1/2 justify-around">
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold mb-2">Links</span>
                    <Link href="/" className="hover:text-blue-500 transition-all">Homepage</Link>
                    <Link href="/posts" className="hover:text-blue-500 transition-all">Blog</Link>
                    <Link href="/about" className="hover:text-blue-500 transition-all">About</Link>
                    <Link href="/contact" className="hover:text-blue-500 transition-all">Contact</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold mb-2">Tags</span>
                    <Link href="/posts?cat=style" className="hover:text-blue-500 transition-all">Style</Link>
                    <Link href="/posts?cat=culture" className="hover:text-yellow-500 transition-all">Culture</Link>
                    <Link href="/posts?cat=leisure" className="hover:text-pink-500 transition-all">Leisure</Link>
                    <Link href="/posts?cat=food" className="hover:text-red-500 transition-all">Food</Link>
                    <Link href="/posts?cat=coding" className="hover:text-purple-500 transition-all">Coding</Link>
                    <Link href="/posts?cat=travel" className="hover:text-green-500 transition-all">Travel</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer