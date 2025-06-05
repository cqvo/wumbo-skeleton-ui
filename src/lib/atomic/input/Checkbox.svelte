<script lang="ts">
	import { type HTMLLabelAttributes, type HTMLInputAttributes } from "svelte/elements";
	type Props = HTMLLabelAttributes & HTMLInputAttributes & {}
	let { name }: Props = $props();
</script>

<label class="flex items-center space-x-2">
	<input {name} class="checkbox" type="checkbox" checked />
	<p>Option 1</p>
</label>
