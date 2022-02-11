<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Code from '../components/Code.svelte';
  import { Bookmarks } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let url = '';
  let height = 24;

  const heights = [18, 20, 22, 24, 30];

  const componentName = 'Bookmarks';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${url ? `url="${url}" ` : ''}${
      height !== 24 ? `height={${height}} ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Ссылка">
    <Input bind:value="{url}" placeholder="{window.location.href}" />
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
    <Bookmarks url="{url}" height="{height}" />
  </FormItem>
</Form>
