<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { Auth } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let width;

  const componentName = 'Auth';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${width ? `width={${width}} ` : ''}/>`;

  let user;

  const onAuth = (u) => (user = u);
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Ширина">
    <Input bind:value="{width}" type="number" placeholder="200px" min="200" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Auth width="{width}" onAuth="{onAuth}" />
  </FormItem>

  {#if user}
    <FormItem text="onAuth">
      <Code text="{JSON.stringify(user, null, ' ')}" lang="javascript" />
    </FormItem>
  {/if}
</Form>
