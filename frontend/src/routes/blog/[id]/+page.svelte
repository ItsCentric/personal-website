<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let data: PageData;
</script>

<svelte:head>
    <title>{data.post.title} | Isaiah Stockton</title>
    <meta name="description" content={data.post.description} />
</svelte:head>

<main class=" mx-auto min-h-screen max-w-prose pt-[72px]">
	<div class="relative mt-16">
		<img
			src={`http://localhost:1337${data.post.thumbnail.data.attributes.url}`}
			alt={data.post.title}
			class="h-96 w-full rounded-lg object-cover object-center mb-8"
		/>
		<h1 class="mb-4 font-heading text-4xl font-bold">{data.post.title}</h1>
		<p class="text-muted-500 text-lg">{data.post.description}</p>
	</div>
	<Separator class="my-8" />
	<div class="prose dark:prose-invert lg:prose-xl mb-16">
		{@html marked.parse(data.post.content)}
	</div>
</main>
