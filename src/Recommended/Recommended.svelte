<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';

  export let limit = undefined;
  export let max = undefined;
  export let period = undefined;
  export let verb = undefined;
  export let sort = undefined;
  export let target = undefined;

  const element_id = `vk_recommended_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.Recommended(element_id, {
        limit,
        max,
        period,
        verb: verb ? 1 : 0,
        sort,
        target,
      });
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
