<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';

  export let groupId;
  export let width = undefined;
  export let height = undefined;
  export let mode = undefined;
  export let noCover = undefined;
  export let wide = undefined;
  export let color1 = undefined;
  export let color2 = undefined;
  export let color3 = undefined;

  const element_id = `vk_group_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Group(
        element_id,
        {
          width,
          height,
          mode,
          no_cover: noCover ? 1 : 0,
          wide: wide ? 1 : 0,
          color1,
          color2,
          color3,
        },
        groupId,
      );
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
