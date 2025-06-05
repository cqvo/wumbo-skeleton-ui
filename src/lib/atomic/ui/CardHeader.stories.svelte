<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CardHeader from '$lib/atomic/ui/CardHeader.svelte';

	const { Story } = defineMeta({
		title: 'Atomic/Content/Card Header',
		component: CardHeader
	});
</script>

<Story
	name="Card Header"
	args={{
		imageSrc:
			'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	}}>Card Header</Story
>
