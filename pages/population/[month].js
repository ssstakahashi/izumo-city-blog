import Layout from "../../components/Layout";
import Link from "next/link";
import { getPopulationData, getPopulationIds } from "../../lib/population";
// import Post from "../components/Post";

export default function Population({ populationData, monthData }) {
  return (
    <Layout title="population">
        <div>
            <div className="flex flex-row justify-around mt-12">
                {monthData.map(x=>(
                    <div key={x}>
                        <Link href={`/population/${x}/`}>
                            <h4 className="mx-2">{x}</h4>
                        </Link>
                    </div>
                ))}
            </div>
            <hr className="h-3 w-full"/>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>地域</th>
                            <th>世帯数</th>
                            <th>男</th>
                            <th>女</th>
                            <th>総数</th>
                            <th>調査日</th>
                            <th>世帯当たり</th>
                            <th>増減</th>
                        </tr>
                    </thead>
                    <tbody>
                        {populationData &&
                            populationData.map((row,index) => (
                            <tr key={row.id}>
                                <td className="px-2 py-1">{row.aria}</td>
                                <td className="cursor-pointer text-black hover:bg-gray-600">
                                    {row.family}
                                </td>
                                <td className="px-2 py-1">{row.man}</td>
                                <td className="px-2 py-1">{row.woman}</td>
                                <td className="px-2 py-1">{row.total}</td>
                                <td className="px-2 py-1">{row.date}</td>
                                <td className="px-2 py-1">{row.perFamily}</td>
                                <td className="px-2 py-1">{row.div}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link href="/">
                <div className="flex cursor-pointer mt-12">
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
                    <span>戻る</span>
                </div>
            </Link>
        </div>
    </Layout>
    );
}

export async function getStaticPaths() {
    const paths = await getPopulationIds()
    console.log(paths)
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const { object, month } = await getPopulationData();
    const populationData =  await object[params.month] 
        return {
            props: { populationData, monthData: month },
            revalidate: 10,
        };
}