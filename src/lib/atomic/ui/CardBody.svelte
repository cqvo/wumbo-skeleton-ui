<script lang="ts">
	import { type HTMLAttributes } from 'svelte/elements';

	type CardBodyProps = HTMLAttributes<HTMLParagraphElement> & {
		title?: string;
		subtitle?: string;
		bodyClasses?: string;
		contentClasses?: string;
		titleClasses?: string;
		subtitleClasses?: string;
	};

	let {
		children,
		title,
		subtitle,
		bodyClasses = 'space-y-4 p-4',
		contentClasses = 'opacity-60',
		titleClasses = 'h3',
		subtitleClasses = 'h6'
	}: CardBodyProps = $props();
</script>

<div class={bodyClasses}>
	<div>
		{#if subtitle}
			<h2 class={subtitleClasses}>{subtitle}</h2>
		{/if}
		{#if title}
			<h3 class={titleClasses}>{title}</h3>
		{/if}
	</div>
	<p class={contentClasses}>
		{@render children?.()}
	</p>
</div>
