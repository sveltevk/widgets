<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { Podcast } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let episode = '-147415323_456239337';
  let width;

  const componentName = 'Podcast';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} episode="${episode}" ${
      width ? `width={${width}} ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Эпизод">
    <Input bind:value="{episode}" />
  </FormItem>
  <FormItem text="Ширина">
    <Input bind:value="{width}" type="number" placeholder="100%" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Podcast episode="{episode}" width="{width}" />
  </FormItem>
</Form>
