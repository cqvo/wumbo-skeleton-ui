<script lang="ts" module>
  export const buttonSizeOptions = ['btn-sm', 'btn-base', 'btn-lg'] as const;
  export type ButtonSize = typeof buttonSizeOptions[number];
</script>

<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { styleColorMap, type PresetColorMap } from "$lib/common/PresetColorMap";
  import { enhance } from '$app/forms';

  type ButtonProps = HTMLButtonAttributes & {
    type: NonNullable<HTMLButtonAttributes['type']>,
    style: PresetColorMap,
    size?: ButtonSize,
    color?: string,
  }

  let {
    type = 'button',
    style = 'primary',
    size = 'btn-base',
    children, color, disabled, onclick, enhanceFn,
    ...props
  }: ButtonProps = $props();

  let btnClasses = $derived.by(() => {
    return `btn ${size} ${color || styleColorMap[style]}`
  });
</script>

<button
    {type}
    class={btnClasses}
    {disabled}
    {onclick}
>
  {@render children()}
</button>