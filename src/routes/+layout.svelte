<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Menu } from 'lucide-svelte';
	import '../app.pcss';
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
	<Button disabled class="hidden lg:block">View Blog</Button>
</nav>
<slot />
