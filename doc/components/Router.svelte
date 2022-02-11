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

  const hash = writable(location.hash.split('?').shift());

  const hashChange = () => hash.set(location.hash.split('?').shift());

  window.addEventListener('hashchange', hashChange);

  onDestroy(() => window.removeEventListener('hashchange', hashChange));
</script>

<slot this="{{ addPage, hash }}" />
