<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { Article } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let url = '@tassagency-mayakovskiy';
  let width;

  const componentName = 'Article';
  $: getCode =
    importComponent(componentName) + `<${componentName} url="${url}" />`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Ссылка на статью">
    <Input bind:value="{url}" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Article url="{url}" />
  </FormItem>
</Form>
