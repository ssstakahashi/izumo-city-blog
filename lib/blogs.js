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
        // blogId	use	date	title	subTitle1	subTitle2	subTitle3	subTitle4	subTitle5	body1	body2	body3	body4	body5	photoUrl	photoUrl1	photoUrl2	photoUrl3	photoUrl4	photoUrl5	tags	createAt	createUser	userName
        return {
            [titles[0]]: x[0] || "", // blogId
            [titles[1]]: x[1] || "", // use
            [titles[2]]: x[2] || "", // date
            [titles[3]]: x[3] || "", // title
            [titles[4]]: x[4] || "", // subTitle1
            [titles[5]]: x[5] || "", // subTitle2
            [titles[6]]: x[6] || "", // subTitle3
            [titles[7]]: x[7] || "", // subTitle4
            [titles[8]]: x[8] || "", // subTitle5
            [titles[9]]: x[9] || "", // body1
            [titles[10]]: x[10] || "", // body2
            [titles[11]]: x[11] || "", // body3
            [titles[12]]: x[12] || "", // body4
            [titles[13]]: x[13] || "", // body5
            [titles[14]]: x[14] || "", // photoUrl
            [titles[15]]: x[15] || "", // photoUrl1
            [titles[16]]: x[16] || "", // photoUrl2
            [titles[17]]: x[17] || "", // photoUrl3
            [titles[18]]: x[18] || "", // photoUrl4
            [titles[19]]: x[19] || "", // photoUrl5
            [titles[20]]: x[20] || "", // tags
            [titles[21]]: x[21] || "", // createAt
            [titles[22]]: x[22] || "", // createUser
            [titles[23]]: x[23] || "", // userName
        };
    });

    const sortBlogData = blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
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
    const findData = data.values;
    const titles = findData.shift();
    const x = findData.find((x) => x[0] === id);

    const postData = {
        [titles[0]]: x[0] || "", // blogId
        [titles[1]]: x[1] || "", // use
        [titles[2]]: x[2] || "", // date
        [titles[3]]: x[3] || "", // title
        [titles[4]]: x[4] || "", // subTitle1
        [titles[5]]: x[5] || "", // subTitle2
        [titles[6]]: x[6] || "", // subTitle3
        [titles[7]]: x[7] || "", // subTitle4
        [titles[8]]: x[8] || "", // subTitle5
        [titles[9]]: x[9] || "", // body1
        [titles[10]]: x[10] || "", // body2
        [titles[11]]: x[11] || "", // body3
        [titles[12]]: x[12] || "", // body4
        [titles[13]]: x[13] || "", // body5
        [titles[14]]: x[14] || "", // photoUrl
        [titles[15]]: x[15] || "", // photoUrl1
        [titles[16]]: x[16] || "", // photoUrl2
        [titles[17]]: x[17] || "", // photoUrl3
        [titles[18]]: x[18] || "", // photoUrl4
        [titles[19]]: x[19] || "", // photoUrl5
        [titles[20]]: x[20] || "", // tags
        [titles[21]]: x[21] || "", // createAt
        [titles[22]]: x[22] || "", // createUser
        [titles[23]]: x[23] || "", // userName
    };
    return postData;
}
