import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('http://localhost:1337/api/posts?populate=*');
    const data = await res.json();
    return { posts: data }
}
