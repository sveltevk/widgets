<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';

  export let width = 200;
  export let onAuth = undefined;
  export let authUrl = undefined;

  const widget_id = `vk_auth_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(widget_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Auth(widget_id, { width, onAuth, authUrl });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{widget_id}"></div>
