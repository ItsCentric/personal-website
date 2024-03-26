<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<main>
	<section class="grid h-screen grid-cols-[33%,_1fr]">
		<div class="flex h-full flex-col">
			<div class="flex flex-grow flex-col justify-center pl-20">
				<div class="mb-4">
					<h1 class="mb-2 font-heading text-7xl font-bold">Hey, I'm Isaiah Stockton</h1>
					<p class="text-2xl text-muted">Making the world a better place, one line at a time.</p>
				</div>
				<div class="flex gap-4">
					<Button href="/resume.pdf" target="_blank">View resume</Button>
					<Button variant="link" disabled>View blog</Button>
				</div>
			</div>
			<div class="flex h-1/4 items-center gap-8 bg-black px-20 py-40">
				<h2 class="font-heading text-4xl font-semibold">Social links</h2>
				<ul class="flex w-full flex-col divide-y divide-muted">
					<li class="flex items-center justify-between pb-2 pl-2">
						<p class="text-lg font-semibold">GitHub</p>
						<Button
							size="lg"
							variant="link"
							href="https://www.github.com/itscentric"
							target="_blank">Follow</Button
						>
					</li>
					<li class="flex items-center justify-between py-2 pl-2">
						<p class="text-lg font-semibold">LinkedIn</p>
						<Button size="lg" variant="link" disabled>Follow</Button>
					</li>
					<li class="flex items-center justify-between pl-2 pt-2">
						<p class="text-lg font-semibold">Twitter/X</p>
						<Button
							size="lg"
							variant="link"
							href="https://www.twitter.com/theonlycentric"
							target="_blank">Follow</Button
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="h-full">
			<img
				src="/development.jpg"
				alt="Lines of code"
				class="row-span-2 mt-[72px] h-[calc(100vh_-_72px)]"
			/>
		</div>
	</section>
</main>
