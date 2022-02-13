<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let url;
  export let mode = undefined;
  export let height = undefined;

  const element_id = `vk_app_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.App(element_id, url, { mode, height });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
