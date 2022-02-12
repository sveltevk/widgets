<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate } from 'svelte';
  export let oid;
  export let text = 'Напишите нам';
  export let height = 24;

  const element_id = `vk_contact_us_${(total_id += 1)}`;

  afterUpdate(() => {
    const element = document.getElementById(element_id);
    while (element.firstChild) {
      element.firstChild.remove();
    }

    try {
      VK.Widgets.ContactUs(element_id, { text, height }, oid);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div id="{element_id}"></div>
