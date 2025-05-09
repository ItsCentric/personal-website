<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Menu } from 'lucide-svelte';
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import posthog from 'posthog-js';
    import { PUBLIC_POSTHOG_KEY, PUBLIC_POSTHOG_API_HOST } from '$env/static/public';

	onMount(() => {
		if (browser) {
			posthog.init(PUBLIC_POSTHOG_KEY, {
				api_host: PUBLIC_POSTHOG_API_HOST,
				ui_host: 'https://us.posthog.com',
				person_profiles: 'always',
			});
		}
	});
</script>

<nav
	class="absolute flex w-full items-center justify-between border-b border-b-muted px-8 py-4 lg:px-20"
>
	<div>
		<a href="/" class="font-heading text-3xl font-bold">Isaiah.</a>
	</div>
	<div class="lg:hidden">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild let:builder>
				<Button builders={[builder]} size="icon" variant="outline" class="bg-transparent">
					<Menu size={24} />
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item href="/">Home</DropdownMenu.Item>
				<DropdownMenu.Item href="#about">About</DropdownMenu.Item>
				<DropdownMenu.Item href="#skills">Skills</DropdownMenu.Item>
				<DropdownMenu.Item href="#projects">Projects</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
	<ul class="hidden items-center gap-8 text-center lg:flex">
		<li>
			<Button variant="link" href="/">Home</Button>
		</li>
		<li>
			<Button variant="link" href="#about">About</Button>
		</li>
		<li>
			<Button variant="link" href="#skills">Skills</Button>
		</li>
		<li>
			<Button variant="link" href="#projects">Projects</Button>
		</li>
	</ul>
	<Button href="/blog" class="hidden lg:block">View Blog</Button>
</nav>
<slot />
<footer
	class="relative flex flex-col gap-8 bg-background px-8 py-16 lg:flex-row lg:gap-32 lg:px-28 lg:py-20"
>
	<div class="flex flex-col">
		<p class="mb-5 font-heading text-2xl">Isaiah</p>
		<p class="text-muted">Designed and developed by Isaiah Stockton</p>
	</div>
	<ul class="mb-8 flex flex-row gap-4 text-muted lg:flex-col">
		<li>
			<a href="/" class="transition-colors hover:text-white">Home</a>
		</li>
		<li>
			<a href="#about" class="transition-colors hover:text-white">About</a>
		</li>
		<li>
			<a href="#skills" class="transition-colors hover:text-white">Skills</a>
		</li>
		<li>
			<a href="#projects" class="transition-colors hover:text-white">Projects</a>
		</li>
	</ul>
	<p class="absolute bottom-2 left-1/2 -translate-x-1/2 text-muted">
		© 2024 Isaiah Stockton. All rights reserved
	</p>
</footer>
