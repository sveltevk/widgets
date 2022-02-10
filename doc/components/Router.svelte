<script>
  import { onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  export let pages = [];

  const addPage = (link, name) => {
    pages = [
      ...pages,
      {
        name,
        link,
      },
    ];
  };

  const hash = writable(location.hash);

  const hashChange = () => hash.set(location.hash);

  window.addEventListener('hashchange', hashChange);

  onDestroy(() => window.removeEventListener('hashchange', hashChange));
</script>

<slot this="{{ addPage, hash }}" />
