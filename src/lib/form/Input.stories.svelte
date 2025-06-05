<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from '$lib/form/Input.svelte';

	const { Story } = defineMeta({
		title: 'Components/Forms/Input',
		component: Input,
		tags: ['autodocs']
	});
</script>

<Story
	name="Text Input"
	args={{
		label: 'Text',
		type: 'text',
		name: 'name'
	}}
/>

<Story
	name="Password Input"
	args={{
		label: 'Password',
		type: 'password'
	}}
/>
