const NEXT_PUBLIC_RESTAPI_URL = 'https://jsonplaceholder.typicode.com/posts'


export async function getAllPostsData() {
    const res = await fetch(
        // new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}`)
        new URL(NEXT_PUBLIC_RESTAPI_URL)
    );
    const posts = await res.json();
    // const filteredPosts = posts.sort(
    //   (a, b) => new Date(b.created_at) - new Date(a.created_at)
    // );
    // console.log(posts)
    return posts;
}

export async function getAllPostIds() {
    const res = await fetch(
        new URL(NEXT_PUBLIC_RESTAPI_URL)
    );
    const posts = await res.json();
    return posts.map((post) => {
        return {
            params: {
            id: String(post.id),
        },
        };
    });
}

export async function getPostData(id) {
    const res = await fetch(
        new URL(`${NEXT_PUBLIC_RESTAPI_URL}/${id}/`)
    );
    const post = await res.json();
    // return {
    //   post,
    // };
    return post;
}