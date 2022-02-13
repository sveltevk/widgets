<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let textLiveId;
  export let textPostId = '0';
  export let hash;
  export let width = undefined;

  const element_id = `vk_textlive_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.TextLive(element_id, textLiveId, textPostId, hash, { width });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
