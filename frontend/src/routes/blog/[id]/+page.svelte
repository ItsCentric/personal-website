<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowLeft } from 'lucide-svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title} | Isaiah Stockton</title>
	<meta name="description" content={data.post.description} />
</svelte:head>

<main class="mx-auto min-h-screen max-w-prose pt-[72px]">
	<div class="relative mt-16">
		<div class="absolute -translate-x-full -left-8 top-0">
			<Button href="/blog" variant="ghost" size="icon"><ArrowLeft size={48} /></Button>
		</div>
		<img
			src={`${PUBLIC_STRAPI_URL}${data.post.thumbnail.data.attributes.url}`}
			alt={data.post.title}
			class="mb-8 h-96 w-full rounded-lg object-cover object-center"
		/>
		<h1 class="mb-4 font-heading text-4xl font-bold">{data.post.title}</h1>
		<p class="text-muted-500 text-lg">{data.post.description}</p>
	</div>
	<Separator class="my-8" />
	<div class="prose mb-16 dark:prose-invert lg:prose-xl">
		{@html marked.parse(data.post.content)}
	</div>
</main>
