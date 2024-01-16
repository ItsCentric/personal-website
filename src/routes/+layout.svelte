<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.pcss';
</script>

<div class="flex h-full flex-col">
	<Navbar />
	<span class="flex-grow">
		<slot />
	</span>
</div>
