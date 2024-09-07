<script lang="ts">
	import { HeartCrack } from 'lucide-svelte';
	import type { PageData } from './$types';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';

	export let data: PageData;
</script>

<svelte:head>
	<title>Isaiah Stockton | Blog</title>
	<meta name="description" content="Isaiah Stockton's blog posts" />
</svelte:head>

<main
	class={`mx-auto min-h-screen max-w-prose pt-[72px] ${data.posts.data.length === 0 ? 'flex flex-col justify-center' : ''}`}
>
	{#if data.posts.data.length === 0}
		<div class="text-center">
			<HeartCrack size={64} class="mx-auto mb-4" />
			<h1 class="mb-4 font-heading text-4xl font-bold">No blog posts... yet</h1>
			<p class="text-muted">
				Check back later for the latest and greatest works of literature you've <span
					class="font-bold underline decoration-accent decoration-2 underline-offset-4">ever</span
				> seen!
			</p>
		</div>
	{:else}
		<h1 class="mb-4 mt-8 font-heading text-4xl font-bold">Blog posts</h1>
		<div class="flex flex-col gap-4">
			{#each data.posts.data as post}
				{@const postData = post.attributes}
				<a
					href={`/blog/${post.id}`}
					class="grid cursor-pointer grid-cols-2 gap-4 rounded-lg p-4 transition-all hover:scale-105 hover:bg-white/5"
				>
					{#if postData.thumbnail}
						<img
							src={`${PUBLIC_STRAPI_URL}${postData.thumbnail.data.attributes.url}`}
							alt={postData.title}
							class="row-span-2 h-48 w-full rounded-lg object-cover object-center"
						/>
					{/if}
					<div class="self-end">
						<p class="mb-1 font-heading text-2xl font-bold">{post.attributes.title}</p>
						<p class="text-muted">{post.attributes.description}</p>
					</div>
					<p class="text-sm">
						{new Date(postData.createdAt).toLocaleDateString(undefined, {
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						})}
					</p>
				</a>
			{/each}
		</div>
	{/if}
</main>
