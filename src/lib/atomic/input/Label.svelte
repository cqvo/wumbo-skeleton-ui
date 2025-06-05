<script lang="ts">
  let { children, label, labelClasses = 'label' } = $props();
</script>

<label class={labelClasses}>
  <span class="label-text">{label}</span>
  {@render children?.()}
</label>