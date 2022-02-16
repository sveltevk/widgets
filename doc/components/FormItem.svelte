<style>
  .FormItem {
    display: block;
    margin: 12px 16px;
  }

  .FormItem p,
  .FormItem :global(label) {
    padding-top: 2px;
    padding-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #818c99;

    font-weight: 400;

    margin: 0;
    font-size: 14px;
    line-height: 18px;
  }

  .FormItem :global(pre) {
    margin: 0;
  }
</style>

<script>
  export let text = '';
</script>

<div class="FormItem">
  {#if text}
    <p>{text}</p>
  {/if}
  <slot />
</div>
