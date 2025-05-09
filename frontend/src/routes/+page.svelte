<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { User, Armchair, BriefcaseBusiness, Goal, Construction, Disc3 } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import type { CurrentSong } from '$lib';

	let currentSong: CurrentSong | null;

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
				<div class="flex flex-1 items-center gap-8">
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
						coding for over 2 years and have worked on a variety of projects ranging from web
						development to mobile applications.
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
	<section id="skills" class="mb-40 flex items-center gap-32">
		<img
			src="/images/typing.webp"
			loading="lazy"
			alt="A person typing on a laptop keyboard with a phone to the left and a wallet and camera lens to the right"
			class="hidden w-1/2 rounded-r-3xl object-cover lg:block"
		/>
		<div class="flex flex-col gap-16 px-8 pb-16 uppercase lg:mr-20">
			<h2 class="font-heading text-2xl">// my skills</h2>
			<div class="grid w-fit grid-cols-2 gap-12">
				<div class="flex items-center gap-4">
					<img
						src="/images/logos/typescript-logo.webp"
						loading="lazy"
						alt="TypeScript logo"
						class="h-12 w-12 rounded-lg bg-white/95 p-1"
					/>
					<p class="text-sm">typescript</p>
				</div>
				<div class="flex items-center gap-4">
					<img
						src="/images/logos/go-logo.webp"
						loading="lazy"
						alt="Go logo"
						class="h-12 w-12 rounded-lg bg-white/95 p-1"
					/>
					<p class="text-sm">go</p>
				</div>
				<div class="flex items-center gap-4">
					<img
						src="/images/logos/react-logo.webp"
						loading="lazy"
						alt="React logo"
						class="h-12 w-12 rounded-lg bg-white/95 p-1"
					/>
					<p class="text-sm">react</p>
				</div>
				<div class="flex items-center gap-4">
					<img
						src="/images/logos/svelte-logo.webp"
						loading="lazy"
						alt="Svelte logo"
						class="h-12 w-12 rounded-lg bg-white/95 p-1"
					/>
					<p class="text-sm">svelte</p>
				</div>
				<div class="flex items-center gap-4">
					<img
						src="/images/logos/postgresql-logo.webp"
						loading="lazy"
						alt="Postgresql logo"
						class="h-12 w-12 rounded-lg bg-white/95 p-1"
					/>
					<p class="text-sm">postgresql</p>
				</div>
				<div class="flex items-center gap-4">
					<img
						src="/images/logos/mysql-logo.webp"
						loading="lazy"
						alt="Mysql logo"
						class="h-12 w-12 rounded-lg bg-white/95 p-1"
					/>
					<p class="text-sm">mysql</p>
				</div>
				<div class="flex items-center gap-4">
					<img
						src="/images/logos/python-logo.webp"
						loading="lazy"
						alt="Python logo"
						class="h-12 w-12 rounded-lg bg-white/95 p-1"
					/>
					<p class="text-sm">python</p>
				</div>
				<div class="flex items-center gap-4">
					<img
						src="/images/logos/mongodb-logo.webp"
						loading="lazy"
						alt="Mongodb logo"
						class="h-12 w-12 rounded-lg bg-white/95 p-1"
					/>
					<p class="text-sm">mongodb</p>
				</div>
			</div>
			<div>
				<p class="mb-3 text-sm text-muted">some other ordinary skills</p>
				<p class="text-xl">microsoft office, github, git, linux, docker</p>
			</div>
			<Button href="/resume.pdf" target="_blank" size="lg" variant="outline" class="bg-transparent"
				>View resume</Button
			>
		</div>
	</section>
	<section class="container mb-24">
		<h2 class="mb-12 text-center font-heading text-2xl uppercase">// projects</h2>
		<div class="flex flex-col justify-center gap-8 lg:flex-row">
			<Card.Root class="max-w-sm overflow-hidden border-none">
				<Card.Header class="px-0 pt-0">
					<img
						src="/images/music-wizard-preview.webp"
						loading="lazy"
						alt="A project preview featuring a dashboard with different music statistics such as top genres and recently played songs"
						class="mb-4 aspect-video w-full object-cover"
					/>
					<Card.Title class="px-6 font-heading">Music Wizard</Card.Title>
					<Card.Description class="px-6"
						>A web application that allows users to connect their Spotify account to see their
						listening habits. Users are able to view Spotify statistics such as recent songs, top
						artists, top songs, etc. This was the first website I made!</Card.Description
					>
				</Card.Header>
				<Card.Footer class="flex items-center justify-between">
					<Button href="https://github.com/ItsCentric/music-wizard/tree/main" target="_blank"
						>View project</Button
					>
					<div class="flex items-center gap-2">
						<img
							src="/images/logos/react-logo.webp"
							loading="lazy"
							alt="React logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
						<img
							src="/images/logos/typescript-logo.webp"
							loading="lazy"
							alt="Typescript logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
						<img
							src="/images/logos/mongodb-logo.webp"
							loading="lazy"
							alt="Mongodb logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
					</div>
				</Card.Footer>
			</Card.Root>
			<Card.Root class="relative max-w-sm overflow-hidden border-none">
				<Card.Header class="px-0 pt-0">
					<img
						src="/images/lyric-thing-preview.webp"
						loading="lazy"
						alt="A project preview featuring a music player with lyrics"
						class="mb-4 aspect-video w-full object-cover"
					/>
					<Card.Title class="px-6 font-heading">Lyric Thing</Card.Title>
					<Card.Description class="px-6"
						>A web application that allows users to connect their Spotify account to see AI
						transcribed lyrics in real time for their currently playing song.</Card.Description
					>
				</Card.Header>
				<Card.Footer class="static bottom-0 flex w-full items-center justify-between lg:absolute">
					<Button href="https://github.com/ItsCentric/lyric-thing/tree/main" target="_blank"
						>View project</Button
					>
					<div class="flex items-center gap-2">
						<img
							src="/images/logos/svelte-logo.webp"
							loading="lazy"
							alt="Svelte logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
						<img
							src="/images/logos/typescript-logo.webp"
							loading="lazy"
							alt="Mongodb logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
						<img
							src="/images/logos/pocketbase-logo.webp"
							loading="lazy"
							alt="Pocketbase logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
					</div>
				</Card.Footer>
			</Card.Root>
			<Card.Root class="relative max-w-sm overflow-hidden border-none">
				<Card.Header class="px-0 pt-0">
					<img
						src="/images/game-chronicle-preview.webp"
						loading="lazy"
						alt="A project preview featuring multiple game covers in a grid"
						class="mb-4 aspect-video w-full"
					/>
					<Card.Title class="px-6 font-heading">Game Chronicle</Card.Title>
					<Card.Description class="px-6"
						>A desktop application that allows users to log their game sessions. Has a togglable
						feature that automatically detects when a game has been played.</Card.Description
					>
				</Card.Header>
				<Card.Footer class="static bottom-0 flex w-full items-center justify-between lg:absolute">
					<Button href="https://github.com/ItsCentric/game-chronicle/tree/main" target="_blank"
						>View project</Button
					>
					<div class="flex items-center gap-2">
						<img
							src="/images/logos/svelte-logo.webp"
							loading="lazy"
							alt="Svelte logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
						<img
							src="/images/logos/go-logo.webp"
							loading="lazy"
							alt="Go logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
						<img
							src="/images/logos/sqlite-logo.webp"
							loading="lazy"
							alt="SQLite logo"
							class="h-8 w-8 rounded-lg bg-white/95 p-1"
						/>
					</div>
				</Card.Footer>
			</Card.Root>
		</div>
	</section>
</main>
