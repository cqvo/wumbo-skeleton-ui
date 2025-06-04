<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Button, { buttonSizeOptions } from '$lib/atomic/Button.svelte';
  import { styleColorMap } from "$lib/common/PresetColorMap";

  const { Story } = defineMeta({
    title: 'Components/Atoms/Button',
    component: Button,
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
  });
</script>

<Story name="On Click"
  args={{ type: 'button', onclick: fn() }}
>
  On Click
</Story>

<Story name="Submit"
  args={{ type: 'submit' }}
>
  Submit
</Story>