import { PUBLIC_STRAPI_URL } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const res = await fetch(`${PUBLIC_STRAPI_URL}/api/posts/${params.id}?populate=*`);
	if (res.status === 404) {
		throw error(404, 'Post not found');
	}
	const data = await res.json();
	return { post: data.data.attributes };
};
