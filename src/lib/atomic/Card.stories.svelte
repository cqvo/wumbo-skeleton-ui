<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from '$lib/atomic/Card.svelte';
  import { faker } from '@faker-js/faker';

  const { Story } = defineMeta({
    title: 'Components/Atoms/Card',
    component: Card,
    tags: ['autodocs'],
  });

</script>

<Story name="Simple Card" args={{
  title: 'Skeleton is Awesome',
  }}
>
  {faker.word.words(50)}
</Story>

<Story name="Fancy Card" args={{
  title: 'Skeleton is Awesome',
  subtitle: 'Announcement',
  headerImage: 'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}}>
  {faker.word.words(50)}
</Story>