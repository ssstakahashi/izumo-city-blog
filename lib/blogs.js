const spreadSheetUrl = process.env.NEXT_PUBLIC_SPREADSHEET_URL;
const sheetId = process.env.NEXT_PUBLIC_SPREADSHEET_SHEETID;
const sheetIndex = process.env.NEXT_PUBLIC_INDEX;
const sheetBlog = process.env.NEXT_PUBLIC_BLOG;
const apiKey = process.env.NEXT_PUBLIC_SPREADSHEET_API_KEY;

export async function getAllPostsData() {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetBlog}?key=${apiKey}`));
    const data = await res.json();
    const blogData = data.values.map((x) => {
        return {
            blogId: x[0] || "",
            use: x[1] || "",
            date: x[2] || "",
            title: x[3] || "",
            subTitle1: x[4] || "",
            subTitle2: x[5] || "",
            subTitle3: x[6] || "",
            subTitle4: x[7] || "",
            subTitle5: x[8] || "",
            body1: x[9] || "",
            body2: x[10] || "",
            body3: x[11] || "",
            body4: x[12] || "",
            body5: x[13] || "",
            photoUrl1: x[14] || "",
            photoUrl2: x[15] || "",
            photoUrl3: x[16] || "",
            photoUrl4: x[17] || "",
            photoUrl5: x[18] || "",
            createAt: x[19] || "",
        };
    });

    const sortBlogData = blogData.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortBlogData;
}

export async function getAllPostIds() {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetIndex}?key=${apiKey}`));
    const data = await res.json();
    const indexData = data.values || [];
    // console.log(indexData);
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
    console.log(_data);
    return _data;
}

export async function getPostData(id) {
    const res = await fetch(new URL(`${spreadSheetUrl}/${sheetId}/values/${sheetBlog}?key=${apiKey}`));
    const data = await res.json();

    const findData = data.values.find((x) => x[0] === id);

    const postData = {
        blogId: findData[0] || "",
        use: findData[1] || "",
        date: findData[2] || "",
        title: findData[3] || "",
        subTitle1: findData[4] || "",
        subTitle2: findData[5] || "",
        subTitle3: findData[6] || "",
        subTitle4: findData[7] || "",
        subTitle5: findData[8] || "",
        body1: findData[9] || "",
        body2: findData[10] || "",
        body3: findData[11] || "",
        body4: findData[12] || "",
        body5: findData[13] || "",
        photoUrl1: findData[14] || "",
        photoUrl2: findData[15] || "",
        photoUrl3: findData[16] || "",
        photoUrl4: findData[17] || "",
        photoUrl5: findData[18] || "",
        createAt: findData[19] || "",
    };
    return postData;
}
