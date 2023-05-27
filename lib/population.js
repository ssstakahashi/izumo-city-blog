const spreadSheetUrl = process.env.NEXT_PUBLIC_SPREADSHEET_URL;
const sheetId = process.env.NEXT_PUBLIC_SPREADSHEET_SHEETID;
const sheetIndex = process.env.NEXT_PUBLIC_INDEX;
const sheetPopulation = process.env.NEXT_PUBLIC_POPULATION;
const apiKey = process.env.NEXT_PUBLIC_SPREADSHEET_API_KEY;

// export async function getPopulationIds() {
//     const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetPopulation}?key=${apiKey}`));
//     const data = await res.json();
//     const posts = data.values || [];
//     posts.shift();
//     const month = [...new Set(posts.map((x) => x[6]))];
//     const monthData = month.map((x) => {
//         return {
//             params: {
//                 month: String(x),
//             },
//         };
//     });
//     // console.log(monthData)
//     return monthData;
// }

export async function getPopulationData() {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetPopulation}?key=${apiKey}`));
    const data = await res.json();
    const population = data.values || [];
    const titles = population.shift();

    const _population = population.map((x, index) => {
        return {
            [titles[0]]: x[0] || "",
            [titles[1]]: x[1] || "",
            [titles[2]]: x[2] || "",
            [titles[3]]: x[3] || "",
            [titles[4]]: x[4] || "",
            [titles[5]]: x[5] || "",
            [titles[6]]: x[6] || "",
            [titles[7]]: x[7] || "",
            [titles[8]]: x[8] || "",
        };
    });
    return _population;
}
