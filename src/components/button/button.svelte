<script>
	import Button, { Label } from '@smui/button';
	export let color = '';
	export let variant = '';
	export let size = '';
	export let label = '';
	let clicked = 0;
</script>

<Button on:click={() => clicked++} {variant} class={size} {color}>
	<Label>{label}</Label>
</Button>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
	.small {
		width: 0.5rem;
		height: 0.5rem;
	}

	.medium {
		width: 1rem;
		height: 1rem;
	}

	.large {
		width: 1.3rem;
		height: 1.3rem;
	}
</style>
