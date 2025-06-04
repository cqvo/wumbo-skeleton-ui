<script lang="ts" module>
  export const inputFieldTypeOptions = [
    'text', 'password', 'email',
    'number', 'url', 'search',
    'tel', 'date', 'datetime-local',
    'month', 'week', 'time',
  ] as const;
  export type InputFieldType = typeof inputFieldTypeOptions[number];
</script>

<script lang="ts">
  type InputProps = {
    type: InputFieldType,
    name: string,
    placeholder?: string,
  }
  let { type = 'text', name, placeholder, label, form }: InputProps = $props();
</script>

<label class="label">
  <span class="label-text">
    {label}
  </span>
  <input {type} {name} class="input" {placeholder} {form} />
</label>