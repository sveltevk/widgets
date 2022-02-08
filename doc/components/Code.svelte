<script>
  import Prism from 'prismjs';
  import 'prism-svelte';

  export let text;

  $: highlighted = Prism.highlight(text, Prism.languages.svelte, 'svelte');
</script>

<pre class="language-svelte">
  <code class="language-svelte">
    {@html highlighted}
  </code>
</pre>
