const spreadSheetUrl = process.env.NEXT_PUBLIC_SPREADSHEET_URL;
const sheetId = process.env.NEXT_PUBLIC_SPREADSHEET_SHEETID;
const sheetIndex = process.env.NEXT_PUBLIC_INDEX;
const sheetBlog = process.env.NEXT_PUBLIC_BLOG;
const apiKey = process.env.NEXT_PUBLIC_SPREADSHEET_API_KEY;

export async function getAllPostsData() {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetBlog}?key=${apiKey}`));
    const data = await res.json();
    const _blogData = data.values;
    const titles = _blogData.shift();
    const blogData = _blogData.map((x) => {
        return {
            [titles[0]]: x[0] || "", // blogId
            [titles[1]]: x[1] || "", // use
            [titles[2]]: x[2] || "", // date
            [titles[3]]: x[3] || "", // dateValue
            [titles[4]]: x[4] || "", // update
            [titles[5]]: x[5] || "", // updateValue
            [titles[6]]: x[6] || "", // title
            [titles[7]]: x[7] || "", // subTitle1
            [titles[8]]: x[8] || "", // subTitle2
            [titles[9]]: x[9] || "", //     subTitle3
            [titles[10]]: x[10] || "", //   subTitle4
            [titles[11]]: x[11] || "", //  subTitle5
            [titles[12]]: x[12] || "", //   body1
            [titles[13]]: x[13] || "", //  body2
            [titles[14]]: x[14] || "", //  body3
            [titles[15]]: x[15] || "", //   body4
            [titles[16]]: x[16] || "", //  body5
            [titles[17]]: x[17] || "",
            [titles[18]]: x[18] || "",
            [titles[19]]: x[19] || "",
            [titles[20]]: x[20] || "",
            [titles[21]]: x[21] || "",
            [titles[22]]: x[22] || "",
            [titles[23]]: x[23] || "",
            [titles[24]]: x[24] || "",
            [titles[25]]: x[25] || "",
            [titles[26]]: x[26] || "",
            [titles[27]]: x[27] || "",
            [titles[28]]: x[28] || "",
            [titles[29]]: x[29] || "",
            [titles[30]]: x[30] || "",
            [titles[31]]: x[31] || "",
            [titles[32]]: x[32] || "",
            [titles[33]]: x[33] || "",
            [titles[34]]: x[34] || "",
            [titles[35]]: x[35] || "",
            [titles[36]]: x[36] || "",
            [titles[37]]: x[37] || "",
            [titles[38]]: x[38] || "",
            [titles[39]]: x[39] || "",
            [titles[40]]: x[40] || "",
            [titles[41]]: x[41] || "",
            // [titles[42]]: x[42] || "",
        };
    });

    const sortBlogData = blogData.sort((a, b) => b.updateValue - a.updateValue || b.dateValue - a.dateValue);
    // console.log(sortBlogData);
    return sortBlogData;
}

export async function getAllPostIds() {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetIndex}?key=${apiKey}`));
    const data = await res.json();
    const indexData = data.values || [];
    indexData.shift();
    let _data = [];
    indexData.forEach((x) => {
        if (x[3] !== "") {
            // console.log(x[3]);
            _data.push({
                params: {
                    id: String(x[3]),
                },
            });
        }
    });
    return _data;
}

export async function getPostData(id) {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetBlog}?key=${apiKey}`));
    const data = await res.json();
    const findData = await data.values;
    const titles = await findData.shift();
    console.log(id);
    const x = await findData.find((x) => {
        console.log(x[0], id);
        return x[0] === id;
    });
    console.log(x);

    const postData = {
        [titles[0]]: x[0] || "", // blogId
        [titles[1]]: x[1] || "", // use
        [titles[2]]: x[2] || "", // date
        [titles[3]]: x[3] || "", // dateValue
        [titles[4]]: x[4] || "", // update
        [titles[5]]: x[5] || "", // updateValue
        [titles[6]]: x[6] || "", // title
        [titles[7]]: x[7] || "", // subTitle1
        [titles[8]]: x[8] || "", // subTitle2
        [titles[9]]: x[9] || "", //     subTitle3
        [titles[10]]: x[10] || "", //   subTitle4
        [titles[11]]: x[11] || "", //  subTitle5
        [titles[12]]: x[12] || "", //   body1
        [titles[13]]: x[13] || "", //  body2
        [titles[14]]: x[14] || "", //  body3
        [titles[15]]: x[15] || "", //   body4
        [titles[16]]: x[16] || "", //  body5
        [titles[17]]: x[17] || "",
        [titles[18]]: x[18] || "",
        [titles[19]]: x[19] || "",
        [titles[20]]: x[20] || "",
        [titles[21]]: x[21] || "",
        [titles[22]]: x[22] || "",
        [titles[23]]: x[23] || "",
        [titles[24]]: x[24] || "",
        [titles[25]]: x[25] || "",
        [titles[26]]: x[26] || "",
        [titles[27]]: x[27] || "",
        [titles[28]]: x[28] || "",
        [titles[29]]: x[29] || "",
        [titles[30]]: x[30] || "",
        [titles[31]]: x[31] || "",
        [titles[32]]: x[32] || "",
        [titles[33]]: x[33] || "",
        [titles[34]]: x[34] || "",
        [titles[35]]: x[35] || "",
        [titles[36]]: x[36] || "",
        [titles[37]]: x[37] || "",
        [titles[38]]: x[38] || "",
        [titles[39]]: x[39] || "",
        [titles[40]]: x[40] || "",
        [titles[41]]: x[41] || "",
        // [titles[42]]: x[42] || "",
    };
    console.log(postData);
    return postData;
}
