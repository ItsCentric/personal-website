<script lang="ts">
	import * as Card from '$lib/components/ui/card/';
	import Button from '$lib/components/ui/button/button.svelte';

	export let projectImage: string;
	export let projectName: string;
	export let projectWebsite: string;
	export let projectGithub: string;
</script>

<Card.Root class="flex max-w-96 flex-col overflow-hidden">
	<img src={projectImage} alt="" class="aspect-video w-full" />
	<Card.Header class="flex-1">
		<Card.Title>{projectName}</Card.Title>
		<Card.Description><slot /></Card.Description>
	</Card.Header>
	<Card.Footer class="bottom-0 flex justify-between">
		<div>
			<a href={projectGithub} target="_blank">
				<img src="/images/github-logo.svg" alt="Github" class="h-6 w-6" />
			</a>
		</div>
		<div>
			<Button href={projectWebsite} target="_blank">View Project</Button>
		</div>
	</Card.Footer>
</Card.Root>
