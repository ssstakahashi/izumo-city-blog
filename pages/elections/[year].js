import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { getElectionResultData, getElectionResultIds, getElectionResultValueIds } from "../../lib/election";

export default function ResultPage({ result, resultIds }) {
    const router = useRouter();
    const { year } = router.query;

    if (router.isFallback || !result) {
        return <div>Loading...</div>;
    }

    return (
        <Layout title={"election result"}>
            <div className="flex flex-col items-center">
                <div className="flex flex-row justify-around mt-12">
                    {resultIds.map((x) => (
                        <div key={x} className={year === x ? "text-center w-36 border-b-2 border-blue-600" : "text-center w-36 border-none"}>
                            <Link href={`/elections/${x}/`}>
                                <h4>{x}</h4>
                            </Link>
                        </div>
                    ))}
                </div>
                <hr className="h-3 w-full" />
                <table className={"mt-12"}>
                    <thead>
                        <tr>
                            <th>
                                {}
                                <br />
                                {}
                            </th>
                            <th>
                                {}
                                <br />
                                {}
                            </th>
                            <th>写真</th>
                            <th>名前</th>
                            <th className={""}>年齢(歳)</th>
                            <th className={""}>票数(票)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((row, index) => (
                            <tr key={row.resultId} className="h-24">
                                <td className="m-2 w-8 border-t text-center p-4">{index + 1}</td>
                                <td className="m-2 w-8 border-t text-center p-4">{row.win}</td>
                                <td className="m-2 w-20 border-t pt-2 text-center">
                                    {row.photoName ? (
                                        <Image
                                            // src={row.photoData}
                                            src={`/images/members/${row.photoName}`}
                                            width={80}
                                            height={90}
                                            className="m-auto"
                                        />
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            className="w-10 h-10 m-auto"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                            />
                                        </svg>
                                    )}
                                </td>

                                <td className={"m-2 w-40 border-t text-left p-4"}>
                                    {row.fullName}
                                    <br />
                                    <small>{row.fullNameKana}</small>
                                </td>
                                <td className="m-2 w-20  border-t text-center p-4">{row.age}</td>
                                <td className="m-2 w-20  border-t text-right p-4">{row.votes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getElectionResultIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log(params);
    const result = await getElectionResultData(params.year);
    const resultIds = await getElectionResultValueIds();
    console.log(result);
    return {
        props: { result, resultIds },
        revalidate: 100,
    };
}
