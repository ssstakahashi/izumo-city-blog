import Layout from "../components/Layout";
import Link from "next/link";
import { getElectionData } from "../lib/election";
// import Post from "../components/Post";

export default function ElectionPage({ electionData }) {
    return (
        <Layout title="election">
            <div className="flex flex-col items-center content-between p-8">
                <h4 className="text-3xl m-8">出雲市 選挙</h4>
                <table className="">
                    <thead>
                        <tr>
                            <th></th>
                            <th>タイトル</th>
                            <th>有権者数</th>
                            <th>投票者数</th>
                            <th>投票率</th>
                        </tr>
                    </thead>
                    <tbody>
                        {electionData &&
                            electionData.map((row, index) => (
                                <Link href={`/elections/${row.year}`} key={index}>
                                    <tr className="hover:bg-gray-200">
                                        <td className="p-2 text-center">{index + 1}</td>
                                        <td className="p-4 text-left">{row.title}</td>
                                        <td className="p-4 text-right">{row.sumTotalVoters}</td>
                                        <td className="p-4 text-right">{row.sumVotes}</td>
                                        <td className="p-4 text-right">{row.sumVoteRate}</td>
                                    </tr>
                                </Link>
                            ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
export async function getStaticProps() {
    const electionData = await getElectionData();
    return {
        props: { electionData },
    };
}
