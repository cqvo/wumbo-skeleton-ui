<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Checkbox from '$lib/atomic/input/Checkbox.svelte';

	const { Story } = defineMeta({
		title: 'Atomic/Input/Checkbox',
		component: Checkbox
	});
</script>

<Story
	name="Checkbox"
>Checkbox</Story>