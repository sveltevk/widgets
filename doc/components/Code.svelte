<script>
  import Prism from 'prismjs';
  import 'prism-svelte';

  export let text;
  export let lang = 'svelte';

  $: highlighted = {
    svelte: Prism.highlight(text, Prism.languages.svelte, 'svelte'),
    javascript: Prism.highlight(text, Prism.languages.javascript, 'javascript'),
  }[lang];
</script>

<pre class="language-{lang}">
  <code class="language-{lang}">
    {@html highlighted}
  </code>
</pre>
