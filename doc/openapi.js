export const OPEN_API_VERSION = 168;
export const VK_API_VERSION = '5.131';

export const step1 = `<!-- Put this script tag to the <head> of your page -->
<script
  type="text/javascript"
  src="https://vk.com/js/api/openapi.js?${OPEN_API_VERSION}"
  charset="windows-1251"
></script>`;

export const step2 = (apiID) => `<script type="text/javascript">
  VK.init({apiId: ${apiID});
</script>`;

export const importComponent = (component) =>
  `<script>\n  import { ${component} } from '@sveltevk/widgets';\n</script>\n\n`;
