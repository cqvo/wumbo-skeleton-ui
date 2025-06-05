<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements';
	import { type CardHeaderProps } from '$lib/common/index.js';

	type Props = HTMLAttributes<HTMLSpanElement> & CardHeaderProps;

	let {
		children,
		imageSrc,
		imageClasses = 'aspect-[21/9] w-full grayscale hue-rotate-90',
		imageAlt = 'banner',
		headerClasses,
		fallbackClasses
	}: Props = $props();
</script>

<header class={headerClasses}>
	{#if imageSrc}
		<img src={imageSrc} class={imageClasses} alt={imageAlt} />
	{:else if children}
		<span class={fallbackClasses}>
			{@render children()}
		</span>
	{/if}
</header>
