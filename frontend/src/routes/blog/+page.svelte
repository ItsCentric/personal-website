<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
    <title>Isaiah Stockton | Blog</title>
    <meta name="description" content="Isaiah Stockton's blog posts" />
</svelte:head>

<main class="mx-auto min-h-screen max-w-prose pt-[72px]">
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
						src={`http://localhost:1337${postData.thumbnail.data.attributes.url}`}
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
</main>
