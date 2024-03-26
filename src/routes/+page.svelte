<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { User, Armchair, BriefcaseBusiness, Goal } from 'lucide-svelte';
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
			<div class="flex h-1/4 items-center gap-8 bg-background px-20 py-40">
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
	<section class="container px-20 pt-32">
		<h2 class="font-heading text-2xl" id="about">// ABOUT</h2>
		<div class="mx-auto my-12 flex w-fit gap-4">
			<Card.Root class="max-w-sm flex-1">
				<Card.Header>
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
				<Card.Header>
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
				<Card.Header>
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
				<Card.Header>
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
		<p class="text-center font-semibold">Transforming second languages to second nature.</p>
		<Separator class="my-12" />
	</section>
</main>
