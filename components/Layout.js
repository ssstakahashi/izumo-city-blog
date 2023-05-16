import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "Izumo-city-blog" }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className="sticky bg-gray-800">
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

            <main className="font-fancy bg-gray-50">{children}</main>
            <footer className={"bg-black w-full h-32 flex justify-center items-center border-t"}></footer>
        </div>
    );
}
