<script>
  export let router;
  export let link;
  export let name;

  router.addPage(link, name);
  const hash = router.hash;
</script>

{#if '#' + link === $hash}
  <slot />
{/if}
