<style>
  .Card {
    position: relative;
    background: #fff;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  .Card__in {
    position: relative;
    z-index: 2;
    border-radius: inherit;
  }

  .Card--md-outline::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    display: block;
    border: 1px solid rgb(225, 227, 230);
    z-index: 1;
    box-sizing: border-box;
    border-radius: inherit;
  }
</style>

<div class="Card Card--md-outline">
  <div class="Card__in">
    <slot />
  </div>
</div>
