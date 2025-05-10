<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import {
		User,
		Armchair,
		BriefcaseBusiness,
		Goal,
		Construction,
		Disc3,
		ExternalLink
	} from 'lucide-svelte';
	import { onMount } from 'svelte';
	import type { CurrentSong } from '$lib';
	import type { PageData } from './$types';
	import { PUBLIC_STRAPI_URL } from '$env/static/public';
	import { Badge } from '$lib/components/ui/badge';
	import GithubIcon from '$lib/components/github-icon.svelte';
	import { fly } from 'svelte/transition';

	export let data: PageData;
	let currentSong: CurrentSong | null;
	let currentProjectIndex = 0;
	$: currentProject = data.projects.data[currentProjectIndex].attributes;

	onMount(() => {
		async function getCurrentSong() {
			const res = await fetch('/api/now-playing');
			if (!res.ok) {
				throw new Error('Failed to fetch current song');
			}
			if (res.status === 204) {
				currentSong = null;
				return;
			}
			const data = await res.json();
			currentSong = { ...data };
		}
		getCurrentSong();
		const id = setInterval(getCurrentSong, 10000);

		return () => clearInterval(id);
	});
</script>

<svelte:head>
	<title>Isaiah Stockton | Software Engineer</title>
	<meta
		name="description"
		content="Isaiah Stockton is a software engineer with a passion for creating and building things. He has experience with a variety of technologies to build web applications, mobile applications, and more."
	/>
</svelte:head>

