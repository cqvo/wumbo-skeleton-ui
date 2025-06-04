<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Chip from '$lib/atomic/Chip.svelte';
  import { styleColorMap } from "$lib/common/PresetColorMap";

  const { Story } = defineMeta({
    title: 'Components/Atoms/Chip',
    component: Chip,
    tags: ['autodocs'],
    argTypes: {
      style: {
        control: { type: 'radio' },
        options: Object.keys(styleColorMap)
      },
    },
  });
</script>

<Story name="Chip">
  Chip
</Story>