import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Layout({ children, title = "Izumo-city-blog" }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        console.log("クリクリ");
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <div className="absolute top-2 left-2 z-50 md:hidden" onClick={toggleMenu}>
                    {!isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 text-gray-100"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    )}
                </div>
                {isMenuOpen && (
                    <div className="absolute duration-700 w-1/2 md:hidden z-10">
                        <nav className="flex flex-col items-center bg-gray-800 bg-opacity-90 text-gray-300 rounded">
                            <Link href="/">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Home</a>
                            </Link>
                            <Link href="/blogs">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Blog</a>
                            </Link>
                            <Link href="/elections">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">選挙結果</a>
                            </Link>
                            <Link href="/population">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">人口</a>
                            </Link>
                        </nav>
                    </div>
                )}
                <nav className="hidden md:block sticky bg-gray-800">
                    <div className="flex items-center pl-8 h-14">
                        <div className="space-x-4">
                            <Link href="/">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Home</a>
                            </Link>
                            <Link href="/blogs">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Blog</a>
                            </Link>
                            <Link href="/elections">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">選挙結果</a>
                            </Link>
                            <Link href="/population">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">人口</a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="font-fancy bg-gray-100 z-0">{children}</main>
            <footer
                className={"bg-black w-full flex justify-center items-center border-t font-fancy text-gray-100 p-8"}
            >
                <div className={"flex flex-col justify-center items-center w-full"}>
                    <div className={"flex justify-center items-center w-full gap-4"}>
                        <Image src={"/images/Izumo_cloud_icon.png"} width={36} height={24} />
                        <p className="text-white text-4xl">イ ズ ブ ロ</p>
                        <Image src={"/images/Izumo_cloud_icon.png"} width={36} height={24} />
                    </div>

                    <div className={"flex flex-row justify-around items-start w-full gap-10 px-12"}>
                        <div className="hidden md:inline-block p-8">
                            <Link href="/">
                                <p>ホーム</p>
                            </Link>
                            <Link href="/blogs">
                                <p>ブログ</p>
                            </Link>
                            <Link href={"/elections"}>
                                <p>選挙結果</p>
                            </Link>
                            <Link href={"/population"}>
                                <p>人口</p>
                            </Link>
                        </div>
                        <div className="p-8">
                            運営者
                            <div className="flex flex-row justify-around">
                                <div>
                                    <a
                                        href="https://nerdcave.com/tailwind-cheat-sheet"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className="w-6 h-6 mr-3 text-blue-500"
                                            stroke="currentColor"
                                            fill="currentColor"
                                            viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://nerdcave.com/tailwind-cheat-sheet"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className="w-6 h-6 mr-3 text-blue-700"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://nerdcave.com/tailwind-cheat-sheet"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg
                                            className="w-6 h-6 mr-3 text-gray-500"
                                            fill="currentColor"
                                            viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"flex justify-center items-center w-full"}>
                        <p className="text-gray-500 text-center text-base">©イ ズ ブ ロ</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
