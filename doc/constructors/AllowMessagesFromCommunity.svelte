<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Code from '../components/Code.svelte';
  import { AllowMessagesFromCommunity } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let groupId = 2158488;
  let height = 24;

  const heights = [22, 24, 30];

  const componentName = 'AllowMessagesFromCommunity';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} groupId={${groupId}} ${
      height !== 24 ? `height={${height}} ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Идентификатор сообщества">
    <Input bind:value="{groupId}" type="number" />
  </FormItem>

  <FormItem text="Высота кнопки">
    <Select bind:value="{height}">
      {#each heights as h}
        <option value="{h}">
          {h}px
        </option>
      {/each}
    </Select>
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <AllowMessagesFromCommunity groupId="{groupId}" height="{height}" />
  </FormItem>
</Form>
