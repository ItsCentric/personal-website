<script lang="ts">
	import * as Card from '$lib/components/ui/card/';
	import { Button } from '$lib/components/ui/button';

	export let image: string;
	export let title: string;
	export let website: string;
</script>

<Card.Root class="flex max-w-96 flex-col overflow-hidden">
	<img src={image} alt="" class="aspect-video w-full" />
	<Card.Header class="flex-1">
		<Card.Title>{title}</Card.Title>
		<Card.Description><slot name="description" /></Card.Description>
	</Card.Header>
	<Card.Footer class="bottom-0 flex justify-between">
		<div>
			<slot name="external-links" />
		</div>
		<div>
			{#if website}
				<Button href={website} target="_blank">View</Button>
			{:else}
				<Button disabled>View</Button>
			{/if}
		</div>
	</Card.Footer>
</Card.Root>
