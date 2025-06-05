<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import {
		styleColorMap,
		type StyleColor,
		type PresetColor,
		type ButtonSize
	} from '$lib/common/index.js';

	type AnchorProps = HTMLAnchorAttributes & {
		type: 'link' | 'button';
		style: StyleColor;
		size?: ButtonSize;
		color?: PresetColor;
	};

	let {
		type = 'link',
		style = 'primary',
		size = 'btn-base',
		children,
		href,
		target,
		color,
		...props
	}: AnchorProps = $props();

	let anchorClasses = $derived(
		type === 'button' ? `btn ${size} ${color || styleColorMap[style]}` : 'anchor'
	);
</script>

<a {href} {target} class={anchorClasses}>
	{@render children?.()}
</a>
