<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import Button from '$lib/atomic/ui/Button.svelte';

	const { Story } = defineMeta({
		title: 'Atomic/UI/Button',
		component: Button
	});
</script>

<Story name="On Click" args={{ type: 'button', onclick: fn() }}>On Click</Story>

<Story name="Submit" args={{ type: 'submit' }}>Submit</Story>
