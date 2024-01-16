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
