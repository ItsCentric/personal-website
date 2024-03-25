<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import '../app.pcss';
</script>

<nav class="flex items-center justify-between border-b border-b-muted px-8 py-4">
	<div>
		<a href="/" class="font-heading text-3xl font-bold">Isaiah.</a>
	</div>
	<ul class="flex items-center gap-8 text-center">
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="#about">About</a>
		</li>
		<li>
			<a href="#skills">Skills</a>
		</li>
		<li>
			<a href="#projects">Projects</a>
		</li>
	</ul>
	<Button href="/blog">View Blog</Button>
</nav>
<slot />
