<script context="module">
  let total_id = 0;
</script>

<script>
  import { afterUpdate, onDestroy } from 'svelte';
  let widget = undefined;

  export let group;

  export let onCanNotWrite = undefined;
  export let welcomeScreen = undefined;
  export let expandTimeout = undefined;
  export let expanded = undefined;
  export let widgetPosition = undefined;
  export let buttonType = undefined;
  export let disableButtonTooltip = undefined;
  export let tooltipButtonText = undefined;
  export let disableNewMessagesSound = undefined;
  export let disableExpandChatSound = undefined;
  export let disableTitleChange = undefined;

  export const destroy = () => {
    if (widget) {
      widget.destroy(widget_id);
    }
  };

  export const expand = (options) => {
    if (widget) {
      widget.expand(options);
    }
  };

  export const stopTitleAnimation = () => {
    if (widget) {
      widget.stopTitleAnimation();
    }
  };

  export const minimize = () => {
    if (widget) {
      widget.minimize();
    }
  };

  const widget_id = `vk_community_messages_${(total_id += 1)}`;

  afterUpdate(() => {
    destroy();

    try {
      widget = VK.Widgets.CommunityMessages(widget_id, group, {
        onCanNotWrite,
        welcomeScreen: welcomeScreen ? 1 : 0,
        expandTimeout,
        expanded: expanded ? 1 : undefined,
        widgetPosition,
        buttonType,
        disableButtonTooltip: disableButtonTooltip ? 1 : undefined,
        tooltipButtonText,
        disableNewMessagesSound: disableNewMessagesSound ? 1 : undefined,
        disableExpandChatSound: disableExpandChatSound ? 1 : undefined,
        disableTitleChange: disableTitleChange ? 1 : undefined,
      });
    } catch (error) {
      console.error(error);
    }
  });

  onDestroy(destroy);
</script>

<div id="{widget_id}"></div>
