<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import MediaCard from '$lib/components/MediaCard.svelte';
</script>

<main class="h-full">
	<section class="flex h-full flex-col items-center justify-center">
		<div class="mb-4 text-center">
			<h1 class="mb-1 text-5xl font-bold">Hey, I'm Isaiah Stockton.</h1>
			<h2 class="text-2xl text-slate-500">Software Engineering student, based in Florida</h2>
		</div>
		<div class="flex gap-2">
			<Button variant="outline" href="static/resume.pdf" download="Isaiah_Stockton_Resume.pdf">
				Download Resume
			</Button>
			<Button href="#contact">Let's Connect</Button>
		</div>
	</section>
	<section class="flex gap-16 bg-slate-200 px-48 py-24">
		<div class="container">
			<p class="text-sm text-slate-600">Skills</p>
			<h3 class="my-2 text-5xl font-bold">Technical Skills</h3>
			<p class="mb-4 text-2xl text-slate-500">
				I boast extensive experience in multiple skills, including but not limited to:
				JavaScript/TypeScript, Go, Svelte, and more.
			</p>
			<Button href="static/resume.pdf" download="Isaiah_Stockton_Resume.pdf">
				Download Resume
			</Button>
		</div>
		<div
			class="container grid grid-cols-3 place-items-center gap-y-4 rounded-lg bg-white py-8 shadow"
		>
			<img src="images/javascript-logo.png" alt="javascript logo" class="h-16 w-16" />
			<img src="images/typescript-logo.png" alt="typescript logo" class="h-16 w-16" />
			<img src="images/go-logo.png" alt="go logo" class="h-16 w-16" />
			<img src="images/react-logo.png" alt="react logo" class="h-16 w-16" />
			<img src="images/svelte-logo.png" alt="svelte logo" class="h-16 w-16" />
			<img src="images/nextjs-logo.png" alt="nextjs logo" class="h-16 w-16" />
		</div>
	</section>
	<section class="flex flex-col items-center justify-center px-48 py-24">
		<div class="mb-8 text-center">
			<h3 class="mb-2 text-4xl font-bold">My Projects</h3>
			<p class="text-xl text-slate-500">
				My blood, sweat, and tears. My "pride and joy"s. Here they are, in all of their glory.
			</p>
		</div>
		<div class="flex justify-center gap-8">
			<MediaCard
				title="Music Wizard"
				image="images/music-wizard-preview.png"
				website="https://musicwizard.vercel.app"
			>
				<svelte:fragment slot="description">
					Music Wizard is a web application built on Next.js that allows users to track their
					Spotify listening habits.
				</svelte:fragment>
				<svelte:fragment slot="external-links">
					<a
						href="https://github.com/ItsCentric/lyric-thing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="images/github-logo.svg" alt="github logo" class="h-6 w-6" />
					</a>
				</svelte:fragment>
			</MediaCard>
			<MediaCard title="Lyric Thing" image="images/lyric-thing-preview.png" website="">
				<svelte:fragment slot="description">
					Lyric Thing is a web application built on SvelteKit that allows users to read real-time
					lyrics transcribed by AI for their current playing song on Spotify.
				</svelte:fragment>
				<svelte:fragment slot="external-links">
					<a
						href="https://github.com/ItsCentric/lyric-thing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="images/github-logo.svg" alt="github logo" class="h-6 w-6" />
					</a>
				</svelte:fragment>
			</MediaCard>
		</div>
	</section>
	<section class="flex flex-col items-center justify-center bg-slate-200 px-48 py-24">
		<div class="mb-8 text-center">
			<h3 class="mb-2 text-4xl font-bold">Blog Posts</h3>
			<p class="text-xl text-slate-500">I write about stuff. Check it out.</p>
		</div>
		<div class="flex justify-center gap-8">
			<MediaCard
				title="Coming soon..."
				image="https://placehold.co/1920x1080/121212/e6e6e6?text=Coming+soon..."
				website=""
			>
				<svelte:fragment slot="description">
					I'm currently working on a blog, so stay tuned!
				</svelte:fragment>
			</MediaCard>
			<MediaCard
				title="Coming soon..."
				image="https://placehold.co/1920x1080/121212/e6e6e6?text=Coming+soon..."
				website=""
			>
				<svelte:fragment slot="description">
					I'm currently working on a blog, so stay tuned!
				</svelte:fragment>
			</MediaCard>
			<MediaCard
				title="Coming soon..."
				image="https://placehold.co/1920x1080/121212/e6e6e6?text=Coming+soon..."
				website=""
			>
				<svelte:fragment slot="description">
					I'm currently working on a blog, so stay tuned!
				</svelte:fragment>
			</MediaCard>
		</div>
	</section>
</main>
