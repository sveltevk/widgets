<script>
  import { onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  export let pages = [];

  export const addPage = (link, name) => {
    pages = [
      ...pages,
      {
        name,
        link,
      },
    ];
  };

  export const hash = writable(location.hash.split('?').shift());

  const hashChange = () => hash.set(location.hash.split('?').shift());

  window.addEventListener('hashchange', hashChange);

  onDestroy(() => window.removeEventListener('hashchange', hashChange));
</script>

{#each pages as page}
  <!-- svelte-ignore a11y-missing-content -->
  <a id="{page.link}"></a>
{/each}
<slot this="{{ addPage, hash }}" />
