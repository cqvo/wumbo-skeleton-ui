<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import {
		styleColorMap,
		type StyleColor,
		type PresetColor,
		type ButtonSize
	} from '$lib/common/index.js';

	type ButtonProps = HTMLButtonAttributes & {
		type: NonNullable<HTMLButtonAttributes['type']>;
		style: StyleColor;
		size?: ButtonSize;
		color?: PresetColor;
	};

	let {
		type = 'button',
		style = 'primary',
		size = 'btn-base',
		children,
		color,
		disabled,
		onclick,
		...props
	}: ButtonProps = $props();

	let btnClasses = $derived.by(() => {
		return `btn ${size} ${color || styleColorMap[style]}`;
	});
</script>

<button {type} class={btnClasses} {disabled} {onclick}>
	{@render children?.()}
</button>
