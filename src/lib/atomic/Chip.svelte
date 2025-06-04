<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { styleColorMap, type PresetColorMap } from "$lib/common/PresetColorMap";

  let { children, style = 'primary', color } = $props();

  let chipClasses = $derived.by(() => {
    return `chip ${color || styleColorMap[style]}`
  });
</script>

<button type="button" class={chipClasses}>
  {@render children()}
</button>