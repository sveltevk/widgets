<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let pollId;
  export let width = undefined;
  export let pageUrl = undefined;

  const element_id = `vk_poll_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Poll(element_id, { width, pageUrl }, pollId);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
