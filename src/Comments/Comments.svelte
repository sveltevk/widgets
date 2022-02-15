<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';

  export let width = undefined;
  export let height = undefined;
  export let limit = undefined;
  export let attach = undefined;
  export let autoPublish = undefined;
  export let norealtime = undefined;
  export let pageUrl = undefined;
  export let pageId = undefined;

  const element_id = `vk_comments_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Comments(element_id, {
        width,
        height,
        limit,
        attach,
        autoPublish: autoPublish ? 1 : 0,
        norealtime: norealtime ? 1 : 0,
        pageUrl,
        page_id: pageId,
      });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
