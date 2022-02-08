<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let episode;
  export let width;

  const widget_id = `vk_podcast_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(widget_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Podcast(widget_id, episode, { width });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{widget_id}"></div>
