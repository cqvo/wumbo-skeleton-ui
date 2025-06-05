<script lang="ts">
	let { label, placeholder, rows = '4' } = $props();
</script>

<label class="label">
	<span class="label-text">
		{label}
	</span>
	<textarea class="textarea" {rows} {placeholder} />
</label>
