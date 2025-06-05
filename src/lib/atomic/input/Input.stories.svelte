<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from '$lib/atomic/input/Input.svelte';

	const { Story } = defineMeta({
		title: 'Atomic/Input/Input',
		component: Input
	});
</script>

<Story
	name="Text"
	args={{ type: 'text', label: 'Text', name: 'text' }}
/>

<Story
		name="Password"
		args={{ type: 'password', label: 'Password', name: 'password' }}
/>

<Story
		name="Number"
		args={{ type: 'number', label: 'Number', name: 'number' }}
/>

<Story
		name="File"
		args={{ type: 'file', label: 'File', name: 'file' }}
/>