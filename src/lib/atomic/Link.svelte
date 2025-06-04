<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { type ButtonSize } from '$lib/atomic/Button.svelte';
  import { styleColorMap, type PresetColorMap } from "$lib/common/PresetColorMap";

  type AnchorProps = HTMLAnchorAttributes & {
    type: 'link' | 'button',
    style: PresetColorMap,
    size?: ButtonSize,
    color?: string,
  }

  let {
    type = 'link',
    style = 'primary',
    size = 'btn-base',
    children, href, target, color,
    ...props
  }: AnchorProps = $props();

  let anchorClasses = $derived(
    type === 'link' ? `anchor` : `btn ${size} ${color ?? styleColorMap[style]}`
  );
</script>

<a
    {href}
    {target}
    class={anchorClasses}
>
  {@render children?.()}
</a>