import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, params }) => {
    const res = await fetch(`http://localhost:1337/api/posts/${params.id}?populate=*`);
    if (res.status === 404) {
        throw error(404, 'Post not found');
    }
    const data = await res.json();
    return { post: data.data.attributes }
}
