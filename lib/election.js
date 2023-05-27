const spreadSheetUrl = process.env.NEXT_PUBLIC_SPREADSHEET_URL;
const sheetId = process.env.NEXT_PUBLIC_SPREADSHEET_SHEETID;
const sheetIndex = process.env.NEXT_PUBLIC_INDEX;
const sheetElection = process.env.NEXT_PUBLIC_ELECTION;
const sheetResult = process.env.NEXT_PUBLIC_RESULT;
const apiKey = process.env.NEXT_PUBLIC_SPREADSHEET_API_KEY;

export async function getElectionData() {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetElection}?key=${apiKey}`));
    const data = await res.json();
    const electionData = data.values.filter(String) || [];
    electionData.shift();
    return electionData.map((x) => {
        return {
            electionId: x[0] || "",
            use: x[1] || "",
            city: x[2] || "",
            title: x[3] || "",
            year: x[4] || "",
            electionDay: x[5] || "",
            maleTotalVoters: x[6] || "",
            femaleTotalVoters: x[7] || "",
            sumTotalVoters: x[8] || "", // 有権者総数
            maleVotes: x[9] || "",
            femaleVotes: x[10] || "",
            sumVotes: x[11] || "", // 投票総数
            maleVoteRate: x[12] || "",
            femaleVoteRate: x[13] || "",
            sumVoteRate: x[14] || "",
        };
    });
}

export async function getElectionResultIds() {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetIndex}?key=${apiKey}`));
    const data = await res.json();
    const indexData = data.values || [];
    indexData.shift();
    let _data = [];
    indexData.forEach((x) => {
        if (x[0] !== "") {
            _data.push({
                params: {
                    year: String(x[0]),
                },
            });
        }
    });
    return _data;
}
export async function getElectionResultValueIds() {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetIndex}?key=${apiKey}`));
    const data = await res.json();
    const indexData = data.values || [];
    indexData.shift();
    let _data = [];
    indexData.forEach((x) => {
        if (x[0] !== "") {
            _data.push(String(x[0]));
        }
    });
    return _data;
}

export async function getElectionResultData(year) {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetResult}?key=${apiKey}`));
    const data = await res.json();
    const result = data.values || [];
    result.shift();
    return result
        .filter((x) => x[2] === year)
        .map((x) => {
            return {
                resultId: x[0] || "",
                use: x[1] || "",
                year: x[2] || "",
                electionId: x[3] || "",
                win: x[4] || "",
                fullName: x[5] || "",
                fullNameKana: x[6] || "",
                party: x[7] || "",
                ageValue: x[8] || "",
                age: x[9] || "",
                sex: x[10] || "",
                incumbent: x[11] || "",
                job: x[12] || "",
                votesValue: x[13] || "",
                votes: x[14] || "",
                totalVotesRate: x[15] || "",
                votesRate: x[16] || "",
                photoName: x[17] || "",
                photoUrl: x[18] || "",
            };
        });
}
