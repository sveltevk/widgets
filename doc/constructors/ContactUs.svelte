<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Code from '../components/Code.svelte';
  import { ContactUs } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let oid = -20003922;
  let text = 'Напишите нам';
  let height = 24;

  const heights = [18, 20, 22, 24, 30];

  const componentName = 'ContactUs';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} oid={${oid}} ${text ? `text="${text}" ` : ''}${
      height !== 24 ? `height={${height}} ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Идентификатор пользователя или сообщества">
    <Input bind:value="{oid}" type="number" />
  </FormItem>
  <FormItem text="Тест">
    <Input bind:value="{text}" placeholder="Напишите нам" />
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
    <ContactUs oid="{oid}" text="{text}" height="{height}" />
  </FormItem>
</Form>
