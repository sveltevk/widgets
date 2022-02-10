<script>
  export let checked;
</script>

<label>
  <input type="checkbox" bind:checked {...$$restProps} />
  <slot />
</label>
