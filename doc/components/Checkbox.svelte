<script>
  export let checked = false;
</script>

<label>
  <input type="checkbox" bind:checked {...$$restProps} />
  <slot />
</label>
