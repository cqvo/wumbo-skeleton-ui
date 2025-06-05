<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { type PresetColor, styleColorMap, type StyleColor } from '$lib/common/index.js';

	type ChipProps = HTMLButtonAttributes & {
		style: StyleColor;
		color?: PresetColor;
	};

	let { children, style = 'primary', color }: ChipProps = $props();

	let chipClasses = $derived.by(() => {
		return `chip ${color || styleColorMap[style]}`;
	});
</script>

<button type="button" class={chipClasses}>
	{@render children?.()}
</button>
