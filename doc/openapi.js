const OPENAPI_VERSION = 168;

export const step1 = `<!-- Put this script tag to the <head> of your page -->
<script
  type="text/javascript"
  src="https://vk.com/js/api/openapi.js?${OPENAPI_VERSION}"
  charset="windows-1251"
></script>`;

export const step2 = (apiID) => `<script type="text/javascript">
  VK.init({apiId: ${apiID});
</script>`;

export const importComponent = (component) =>
  `<script>\n  import { ${component} } from '@sveltevk/widgets';\n</script>\n\n`;
