// import { PAGES_MANIFEST } from "next/dist/shared/lib/constants";
// import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const Image11 = ({ src, alt }) => {
    return (
        <div className="relative">
            <Image src={src} width={1400} height={2100} />
            <p>{alt}</p>
        </div>
    );
};
const Image13 = ({ src, alt }) => {
    return (
        <div className="m-8">
            <Image src={src} width={300} height={220} />
            <p>{alt}</p>
        </div>
    );
};
const Image14 = ({ src, alt, href = "" }) => {
    return (
        <Link href={href}>
            <div className="m-8 relative">
                <Image src={src} width={200} height={140} className="rounded-sm" />
                <p className={`absolute top-1/2 text-white text-2xl font-bold m-0 p-0 bg-black bg-opacity-40 w-full text-center font-fancy`}>{alt}</p>
            </div>
        </Link>
    );
};
const Image22 = ({ src, alt }) => {
    return (
        <div className="m-8 relative">
            <Image src={src} width={400} height={300} className="rounded-sm" />
            <p className={`absolute top-2/3 text-white text-3xl font-bold m-0 p-0 bg-black bg-opacity-40 w-full text-center`}>{alt}</p>
        </div>
    );
};

export default function Home() {
    const height = "h-36";
    const width = "w-full";
    const bg = "bg-gray-100";
    const bg2 = "bg-white";
    const flexCol = "flex flex-col justify-center items-center";
    const flexRow = "flex flex-col lg:flex-row justify-around items-center";
    const mergin8 = "m-8";
    const mergin2 = "m-2";
    const padding = "p-8";

    return (
        <div className="font-fancy w-full bg-gray-50">
            {/* <div className="h-full fixed z-0">
                <div className={`${flexRow}`}><Image11 src="/images/titles/studio-dekorasyon-vngzm4P2BTs-unsplash.jpg" /></div>
            </div> */}
            <div className="flex h-full sticky z-50 flex flex-col justify-center w-full">
                <div className={`${width} ${flexCol} ${padding}`}>
                    <div className={`${flexCol} ${mergin2} w-4/5 rounded-lg`}>
                        <div>
                            {/* <h1 className="text-center text-6x">出雲市ブログ</h1> */}
                            {/* <div className={`${flexRow}`}>
                                <Image11 src="/images/pg_Izumo_logo.png" />
                            </div> */}
                        </div>
                    </div>
                    <div className={`${flexCol} ${bg2} ${mergin2} ${padding} w-4/5 rounded`}>
                        <h2 className="text-center text-4xl">新着情報</h2>
                        <div className={`${flexRow}`}>
                            <Image13 src="/images/pg_Izumo_logo.png" />
                            <Image13 src="/images/pg_Izumo_logo.png" />
                            <Image13 src="/images/pg_Izumo_logo.png" />
                        </div>
                    </div>
                    <div className={`${flexCol} ${bg2} ${mergin2} ${padding} w-4/5 rounded`}>
                        <h3 className="text-center text-2xl">人気の記事</h3>
                        <div className={`${flexRow}`}>
                            <Image13 src="/images/pg_Izumo_logo.png" />
                            <Image13 src="/images/pg_Izumo_logo.png" />
                            <Image13 src="/images/pg_Izumo_logo.png" />
                        </div>
                    </div>
                </div>

                <div className={`${bg2} ${flexCol} ${padding}`}>
                    <h3 className="text-center text-2xl">人とお金の動き</h3>
                    <div className={`${flexRow}`}>
                        <Image14 src="/images/titles/chuttersnap-gDDas5_ALRw-unsplash.jpg" alt={"住民"} />
                        <Image14 src="/images/pg_Izumo_logo.png" alt={"借金"} />
                        <Image14 src="/images/pg_Izumo_logo.png" alt={"収入と支出"} />
                        <Image14 src="/images/pg_Izumo_logo.png" alt={"産業"} />
                    </div>
                </div>
                <div className={`${bg} ${flexCol} ${padding}`}>
                    <h3 className="text-center text-2xl">制度と仕組み</h3>
                    <div className={`${flexRow}`}>
                        <Image14 src="/images/titles/element5-digital-T9CXBZLUvic-unsplash.jpg" alt={"選 挙"} href={"/elections"} />
                        <Image14 src="/images/titles/charles-postiaux-Oj1TVVfMmbU-unsplash.jpg" alt={"行 政"} />
                        <Image14 src="/images/titles/recha-oktaviani-h2aDKwigQeA-unsplash.jpg" alt={"税 金"} />
                        <Image14 src="/images/titles/hansjorg-keller-p7av1ZhKGBQ-unsplash.jpg" alt={"議 会"} />
                    </div>
                </div>
                <div className={`${height} ${flexCol} ${padding}`}>
                    <h3 className="text-center text-2xl"></h3>
                </div>
                <div className={`${bg} ${flexCol} ${padding}`}>
                    <h3 className="text-center text-2xl">カテゴリー 一覧</h3>
                    <h5 className="text-gray-400">CATEGORY</h5>
                    <div className={`${flexCol}`}>
                        <div className={`${flexRow}`}>
                            <Image22 src="/images/titles/luis-wittenberg-IfO880US8CQ-unsplash.jpg" alt={"暮らし"} />
                            <Image22 src="/images/titles/rezvani-IIDZ77VDVQE-unsplash.jpg" alt={"仕 事"} />
                        </div>
                        <div className={`${flexRow}`}>
                            <Image22 src="/images/titles/v2osk-1Z2niiBPg5A-unsplash.jpg" alt={"自 然"} />
                            <Image22 src="/images/titles/alexander-mils-lCPhGxs7pww-unsplash.jpg" alt={"お 金"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
