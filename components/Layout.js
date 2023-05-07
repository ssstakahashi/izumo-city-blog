import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title="HP by Next.js"}){
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className="bg-gray-800 w-screen">
                    <div className="flex items-center pl-8 h-14">
                        <div className="space-x-4">
                            <Link href="/">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Home
                                </a>
                            </Link>
                            <Link href="/blog-page">
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Blog
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex flex-1 justify-center items-center w-screen flex-col">
                {children}
            </main>
            <footer className={"w-full h-12 flex justify-center items-center border-t"}>
            </footer>
        </div>
    )
}