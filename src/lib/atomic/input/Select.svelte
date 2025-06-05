<script lang="ts">
	import { type HTMLSelectAttributes, type HTMLOptionAttributes } from 'svelte/elements';

	type Props = HTMLSelectAttributes & {
		options: HTMLOptionAttributes[];
	};

	let { options, name }: Props = $props();
	const id = $props.id();
</script>

<select {id} {name} class="select">
	{#each options as option, index}
		{@const { value, label } = option}
		<option {value}>{label}</option>
	{/each}
</select>
