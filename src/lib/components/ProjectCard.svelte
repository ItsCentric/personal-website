<script lang="ts">
	import * as Card from '$lib/components/ui/card/';
	import Button from '$lib/components/ui/button/button.svelte';

	export let projectImage: string;
	export let projectName: string;
	export let projectLink: string;
</script>

<Card.Root class="max-w-96 overflow-hidden">
	<img src={projectImage} alt="" class="aspect-video w-full" />
	<Card.Header>
		<Card.Title>{projectName}</Card.Title>
		<Card.Description><slot /></Card.Description>
	</Card.Header>
	<Card.Footer>
		<Button href={projectLink} target="_blank">View Project</Button>
	</Card.Footer>
</Card.Root>
