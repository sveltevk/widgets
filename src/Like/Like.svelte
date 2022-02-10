<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';

  export let type = undefined;
  export let width = undefined;
  export let height = undefined;
  export let verb = undefined;
  export let pageTitle = undefined;
  export let pageUrl = undefined;
  export let pageImage = undefined;
  export let pageId = undefined;

  const widget_id = `vk_like_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(widget_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Like(
        widget_id,
        {
          type,
          width,
          height,
          verb,
          pageTitle,
          pageUrl,
          pageImage,
        },
        pageId,
      );
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{widget_id}"></div>
