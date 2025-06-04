<script lang="ts">
  let { children,
    headerImage, headerClasses,
    title, titleClasses,
    subtitle, subtitleClasses,
    contentClasses,
    ...props } = $props();
</script>

{#snippet header(headerImage, headerClasses)}
  <header>
    <img src={headerImage} class="{headerClasses || 'aspect-[21/9] w-full grayscale hue-rotate-90'}" alt="banner" />
  </header>
{/snippet}

{#snippet titles(title, subtitle, titleClasses, subtitleClasses)}
  <div>
    {#if subtitle}
      <h2 class="{subtitleClasses || 'h6'}">{subtitle}</h2>
    {/if}
    {#if title}
      <h3 class="{titleClasses || 'h3'}">{title}</h3>
    {/if}
  </div>
{/snippet}

{#snippet footer()}
  <footer class="flex items-center justify-between gap-4 p-4">
    <small class="opacity-60">By Alex</small>
    <small class="opacity-60">On {new Date().toLocaleDateString()}</small>
  </footer>
{/snippet}

<article
    class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
>
  {#if headerImage}
    {@render header(headerImage)}
  {/if}
  <main class="{title ? 'space-y-4' : ''} p-4">
    {@render titles(title, subtitle, titleClasses, subtitleClasses)}
    <p class={contentClasses || 'opacity-60'}>
      {@render children()}
    </p>
  </main>
</article>