import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { electionResult } from "../../components/data/election/result";
import Image from "next/image";
import Link from "next/link";

export default function ResultPage({ id, result}) {
    console.log(result)
    const router = useRouter();

    if (router.isFallback || !result) {
        return <div>Loading...</div>;
    }

    return (
    <Layout title={id}>
        <div>
            <div className="flex flex-row justify-around mt-12">
                {["2021","2017","2013"].map(x=>(
                    <div key={x}>
                        <Link href={`/elections/${x}/`}>
                            <h4 >{x}</h4>
                        </Link>
                    </div>
                ))}
            </div>
            <hr className="h-3 w-full"/>
            <table className={"mt-12"}>
                <thead>
                <tr>
                    <th >{}<br/>{}</th>
                    <th >{}<br/>{}</th>
                    <th >写真</th>
                    <th >名前</th>
                    <th  className={""}>年齢<br/>(歳)</th>
                    <th  className={""}>票数<br/>(票)</th>
                </tr>
                </thead>
                <tbody>
                {result.map((row, index) => (
                    <tr key={row.number} className="h-24">
                        <td className="w-8 border-t text-center p-2">{row.number}</td>
                        <td className="w-8 border-t text-center p-2">{row.winning}</td>
                        <td className="w-20 border-t pt-2 text-center">
                            {row.photoData ?
                                <Image
                                // src={row.photoData}
                                src={'/images/members/01_今岡 真治_R.jpg'}
                                width={80}
                                height={90}
                                className="m-auto"
                            />
                            :
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                className="w-10 h-10 m-auto"
                            >
                                <path 
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>

                            }
                        </td>
                        
                        <td className={"w-40 border-t text-left p-2"}>{row.name}<br/><small>{row.kana}</small></td>
                        <td className="w-20  border-t text-center">{row.age}</td>
                        <td className="w-20  border-t text-right">{row.vote}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await ["2021","2017","2013"].map((year) => {
        return {
            params: {
                year: String(year),
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    
    const result = await electionResult[params.year].sort((a,b) => a.number-b.number)
    return {
        props: { id: params.year, result }
    }
}

