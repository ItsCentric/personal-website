import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_USER_REFRESH_TOKEN
} from '$env/static/private';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

async function refreshAccessToken(refreshToken: string, customFetch: typeof fetch) {
	const response = await customFetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`
		},
		body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refreshToken })
	});
	if (!response.ok) {
		console.error(response.status, response.statusText, await response.text());
		throw new Error('Failed to refresh access token');
	}
	const data = await response.json();
	return data.access_token;
}

export const GET: RequestHandler = async ({ fetch }) => {
	const accessToken = await refreshAccessToken(SPOTIFY_USER_REFRESH_TOKEN, fetch);
	if (!accessToken) {
		return error(500, 'Failed to refresh access token');
	}
	const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});
	if (!response.ok) {
		return error(500, 'Failed to fetch currently playing track');
	}
	if (response.status === 204) {
		return new Response(null, { status: 204 });
	}
	const data = await response.json();
	if (!data.is_playing) {
		return new Response(null, { status: 204 });
	}
	return new Response(
		JSON.stringify({
			name: data.item.name,
			artists: data.item.artists.map((artist: { name: string }) => artist.name),
			cover: data.item.album.images[0].url
		})
	);
};
