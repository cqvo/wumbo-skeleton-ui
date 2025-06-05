<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Chip from '$lib/atomic/ui/Chip.svelte';
	import { styleColorOptions } from '$lib/common/index.js';

	const { Story } = defineMeta({
		title: 'Atomic/UI/Chip',
		component: Chip,
		tags: ['autodocs']
	});
</script>

<Story name="Chip">Chip</Story>
