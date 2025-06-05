<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Select from '$lib/atomic/input/Select.svelte';

	const { Story } = defineMeta({
		title: 'Atomic/Input/Select',
		component: Select
	});
</script>

<Story
	name="With Values"
	args={{
		options: [
			{ label: 'Option 1', value: '1' },
			{ label: 'Option 2', value: '2' },
			{ label: 'Option 3', value: '3' }
		]
	}}
/>

<Story
	name="Without Values"
	args={{
		options: [{ label: 'Option 1' }, { label: 'Option 2' }, { label: 'Option 3' }]
	}}
/>
