<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Badge from '$lib/atomic/Badge.svelte';
  import { styleColorMap } from "$lib/common/PresetColorMap";

  const { Story } = defineMeta({
    title: 'Components/Atoms/Badge',
    component: Badge,
    tags: ['autodocs'],
    argTypes: {
      style: {
        control: { type: 'radio' },
        options: Object.keys(styleColorMap)
      },
    },
  });
</script>

<Story name="Badge">
  Badge
</Story>