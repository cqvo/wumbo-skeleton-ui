<script lang="ts">
  import { enhance } from '$app/forms';
  let { children, method = 'POST', enhanceFlag, enhanceFn = () => {} } = $props();
</script>

<form {method}
    class="mx-auto w-full max-w-md space-y-4"
    use:enhance={enhanceFn}
>
  {@render children()}
</form>