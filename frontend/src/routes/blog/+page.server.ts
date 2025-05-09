import { PUBLIC_STRAPI_URL } from '$env/static/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_STRAPI_URL}/api/posts?populate=*`);
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
	const data = await res.json();
	return { posts: data };
};
