<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardContent, CardHeader } from '$lib/components/ui/card';
	import CardDescription from '$lib/components/ui/card/card-description.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import CarouselContent from '$lib/components/ui/carousel/carousel-content.svelte';
	import CarouselItem from '$lib/components/ui/carousel/carousel-item.svelte';
	import CarouselNext from '$lib/components/ui/carousel/carousel-next.svelte';
	import CarouselPrevious from '$lib/components/ui/carousel/carousel-previous.svelte';
	import Carousel from '$lib/components/ui/carousel/carousel.svelte';
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
			<img src="/development.jpg" alt="Lines of code" class="row-span-2 h-full" />
		</div>
	</section>
	<section class="flex bg-slate-200 py-16">
		<div class="container">
			<p class="text-sm text-slate-600">Skills</p>
			<h3 class="text-5xl font-bold">Technical Skills</h3>
			<p class="text-2xl text-slate-500">
				I boast extensive experience in multiple skills. Click the arrows to find out more about
				each one!
			</p>
		</div>
		<div class="container">
			<Carousel>
				<CarouselContent>
					<CarouselItem>
						<Card>
							<CardHeader>
								<CardTitle>JavaScript</CardTitle>
								<CardDescription>blah blah blah blah</CardDescription>
							</CardHeader>
							<CardContent>
								<p>blah blah blah blah</p>
							</CardContent>
						</Card>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	</section>
</main>
