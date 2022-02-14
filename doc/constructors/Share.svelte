<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Code from '../components/Code.svelte';
  import { Share } from '../../src/index.js';
  import { importComponent } from '../openapi';
  import Checkbox from '../components/Checkbox.svelte';

  let url = '';
  let title = '';
  let image = '';
  let noparse = false;
  let noVkLinks = false;
  let type = 'round';
  let text = 'Сохранить';

  const componentName = 'Share';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${url ? `url="${url}" ` : ''}${
      title ? `title="${title}" ` : ''
    }${image ? `image="${image}" ` : ''}${noparse ? `noparse" ` : ''}${
      noVkLinks ? `noVkLinks" ` : ''
    }${type !== 'round' ? `type="${type}" ` : ''}${
      text && text !== 'Сохранить' ? `text="${text}" ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Адрес страницы">
    <Input bind:value="{url}" placeholder="{location.href}" />
  </FormItem>
  <FormItem text="Название страницы">
    <Input bind:value="{title}" placeholder="{document.title}" />
  </FormItem>
  <FormItem text="URL картинки-миниатюры">
    <Input bind:value="{image}" />
  </FormItem>

  <FormItem>
    <Checkbox bind:checked="{noparse}">noparse</Checkbox>
  </FormItem>

  <FormItem>
    <Checkbox bind:checked="{noVkLinks}">noVkLinks</Checkbox>
  </FormItem>

  <FormItem text="Внешний вид кнопки">
    <Select bind:value="{type}">
      <option value="round">Кнопка со скругленными углами и со счётчиком</option
      >
      <option value="round_nocount"
        >Кнопка со скругленными углами без счётчика</option
      >
      <option value="button">Кнопка с прямыми углами и со счетчиком</option>
      <option value="button_nocount"
        >Кнопка с прямыми углами без счётчика ссылок</option
      >
      <option value="link">Текстовая ссылка с иконкой ВКонтакте</option>
      <option value="link_noicon">Текстовая ссылка без иконки</option>
    </Select>
  </FormItem>

  <FormItem text="Текст кнопки">
    <Input bind:value="{text}" placeholder="Сохранить" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Share
      url="{url}"
      title="{title}"
      image="{image}"
      noparse="{noparse}"
      noVkLinks="{noVkLinks}"
      type="{type}"
      text="{text}"
    />
  </FormItem>
</Form>
