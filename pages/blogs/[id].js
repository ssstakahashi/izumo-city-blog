import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/blogs";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRecoilValue } from "recoil";
import { userState } from "../../components/store/user";

export default function BlogPage({ post }) {
    const router = useRouter();
    const user = useRecoilValue(userState);
    console.log(user.email);
    const stringLength = post.body1.length + post.body2.length + post.body3.length + post.body4.length + post.body5.length;

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
                    {post.photoUrl ? (
                        <div className="relative w-full h-96">
                            <Image src={post.photoUrl} layout="fill" objectFit="cover" />
                        </div>
                    ) : (
                        <div className="relative w-full h-48">
                            <Image src={post.photoUrl1} layout="fill" objectFit="contain" />
                        </div>
                    )}
                    <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8" id={post.subTitle1}>
                        <p className="text-xl text-left">{`${post.subTitle1}`}</p>
                    </div>

                    <div className="px-12 text-lg leading-loose">
                        <p className="mb-8">{post.body1}</p>
                    </div>

                    {post.photoUrl && post.photoUrl1 && (
                        <div className="relative w-full h-48 mb-8">
                            <Image src={post.photoUrl1} layout="fill" objectFit="contain" />
                        </div>
                    )}

                    {post.subTitle2 && (
                        <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8 " id={post.subTitle2}>
                            <p className="text-xl text-left">{`${post.subTitle2}`}</p>
                        </div>
                    )}
                    {post.body2 && (
                        <div className="px-12 text-lg leading-loose">
                            <p className="mb-8">{post.body2}</p>
                        </div>
                    )}
                    {post.photoUrl2 && (
                        <div className="relative w-full h-48 mb-8">
                            <Image src={post.photoUrl2} layout="fill" objectFit="contain" />
                        </div>
                    )}

                    {post.subTitle3 && (
                        <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8 " id={post.subTitle3}>
                            <p className="text-xl text-left">{`${post.subTitle3}`}</p>
                        </div>
                    )}
                    {post.body3 && (
                        <div className="px-12 text-lg leading-loose">
                            <p className="mb-8">{post.body3}</p>
                        </div>
                    )}

                    {post.photoUrl3 && (
                        <div className="relative w-full h-48 mb-8">
                            <Image src={post.photoUrl3} layout="fill" objectFit="contain" />
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
                <div className="flex flex-col justify-start items-center w-1/5 my-8 gap-8">
                    <div className="flex flex-col justify-around items-start bg-white w-full h-48 rounded border-t-8 border-gray-500 px-4 py-2">
                        <div className="flex flex-row justify-between items-between w-full">
                            <div className="px-1">
                                <p>投稿者</p>
                            </div>
                            <div>
                                <p>{post.userName}</p>
                            </div>
                        </div>
                        <hr className="w-full border-b-1" />

                        <div className="flex flex-row justify-between items-between w-full">
                            <div className="px-1">
                                <p>公開</p>
                            </div>
                            <div>{post.date}</div>
                        </div>
                        <hr className="w-full border-b-1" />
                        <div className="flex flex-row justify-between items-between w-full">
                            <div className="px-1">
                                <p>更新</p>
                            </div>
                            <div>{post.date}</div>
                        </div>
                        <hr className="w-full border-b-1" />
                        <div className="flex flex-row justify-between items-between w-full">
                            <div className="px-1">
                                <p>文字数</p>
                            </div>
                            <div>{`${Number(stringLength).toLocaleString()} 字`}</div>
                        </div>

                        {/* <div>コメント</div> */}
                    </div>

                    <div className="flex justify-center items-start bg-white w-full rounded border-t-8 border-gray-500">
                        <ul className="p-4 w-full">
                            <p className="text-xl py-2">目次</p>
                            <AnchorLink href={`#${post.subTitle1}`}>
                                <li className="py-2 truncate">・{post.subTitle1}</li>
                            </AnchorLink>
                            {post.subTitle2 && (
                                <AnchorLink href={`#${post.subTitle2}`}>
                                    <li className="py-2 truncate">・{post.subTitle2}</li>
                                </AnchorLink>
                            )}
                            {post.subTitle3 && (
                                <AnchorLink href={`#${post.subTitle3}`}>
                                    <li className="py-2 truncate">・{post.subTitle3}</li>
                                </AnchorLink>
                            )}
                            {post.subTitle4 && (
                                <AnchorLink href={`#${post.subTitle4}`}>
                                    <li className="py-2 truncate">・{post.subTitle4}</li>
                                </AnchorLink>
                            )}
                            {post.subTitle5 && (
                                <AnchorLink href={`#${post.subTitle5}`}>
                                    <li className="py-2 truncate">・{post.subTitle5}</li>
                                </AnchorLink>
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center bg-white w-full h-96 rounded border-t-8 border-gray-500">投稿者</div>
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
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
        revalidate: 3,
    };
}
