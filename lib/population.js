const spreadSheetUrl = process.env.NEXT_PUBLIC_SPREADSHEET_URL;
const sheetId = process.env.NEXT_PUBLIC_SPREADSHEET_SHEETID;
const sheetName = process.env.NEXT_PUBLIC_SPREADSHEET_SHEETNAME;
const apiKey = process.env.NEXT_PUBLIC_SPREADSHEET_API_KEY;

export async function getPopulationIds() {
    const res = await fetch(
        new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetName}?key=${apiKey}`)
    );
    const data = await res.json();
    const posts = data.values || [];
    posts.shift()
    const month = [ ...new Set( posts.map(x => x[6]) )];
    const monthData = month.map( x => {
        return {
            params: {
                month: String(x),
            },
        }
    })
    // console.log(monthData)
    return monthData;
}

export async function getPopulationData() {
    const res = await fetch(
        new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetName}?key=${apiKey}`)
    );
    const data = await res.json();
    const posts = data.values || [];
    posts.shift()
    const object = {};
    const month = [ ...new Set( posts.map(x => x[6]) )];
    month.forEach( y => {
        object[y] = [];
        posts.forEach(z =>{
            if ( y === z[6] ) {
                const obj = {
                    id: z[0],
                    aria: z[1],
                    family: z[2],
                    man: z[3],
                    woman: z[4],
                    total: z[5],
                    date: z[6],
                    perFamily: z[7],
                    div: z[8]
                }
                object[y].push(obj)
            }
        })
    });
    console.log(object)
    return { object, month };
}