<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Code from '../components/Code.svelte';
  import { App } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let url = '5327745';
  let mode = 1;
  let height = 24;

  const heights = [18, 20, 22, 24, 30];

  const componentName = 'App';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${(url && `url="${url}" `) || ''}${
      (mode !== 1 && `mode={${mode}} `) || ''
    }${(mode === 3 && height !== 24 && `height={${height}} `) || ''}/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Ссылка">
    <Input bind:value="{url}" placeholder="{window.location.href}" />
  </FormItem>

  <FormItem text="Вид">
    <Select bind:value="{mode}">
      <option value="{1}">Карточка</option>
      <option value="{2}">Участники</option>
      <option value="{3}">Кнопка</option>
    </Select>
  </FormItem>

  {#if mode === 3}
    <FormItem text="Высота кнопки">
      <Select bind:value="{height}">
        {#each heights as h}
          <option value="{h}">
            {h}px
          </option>
        {/each}
      </Select>
    </FormItem>
  {/if}

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <App url="{url}" mode="{mode}" height="{height}" />
  </FormItem>
</Form>
