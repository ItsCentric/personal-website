import type { HandleServerError } from '@sveltejs/kit';
import { PostHog } from 'posthog-node';

const client = new PostHog('phc_DidAu4Hto80aHCBwtu4pMiema1TdEsEi3rvWGMwQIF8', {
	host: 'https://us.i.posthog.com'
});

export const handleError = async ({ error, status }: HandleServerError) => {
	if (status !== 404) {
		client.captureException(error);
		await client.shutdown();
	}
};
