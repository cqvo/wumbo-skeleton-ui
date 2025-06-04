<script lang="ts">
  let { options, name, form, id } = $props();
</script>

<select class="select" {name} {form} {id}>
  {#each options as option, index}
    {@const { value, label } = option}
    <option value={value || index}>{label}</option>
  {/each}
</select>