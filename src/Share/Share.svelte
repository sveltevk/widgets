<script>
  // share_options
  export let url = undefined;
  export let title = undefined;
  export let image = undefined;
  export let noparse = undefined;
  export let noVkLinks = undefined;

  // button_options
  export let type = undefined;
  export let text = undefined;

  $: button = VK.Share.button(
    {
      url,
      title,
      image,
      noparse,
      no_vk_links: noVkLinks ? 1 : 0,
    },
    {
      type,
      text,
    },
  );
</script>

{@html button}
