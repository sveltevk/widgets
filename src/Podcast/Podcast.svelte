<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let episode;
  export let width;

  const element_id = `vk_podcast_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Podcast(element_id, episode, { width });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
