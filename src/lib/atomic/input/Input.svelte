<script lang="ts">
	import { type HTMLInputAttributes } from "svelte/elements";
	type InputProps = HTMLInputAttributes & {
		label: string;
		type: NonNullable<HTMLInputAttributes['type']>;
		name: NonNullable<HTMLInputAttributes['name']>;
		labelClasses: string;
		spanClasses: string;
		inputClasses: string;
	};

	let {
		label,
		name,
		type = 'text',
		placeholder,
			labelClasses = 'label', spanClasses = 'label-text', inputClasses = 'input', ...props
	}: InputProps = $props();
</script>

<label class={labelClasses}>
	<span class={spanClasses}>{label}</span>
	<input {name} class={inputClasses} {type} {placeholder} />
</label>