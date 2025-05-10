<script lang="ts">
	import { page } from '$app/stores';
</script>

<main
	class="relative flex h-screen flex-col items-center justify-center overflow-hidden px-8 pt-[93px]"
>
	<p
		class="text-gradient absolute rotate-90 select-none text-center font-heading text-[55vh] opacity-5 lg:rotate-0 lg:text-[85vh] -z-10"
	>
		{$page?.status}
	</p>
	<h1 class="mb-2 font-heading text-2xl lg:text-4xl">
		{$page?.status !== 404 ? 'Well... Shucks...' : 'Lost?'}
	</h1>
	<div class="text-center">
		{#if $page?.status !== 404}
			<p class="mb-1 text-muted lg:text-xl">
				Whatever that was wasn't supposed to happen. Sorry about that, try again later?
			</p>
			<p class="text-xs text-muted lg:text-sm">
				(By later, I know you're just going to refresh the page instantly, but I mean like... later
				later)
			</p>
		{:else}
			<p class="mb-1 text-muted lg:text-xl">
                Woah there! Looks like you've gone a bit too far, let's get you <a href="/" class='underline decoration-accent underline-offset-4 hover:text-muted-foreground transition-colors duration-150'>back home</a>.
			</p>
		{/if}
	</div>
</main>

<style>
	.text-gradient {
		mask-image: linear-gradient(180deg, white, transparent);
	}
</style>
