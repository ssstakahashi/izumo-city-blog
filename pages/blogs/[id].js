import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/blogs";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRecoilValue } from "recoil";
import { userState } from "../../components/store/user";
import { formatDate } from "../../lib/datetime";

export default function BlogPage({ post }) {
    const router = useRouter();
    const user = useRecoilValue(userState);
    const stringLength =
        post.body1.length + post.body2.length + post.body3.length + post.body4.length + post.body5.length;
    const tags = post.tags.split(",");
    const exchange = (text) => {
        return text.replace(/\n/g, "<br>");
    };
    let refs = [
        {
            title: post.refTitle1,
            body: post.refBody1,
        },
        {
            title: post.refTitle2,
            body: post.refBody2,
        },
        {
            title: post.refTitle3,
            body: post.refBody3,
        },
        {
            title: post.refTitle4,
            body: post.refBody4,
        },
        {
            title: post.refTitle5,
            body: post.refBody5,
        },
    ];
    refs = refs.filter((ref) => ref.body);
    if (router.isFallback || !post) {
        return <div>Loading...</div>;
    }
    return (
        <Layout title={post.title}>
            <div className="flex justify-center w-screen">
                <div className="bg-white flex flex-col items-center rounded w-full md:m-8 md:w-1/2">
                    <div className="pt-12 px-4 md:px-12 md:pt-24 md:pb-12 ">
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

                    {post.body1 && (
                        <div className="px-6 md:px-12 text-lg leading-loose">
                            <p className="mb-8" dangerouslySetInnerHTML={{ __html: exchange(post.body1) }} />
                        </div>
                    )}
                    {post.photoUrl && post.photoUrl1 && (
                        <div className="relative w-full h-48 mb-8">
                            <Image src={post.photoUrl1} layout="fill" objectFit="contain" />
                        </div>
                    )}

                    {post.subTitle2 && (
                        <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8" id={post.subTitle2}>
                            <p className="text-xl text-left">{`${post.subTitle2}`}</p>
                        </div>
                    )}
                    {post.body2 && (
                        <div className="px-6 md:px-12 text-lg leading-loose">
                            <p className="mb-8" dangerouslySetInnerHTML={{ __html: exchange(post.body2) }} />
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
                        <div className="px-6 md:px-12 text-lg leading-loose">
                            <p className="mb-8" dangerouslySetInnerHTML={{ __html: exchange(post.body3) }} />
                        </div>
                    )}

                    {post.photoUrl3 && (
                        <div className="relative w-full h-48 mb-8">
                            <Image src={post.photoUrl3} layout="fill" objectFit="contain" />
                        </div>
                    )}
                    {post.subTitle4 && (
                        <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8 " id={post.subTitle4}>
                            <p className="text-xl text-left">{`${post.subTitle4}`}</p>
                        </div>
                    )}
                    {post.body4 && (
                        <div className="px-6 md:px-12 text-lg leading-loose">
                            <p className="mb-8" dangerouslySetInnerHTML={{ __html: exchange(post.body4) }} />
                        </div>
                    )}
                    {post.photoUrl4 && (
                        <div className="relative w-full h-48 mb-8">
                            <Image src={post.photoUrl4} layout="fill" objectFit="contain" />
                        </div>
                    )}

                    {post.subTitle5 && (
                        <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8 " id={post.subTitle4}>
                            <p className="text-xl text-left">{`${post.subTitle5}`}</p>
                        </div>
                    )}
                    {post.body5 && (
                        <div className="px-6 md:px-12 text-lg leading-loose">
                            <p className="mb-8" dangerouslySetInnerHTML={{ __html: exchange(post.body5) }} />
                        </div>
                    )}
                    {post.photoUrl5 && (
                        <div className="relative w-full h-48 mb-8">
                            <Image src={post.photoUrl5} layout="fill" objectFit="contain" />
                        </div>
                    )}
                    {/* {post.body6 && (
                        <div className="px-12 text-lg leading-loose">
                            <p className="mb-8">{post.body6}</p>
                        </div>
                    )}
                    {post.body7 && (
                        <div className="px-12 text-lg leading-loose">
                            <p className="mb-8">{post.body7}</p>
                        </div>
                    )}
                    {post.body8 && (
                        <div className="px-12 text-lg leading-loose">
                            <p className="mb-8">{post.body8}</p>
                        </div>
                    )}
                    {post.body9 && (
                        <div className="px-12 text-lg leading-loose">
                            <p className="mb-8">{post.body9}</p>
                        </div>
                    )}
                    {post.body10 && (
                        <div className="px-12 text-lg leading-loose">
                            <p className="mb-8">{post.body10}</p>
                        </div>
                    )} */}

                    {refs[0].title && (
                        <>
                            <div className="flex flex-start w-11/12 border-b-4 px-4 mt-12 mb-8" id="reference">
                                <p className="text-xl text-left">参考</p>
                            </div>

                            <div className="flex flex-col items-start w-full px-6 md:px-12 text-base leading-loose">
                                {refs.map((ref, index) => (
                                    <div className="inline-block w-full my-1" key={index}>
                                        <p className="text-base truncate">{`${index + 1}. ${ref.title}`}</p>
                                        <a target="_blank" href={ref.body}>
                                            <p className="text-base truncate">{`　${ref.body}`}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <Link href="/blogs">
                        <div className="flex cursor-pointer my-12">
                            <svg
                                className="w-6 h-6 mr-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                                />
                            </svg>
                            <span>ブログ一覧に戻る</span>
                        </div>
                    </Link>
                </div>
                <div className="hidden md:flex flex-col justify-start items-center w-1/5 my-8 gap-8">
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
                            <div>
                                <p className="text-base">{formatDate(post.date)}</p>
                            </div>
                        </div>
                        <hr className="w-full border-b-1" />
                        <div className="flex flex-row justify-between items-between w-full">
                            <div className="px-1">
                                <p>更新</p>
                            </div>
                            <div>
                                <p className="text-base">{formatDate(post.update)}</p>
                            </div>
                        </div>
                        <hr className="w-full border-b-1" />
                        <div className="flex flex-row justify-between items-between w-full">
                            <div className="px-1">
                                <p>タグ</p>
                            </div>
                            <div>
                                {tags.length > 0 &&
                                    tags.map((tag) => (
                                        <p className="inline-block ml-1 px-1 border-0 rounded-md bg-gray-300" key={tag}>
                                            {tag}
                                        </p>
                                    ))}
                            </div>
                        </div>
                        <hr className="w-full border-b-1" />
                        <div className="flex flex-row justify-between items-between w-full">
                            <div className="px-1">
                                <p>文字数</p>
                            </div>
                            <div>{`${Number(stringLength).toLocaleString()} 字`}</div>
                        </div>
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
                            {refs[0].title && (
                                <AnchorLink href={`#reference`}>
                                    <li className="py-2 truncate">・参考</li>
                                </AnchorLink>
                            )}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center bg-white w-full h-96 rounded border-t-8 border-gray-500">
                        投稿者
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: true,
    };
}
export async function getStaticProps({ params }) {
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
        revalidate: 3600 * 1,
    };
}
