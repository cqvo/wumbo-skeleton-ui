<script lang="ts">
	import { type PresetColor, styleColorMap, type StyleColor } from '$lib/common/PresetColorMap.js';
	import { type HTMLAttributes } from 'svelte/elements';

	type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
		style: StyleColor;
		color?: PresetColor;
	};

	let { children, style = 'primary', color }: BadgeProps = $props();

	let badgeClasses = $derived.by(() => {
		return `badge ${color || styleColorMap[style]}`;
	});
</script>

<span class={badgeClasses}>
	{@render children?.()}
</span>
