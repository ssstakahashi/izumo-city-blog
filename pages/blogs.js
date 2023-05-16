import Layout from "../components/Layout";
import Link from "next/link";
import { getAllPostsData } from "../lib/blogs";
// import Post from "../components/Post";

export default function BlogPage({ sortBlogData }) {
    return (
        <Layout title="Blog page">
            <div className="flex flex-col items-center p-8 w-full">
                <div className="m-8">
                    <h4 className="text-3xl">ブログ一覧</h4>
                </div>
                <div>
                    <ul className="flex flex-col gap-4">
                        {sortBlogData &&
                            sortBlogData.map((blog, index) => (
                                <div key={index} className="hover:bg-gray-200">
                                    <span>{index + 1}</span>
                                    {" . "}
                                    <Link href={`/blogs/${blog.blogId}`}>
                                        <span className="cursor-pointer text-black">{blog.title}</span>
                                    </Link>
                                </div>
                            ))}
                    </ul>
                </div>

                <Link href="/">
                    <div className="flex cursor-pointer mt-12">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                        <span>Homeに戻る</span>
                    </div>
                </Link>
            </div>
        </Layout>
    );
}
export async function getStaticProps() {
    const sortBlogData = await getAllPostsData();
    return {
        props: { sortBlogData },
        revalidate: 3,
    };
}
