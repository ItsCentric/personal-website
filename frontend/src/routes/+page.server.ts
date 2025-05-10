import { PUBLIC_STRAPI_URL } from '$env/static/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`${PUBLIC_STRAPI_URL}/api/projects?populate=*`);
    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }
	const data = await res.json();
	return { projects: data };
};
