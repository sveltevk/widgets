<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let url;

  const element_id = `vk_article_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Article(element_id, url);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
