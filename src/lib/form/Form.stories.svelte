<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Form from '$lib/form/Form.svelte';

	const { Story } = defineMeta({
		title: 'Components/Forms/Form',
		component: Form,
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	import Input from '$lib/form/Input.svelte';
	import Button from '$lib/atomic/ui/Button.svelte';
</script>

<Story name="Form" args={{}}>
	<Input name="name" label="Text" type="text" />
	<Button type="submit">Submit</Button>
</Story>
