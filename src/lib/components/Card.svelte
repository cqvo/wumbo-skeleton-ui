<script lang="ts">
	import CardHeader from '$lib/atomic/ui/CardHeader.svelte';
	import CardBody from '$lib/atomic/ui/CardBody.svelte';
	import CardFooter from '$lib/atomic/ui/CardFooter.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CardHeaderProps, CardFooterProps, CardBodyProps } from '$lib/common/index.js';

	type Props = HTMLAttributes<HTMLElement> &
		CardBodyProps & {
			cardClasses: string;
			headerArgs?: CardHeaderProps;
			footerArgs?: CardFooterProps;
		};

	let {
		children,
		cardClasses = 'card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden',
		headerArgs,
		footerArgs,
		...bodyArgs
	}: Props = $props();
</script>

<div class={cardClasses}>
	{#if headerArgs}
		<CardHeader {...headerArgs}></CardHeader>
	{/if}

	<CardBody {...bodyArgs}>
		{@render children()}
	</CardBody>

	{#if footerArgs}
		<CardFooter {...footerArgs}></CardFooter>
	{/if}
</div>
