<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';

  export let width = undefined;
  export let height = undefined;
  export let limit = undefined;
  export let mini = undefined;
  export let norealtime = undefined;

  const element_id = `vk_comments_browse_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.CommentsBrowse(element_id, {
        width,
        height,
        limit,
        mini: mini === 'auto' ? mini : mini ? 1 : 0,
        norealtime: norealtime ? 1 : 0,
      });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
