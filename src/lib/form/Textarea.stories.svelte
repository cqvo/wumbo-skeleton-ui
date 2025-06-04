<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Textarea from '$lib/form/Textarea.svelte';

  const { Story } = defineMeta({
    title: 'Components/Forms/Textarea',
    component: Textarea,
    tags: ['autodocs']
  });
</script>

<Story name="Text Input" args={{
  label: 'Textarea', rows: '4',
}} />