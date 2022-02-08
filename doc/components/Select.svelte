<script>
  export let value;
</script>

<select bind:value {...$$restProps}>
  <slot />
</select>
