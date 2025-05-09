import {  PUBLIC_POSTHOG_KEY } from '$env/static/public';
import type { HandleServerError } from '@sveltejs/kit';
import { PostHog } from 'posthog-node';

const client = new PostHog(PUBLIC_POSTHOG_KEY, {
	host: 'ph.isaiahstockton.com',
});

export const handleError: HandleServerError = async ({ error, status }) => {
	if (status !== 404) {
		client.captureException(error);
		await client.shutdown();
	}
};
