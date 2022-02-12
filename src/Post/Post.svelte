<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let ownerId;
  export let postId;
  export let hash;
  export let width = undefined;

  const widget_id = `vk_post_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(widget_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Post(widget_id, ownerId, postId, hash, { width });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{widget_id}"></div>
