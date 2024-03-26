<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import '../app.pcss';
</script>

<nav class="absolute flex w-full items-center justify-between border-b border-b-muted px-20 py-4">
	<div>
		<a href="/" class="font-heading text-3xl font-bold">Isaiah.</a>
	</div>
	<ul class="flex items-center gap-8 text-center">
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
	<Button disabled>View Blog</Button>
</nav>
<span class="block bg-gradient-to-br from-[#2f1934] to-background">
	<slot />
</span>
