<script>
	import Button from './ui/button/button.svelte';
</script>

<nav class="flex justify-between px-8 py-4">
	<div>
		<a href="/" class="text-3xl font-bold">Isaiah.</a>
	</div>
	<ul class="flex gap-2">
		<li>
			<Button variant="outline" href="static/resume.pdf" download="Isaiah_Stockton_Resume.pdf"
				>Download Resume</Button
			>
		</li>
		<li>
			<Button href="/blog">View Blog</Button>
		</li>
	</ul>
</nav>
