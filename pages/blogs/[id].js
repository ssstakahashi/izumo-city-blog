import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/blogs";
import Image from "next/image";

export default function BlogPage({ post }) {
    const router = useRouter();

    if (router.isFallback || !post) {
        return <div>Loading...</div>;
    }
    return (
        <Layout title={post.title}>
            <div className="flex justify-center">
                <div className="bg-white flex flex-col items-center m-8 w-1/2 rounded">
                    <div className="pt-24 pb-12">
                        <p className="mb-4 text-3xl font-bold">{post.title}</p>
                    </div>
                    <div className="relative w-full h-96">
                        <Image
                            // src={"/images/titles/chuttersnap-gDDas5_ALRw-unsplash.jpg"}
                            src={post.photoUrl1}
                            layout="fill"
                            // sizes="(max-width: 100px) , 640px)"
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8 ">
                        <p className="text-xl text-left">{`${post.subTitle1}`}</p>
                    </div>

                    <div className="px-8 text-lg leading-loose">
                        <p className="mb-12">{post.body1}</p>
                    </div>
                    {post.subTitle2 && (
                        <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8 ">
                            <p className="text-xl text-left">{`${post.subTitle2}`}</p>
                        </div>
                    )}
                    {post.body2 && (
                        <div className="px-8 text-lg leading-loose">
                            <p className="mb-12">{post.body2}</p>
                        </div>
                    )}
                    {post.subTitle3 && (
                        <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8 ">
                            <p className="text-xl text-left">{`${post.subTitle3}`}</p>
                        </div>
                    )}
                    {post.body3 && (
                        <div className="px-8 text-lg leading-loose">
                            <p className="mb-12">{post.body3}</p>
                        </div>
                    )}

                    <div></div>
                    <Link href="/blogs">
                        <div className="flex cursor-pointer my-12">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                            <span>ブログ一覧に戻る</span>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col justify-start items-center w-1/5 my-8 text-5xl gap-8">
                    <div className="flex justify-center items-center bg-white w-full h-96 rounded border-t-8 border-gray-500">
                        <div>工事中</div>
                    </div>

                    <div className="flex justify-center items-center bg-white w-full h-96 rounded border-t-8 border-gray-500">工事中</div>
                    <div className="flex justify-center items-center bg-white w-full h-96 rounded border-t-8 border-gray-500">工事中</div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    //const { post: post } = await getPostData(params.id);
    console.log(params);
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
        revalidate: 3,
    };
}
