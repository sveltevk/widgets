<style>
  .FormItem {
    display: block;
    padding: 12px 16px;
  }

  .FormItem p {
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
  export let text;
</script>

<div class="FormItem">
  <p>{text}</p>
  <slot />
</div>
