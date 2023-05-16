import Layout from "../components/Layout";
import Link from "next/link";
import { getPopulationData } from "../lib/population";
// import Post from "../components/Post";

export default function PopulationPage({ populationData }) {
    return (
        <Layout title="election">
            <div className="flex flex-col items-center content-between p-8">
                <h4 className="text-3xl m-8">出雲市 人口推移</h4>
                <table className="">
                    <thead>
                        <tr>
                            <th>年代</th>
                            <th>総数</th>
                            <th>15歳未満</th>
                            <th>15歳超65歳未満</th>
                            <th>65歳以上</th>
                        </tr>
                    </thead>
                    <tbody>
                        {populationData &&
                            populationData.map((row, index) => (
                                // <Link href={`/elections/${row.year}`} key={index}>
                                <tr key={index} className="hover:bg-gray-200">
                                    <td className="px-8 py-4 text-center">{row.yearValue}</td>
                                    <td className="px-8 py-4 text-right">{row.total}</td>
                                    <td className="px-8 py-4 text-right">{row.under15}</td>
                                    <td className="px-8 py-4 text-right">{row.between15to65}</td>
                                    <td className="px-8 py-4 text-right">{row.orver65}</td>
                                </tr>
                                // </Link>
                            ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}
export async function getStaticProps() {
    const populationData = await getPopulationData();
    return {
        props: { populationData },
        revalidate: 3,
    };
}
