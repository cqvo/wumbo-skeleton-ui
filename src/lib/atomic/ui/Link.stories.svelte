<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Link from './Link.svelte';

	const { Story } = defineMeta({
		title: 'Atomic/UI/Link',
		component: Link,
		args: {
			href: 'https://www.google.com'
		}
	});
</script>

<Story name="Text" args={{}}>Simple Link</Story>

<Story
	name="Button"
	args={{
		type: 'button'
	}}
>
	Button Link
</Story>
