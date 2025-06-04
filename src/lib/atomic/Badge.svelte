<script lang="ts">
  import { styleColorMap, type PresetColorMap } from "$lib/common/PresetColorMap";

  let { children, style = 'primary', color } = $props();

  let badgeClasses = $derived.by(() => {
    return `badge ${color || styleColorMap[style]}`
  });
</script>

<span class={badgeClasses}>
  {@render children()}
</span>