<script lang="ts">
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

	export let skill: string;
	export let experience: string;
</script>

<Card>
	<CardHeader>
		<div>
			<img src="JavaScript_Logo.png" alt={`${skill} Logo`} class="mr-2 inline-block h-12 w-12" />
			<span class="inline-block align-middle">
				<CardTitle>{skill}</CardTitle>
				<CardDescription>{experience} of experience</CardDescription>
			</span>
		</div>
	</CardHeader>
	<CardContent>
		<slot />
	</CardContent>
</Card>
