<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Link from './Link.svelte';
  import { buttonSizeOptions } from '$lib/atomic/Button.svelte';
  import { styleColorMap } from "$lib/common/PresetColorMap";

  const { Story } = defineMeta({
    title: 'Components/Atoms/Link',
    component: Link,
    tags: ['autodocs'],
    argTypes: {
      style: {
        control: { type: 'radio' },
        options: Object.keys(styleColorMap)
      },
      size: {
        control: { type: 'select' },
        options: buttonSizeOptions
      }
    },
    args: {
      href: 'https://www.google.com',
    }
  });
</script>

<Story name="Text" args={{
}}>
  Simple Link
</Story>

<Story name="Button"
   args={{
      type: 'button',
   }}
>
  Button Link
</Story>