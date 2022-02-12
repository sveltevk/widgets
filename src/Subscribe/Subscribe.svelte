<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let ownerId;
  export let mode = undefined;
  export let soft = undefined;

  const element_id = `vk_subscribe_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Subscribe(element_id, { mode, soft: soft ? 1 : 0 }, ownerId);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
