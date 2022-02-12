<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { Poll } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let pollId = '4_8d7e0e6c779735ef2e';
  let width;

  const componentName = 'Poll';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} pollId="${pollId}" ${
      width ? `width={${width}} ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Опрос">
    <Input bind:value="{pollId}" />
  </FormItem>
  <FormItem text="Ширина">
    <Input bind:value="{width}" type="number" min="300" placeholder="100%" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Poll pollId="{pollId}" width="{width}" />
  </FormItem>
</Form>
