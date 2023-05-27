import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/blogs";

const Image13 = ({ href, src, alt, desc }) => {
    return (
        <Link href={href}>
            <div className="flex flex-row justify-start items-center w-full md:flex-col md:justify-center md:items-center">
                <div className="relative w-40 h-28 mx-2 my-1 md:w-64 md:h-52">
                    <Image src={src} layout="fill" objectFit="cover" className="rounded-sm hover:scale-125 duration-700" />
                    <p className={`absolute top-1/2 text-white text-2xl font-bold m-0 p-0 bg-black bg-opacity-40 w-full text-center`}>{alt}</p>
                </div>
                <div className={`flex flex-1 flex-col justify-start md:w-64`}>
                    <p className="text-gray-400">{desc.date || "0000-00-00"}</p>
                    <p className="md:truncate">{desc.title}</p>
                </div>
            </div>
        </Link>
    );
};
const Image14 = ({ src, alt, href = "", description = "" }) => {
    return (
        <Link href={href}>
            <div className="flex flex-row w-40 h-28 mx-2 my-1 lg:flex-col lg:justify-start lg:w-52 lg:h-56 lg:m-8 lg:gap-4 relative">
                <div>
                    <Image src={src} layout="fill" objectFit="cover" className="rounded-sm hover:scale-125 duration-700" />
                    <p className={`absolute top-1/2 text-white text-2xl font-bold m-0 p-0 bg-black bg-opacity-40 w-full text-center`}>{alt}</p>
                </div>

                <div className={`flex flex-col justify-start w-48`}>
                    <p className="text-gray-400">{"0000-00-00"}</p>
                    <p className="break-normal lg:truncate">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default function Home({ desc3 }) {
    const body = "flex flex-col justify-center w-screen";
    const newDiv = "flex flex-col items-center w-full";
    const mainDiv = "flex flex-col justify-center items-center w-full pb-8 md:p-8";

    const divTitleArea = "flex flex-col items-center w-full py-8 md:p-8 md:w-10/12 md:rounded-lg md:bg-white md:my-12";
    const divTitle = "text-center text-4xl mt-8";
    const divTitle2 = "text-center text-2xl mt-8";
    const divSubTitle = "text-gray-400 mb-8 mt-2 text-center";
    const blogArea3 = "flex flex-col items-start justify-start w-full md:flex-row md:justify-around md:items-center";
    const blogArea4 = "flex flex-col items-start justify-start w-full md:flex-row md:justify-around md:items-center";

    const bg = "bg-gray-100";
    const bg2 = "bg-white";

    return (
        <Layout>
            <div className="font-fancy">
                <div className={`${body}`}>
                    <div className={`${newDiv}`}>
                        <div className={`${divTitleArea}`}>
                            <div>
                                <h2 className={`${divTitle}`}>新着情報</h2>
                                <h5 className={`${divSubTitle}`}>NEWS</h5>
                            </div>

                            <div className={`${blogArea3}`}>
                                {desc3.map((desc) => (
                                    <div key={desc.blogId}>
                                        <Image13
                                            src="/images/titles/hansjorg-keller-p7av1ZhKGBQ-unsplash.jpg"
                                            desc={desc}
                                            href={`/blogs/${desc.blogId}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`${mainDiv} ${bg2}`}>
                        <div>
                            <h3 className={`${divTitle2}`}>人とお金の動き</h3>
                            <h5 className={`${divSubTitle}`}>movement of people and money</h5>
                        </div>

                        <div className={`${blogArea4}`}>
                            <Image14 src="/images/titles/chuttersnap-gDDas5_ALRw-unsplash.jpg" alt={"住民"} description={``} />
                            <Image14 src="/images/pg_Izumo_logo.png" alt={"借金"} description={``} />
                            <Image14 src="/images/pg_Izumo_logo.png" alt={"収入と支出"} description={``} />
                            <Image14 src="/images/pg_Izumo_logo.png" alt={"産業"} description={``} />
                        </div>
                    </div>

                    <div className={`${mainDiv} ${bg}`}>
                        <div>
                            <h3 className={`${divTitle2}`}>制度と仕組み</h3>
                            <h5 className={`${divSubTitle}`}>system and mechanism</h5>
                        </div>

                        <div className={`${blogArea4}`}>
                            <Image14
                                src="/images/titles/element5-digital-T9CXBZLUvic-unsplash.jpg"
                                alt={"選 挙"}
                                href={"/elections"}
                                description={"市長及び市議会議員選挙の結果のまとめ"}
                            />
                            <Image14 src="/images/titles/charles-postiaux-Oj1TVVfMmbU-unsplash.jpg" alt={"行 政"} />
                            <Image14 src="/images/titles/recha-oktaviani-h2aDKwigQeA-unsplash.jpg" alt={"税 金"} />
                            <Image14 src="/images/titles/hansjorg-keller-p7av1ZhKGBQ-unsplash.jpg" alt={"議 会"} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const sortBlogData = await getAllPostsData();
    const desc3 = sortBlogData.slice(0, 3);

    return {
        props: { desc3 },
        revalidate: 5,
    };
}
