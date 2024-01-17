<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
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
		<div class="text-center">
			<h3 class="mb-2 text-4xl font-bold">Projects</h3>
			<p class="text-xl text-slate-500">Here are some of my projects.</p>
		</div>
		<div class="flex justify-center gap-4">
			<ProjectCard
				projectName="Music Wizard"
				projectImage="images/music-wizard-preview.png"
				projectLink="https://musicwizard.vercel.app"
				>Music Wizard is a web application built on Next.js that allows users to track their Spotify
				listening habits.</ProjectCard
			>
			<ProjectCard
				projectName="Lyric Thing"
				projectImage="images/javascript-logo.png"
				projectLink=""
				>Lyric Thing is a web application built on SvelteKit that allows users to read real-time
				lyrics transcribed by AI for their current playing song on Spotify.</ProjectCard
			>
		</div>
	</section>
</main>
