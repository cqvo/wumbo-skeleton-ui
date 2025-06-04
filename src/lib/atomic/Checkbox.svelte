<script lang="ts">
  let {
    name
  } = $props();
</script>

<label class="flex items-center space-x-2">
  <input {name} class="checkbox" type="checkbox" checked />
  <p>Option 1</p>
</label>