<main>
	<section class="pt-[69px] lg:h-screen lg:pt-0">
		<div class="flex h-full flex-col">
			<div class="flex flex-grow flex-col justify-center self-center px-8 py-16 lg:pl-20">
				<div class="mb-4 text-center">
					<h1 class="mb-2 font-heading text-4xl font-bold lg:text-7xl">Hey, I'm Isaiah Stockton</h1>
					<p class="text-xl text-muted">Your journey to digital excellence starts here.</p>
				</div>
				<div class="flex justify-center gap-4">
					<Button href="/resume.pdf" target="_blank">View resume</Button>
					<Button variant="link" href="/blog">View blog</Button>
				</div>
			</div>
			<div
				class="flex flex-col gap-8 bg-background px-8 py-12 lg:h-1/4 lg:flex-row lg:items-center lg:justify-around lg:px-28"
			>
				<div class="flex items-center gap-8">
					<h2 class="font-heading text-2xl font-semibold lg:text-4xl">Social links</h2>
					<ul class="flex w-full flex-col divide-y divide-muted">
						<li class="flex items-center justify-between pb-2 pl-2">
							<p class="font-semibold lg:text-lg">GitHub</p>
							<Button
								size="lg"
								variant="link"
								href="https://www.github.com/itscentric"
								target="_blank">Follow</Button
							>
						</li>
						<li class="flex items-center justify-between py-2 pl-2">
							<p class="font-semibold lg:text-lg">LinkedIn</p>
							<Button size="lg" variant="link" href="https://www.linkedin.com/in/isaiahstockton"
								>Follow</Button
							>
						</li>
						<li class="flex items-center justify-between pl-2 pt-2">
							<p class="font-semibold lg:text-lg">Twitter/X</p>
							<Button
								size="lg"
								variant="link"
								href="https://www.twitter.com/centriccdev"
								target="_blank">Follow</Button
							>
						</li>
					</ul>
				</div>
				<Separator class="lg:hidden" />
				<Separator orientation="vertical" class="hidden h-1/2 lg:block" />
				<div class="flex max-w-lg flex-1 items-center gap-8">
					<h2 class="max-w-min font-heading text-2xl font-semibold lg:text-4xl">Listening to...</h2>
					<div class="flex flex-1 items-center gap-4 rounded-lg bg-white/20 px-4 py-2 shadow-lg">
						{#if currentSong}
							<img
								src={currentSong.cover}
								alt={currentSong.name}
								class="aspect-square h-16 min-w-fit rounded-md"
							/>
							<div>
								<p class="line-clamp-2 text-lg font-semibold">{currentSong.name}</p>
								<p class="line-clamp-1 text-muted">{currentSong.artists.join(', ')}</p>
							</div>
						{:else}
							<Disc3 size={64} class="min-w-fit" />
							<div>
								<p class="font-semibold">Nothing :(</p>
								<p class="text-muted">Yet... stay tuned</p>
							</div>
						{/if}
					</div>
				</div>
				<Separator class="lg:hidden" />
				<Separator orientation="vertical" class="hidden h-1/2 lg:block" />
				<div class="flex items-center gap-8">
					<h2 class="max-w-min font-heading text-2xl font-semibold lg:text-4xl">
						Work in Progress...
					</h2>
					<div class="flex min-w-0 items-center gap-4 rounded-lg bg-white/20 px-4 py-2 shadow-lg">
						<Construction size={32} class="flex-shrink-0" />
						<p class="min-w-0 break-words font-semibold">Under const&shy;ruction!</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="container px-8 pt-16 lg:px-20 lg:pt-32">
		<h2 class="font-heading text-2xl" id="about">// ABOUT</h2>
		<div class="mx-auto my-12 flex w-fit flex-col gap-4 lg:flex-row">
			<Card.Root class="max-w-sm flex-1">
				<Card.Header class="space-y-7">
					<User size={48} />
					<Card.Title>Who am I?</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>
						I'm a software engineer with a passion for creating and building things. I've been
						coding for over {new Date().getFullYear() - 2021} years and have worked on a variety of projects
						ranging from web development to mobile applications.
					</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="max-w-sm flex-1">
				<Card.Header class="space-y-7">
					<Armchair size={48} />
					<Card.Title>What do I do?</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>
						Besides programming, I also enjoy sports and games in my freetime. I take pride in my
						health and enjoy working out at my local gym to keep myself in tip-top shape.
					</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="max-w-sm flex-1">
				<Card.Header class="space-y-7">
					<BriefcaseBusiness size={48} />
					<Card.Title>What can I do for you?</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>
						I can provide my technical expertise to help you build your next project. I have
						experience with a variety of technologies to build web applications, mobile
						applications, and more.
					</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="max-w-sm flex-1">
				<Card.Header class="space-y-7">
					<Goal size={48} />
					<Card.Title>What is my goal?</Card.Title>
				</Card.Header>
				<Card.Content>
					<p>
						My goal is to help you bring your ideas to life. I want to help you build the next great
						thing and help make everyone's lives that much better.
					</p>
				</Card.Content>
			</Card.Root>
		</div>
		<p class="text-center font-semibold">Transforming second languages into second nature.</p>
		<Separator class="my-12" />
	</section>
	<section class="container mb-24">
		<h2 class="mb-12 text-center font-heading text-2xl uppercase">// featured projects</h2>
		<div class="flex flex-col gap-8 lg:flex-row lg:gap-64">
			<div class="flex flex-col justify-center gap-6 lg:max-w-[15%] lg:flex-1">
				{#each data.projects.data as project, i}
					{@const projectData = project.attributes}
					<button on:click={() => (currentProjectIndex = i)} class="group flex gap-4">
						<div
							class={'w-full max-w-0.5 flex-none bg-white transition-all duration-100 group-hover:max-w-1' +
								(currentProjectIndex === i ? ' max-w-1' : '')}
						></div>
						<div class='text-left'>
                            <p class='text-muted text-sm'>{projectData.type}</p>
							<p class="text-left text-xl font-semibold">{projectData.name}</p>
						</div>
					</button>
				{/each}
			</div>
			{#key currentProjectIndex}
				<div in:fly={{ y: 40, duration: 400 }} class='lg:flex-1'>
					<img
						src={PUBLIC_STRAPI_URL + currentProject.showcase.data[0].attributes.url}
						alt={currentProject.name}
						class="mb-8 aspect-video w-full rounded-lg shadow-lg"
					/>
					<div class="mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
						<p class="font-heading text-3xl font-bold">{currentProject.name}</p>
						<div class="flex gap-2">
							<Button href={currentProject.websiteUrl} target="_blank">
								<p class="mr-1">Visit</p>
								<ExternalLink size={16} />
							</Button>
							<Button
								variant="outline"
								target="_blank"
								class="bg-[#181717] text-foreground hover:bg-black/75 hover:text-foreground"
								href={currentProject.githubUrl}
							>
								<GithubIcon class="mr-1" />
								<p class="mr-1">Github</p>
								<ExternalLink size={16} />
							</Button>
						</div>
					</div>
					<p class="mb-4 text-muted">
						{currentProject.description}
					</p>
					<div class="flex gap-2 flex-wrap">
						{#each currentProject.technologies.split(',') as technology}
							<Badge>{technology}</Badge>
						{/each}
					</div>
				</div>
			{/key}
		</div>
	</section>
</main>
