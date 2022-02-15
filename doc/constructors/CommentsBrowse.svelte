<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { CommentsBrowse } from '../../src/index.js';
  import { importComponent } from '../openapi';
  import Checkbox from '../components/Checkbox.svelte';
  import Select from '../components/Select.svelte';

  let width = undefined;
  let height = undefined;
  let limit = undefined;
  let mini = 'auto';
  let norealtime = false;

  const componentName = 'CommentsBrowse';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${width ? `width={${width}} ` : ''}${
      height ? `height={${height}} ` : ''
    }${limit ? `limit={${limit}} ` : ''}${
      mini !== 'auto' ? `mini={${mini}} ` : ''
    }${norealtime ? `norealtime ` : ''}/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Ширина">
    <Input bind:value="{width}" type="number" placeholder="100%" min="0" />
  </FormItem>
  <FormItem text="Высота">
    <Input bind:value="{height}" type="number" placeholder="0" min="0" />
  </FormItem>

  <FormItem text="Количество комментариев">
    <Input bind:value="{limit}" placeholder="5" type="number" min="0" />
  </FormItem>

  <FormItem text="Вид блока">
    <Select bind:value="{mini}">
      <option value="auto">Авто</option>
      <option value="{true}">Минималистичный</option>
      <option value="{false}">Обычный</option>
    </Select>
  </FormItem>

  <FormItem>
    <Checkbox bind:checked="{norealtime}"
      >Не обновлять в реальном времени</Checkbox
    >
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <CommentsBrowse
      width="{width}"
      height="{height}"
      limit="{limit}"
      mini="{mini}"
      norealtime="{norealtime}"
    />
  </FormItem>
</Form>
