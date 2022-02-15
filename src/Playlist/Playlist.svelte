<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let ownerId;
  export let playlistId;
  export let hash;
  export let width = undefined;

  const element_id = `vk_playlist_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Playlist(element_id, ownerId, playlistId, hash, { width });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
