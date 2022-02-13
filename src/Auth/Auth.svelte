<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';

  export let width = undefined;
  export let onAuth = undefined;
  export let authUrl = undefined;

  const element_id = `vk_auth_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Auth(element_id, { width, onAuth, authUrl });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
