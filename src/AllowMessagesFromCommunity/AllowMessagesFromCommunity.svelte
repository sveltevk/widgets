<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let groupId;
  export let height = 24;

  const widget_id = `vk_allow_messages_from_community_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(widget_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.AllowMessagesFromCommunity(widget_id, { height }, groupId);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{widget_id}"></div>
