<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Code from '../components/Code.svelte';
  import { Recommended } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let limit = 5;
  let max = undefined;
  let period = 'week';
  let verb = false;
  let sort = 'friend_like';
  let target = 'parent';

  const componentName = 'Recommended';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${limit && limit !== 5 ? `limit={${limit}} ` : ''}${
      max && max !== limit * 4 ? `max={${max}} ` : ''
    }${period !== 'week' ? `period="${period}" ` : ''}${verb ? `verb ` : ''}${
      sort !== 'friend_like' ? `sort="${sort}" ` : ''
    }${target !== 'parent' ? `target="${target}" ` : ''} />`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Количество записей">
    <Input bind:value="{limit}" placeholder="5" type="number" min="0" />
  </FormItem>

  <FormItem text="Максимальное количество записей">
    <Input bind:value="{max}" type="number" placeholder="{limit * 4}" min="0" />
  </FormItem>

  <FormItem text="Период выборки">
    <Select bind:value="{period}">
      <option value="day">Последние 24 часа</option>
      <option value="week">Последние 7 дней</option>
      <option value="month">Последние 30 дней</option>
    </Select>
  </FormItem>

  <FormItem text="Формулировки текста">
    <Select bind:value="{verb}">
      <option value="{true}">Это интересно</option>
      <option value="{false}">Нравится</option>
    </Select>
  </FormItem>

  <FormItem text="Способ сортировки материалов">
    <Select bind:value="{sort}">
      <option value="friend_likes"
        >По количеству друзей, оставивших отметки «Нравится»</option
      >
      <option value="likes">По общему количеству отметок</option>
    </Select>
  </FormItem>

  <FormItem text="target у ссылок на страницы сайта">
    <Select bind:value="{target}">
      <option value="blank">Открывать на новой странице</option>
      <option value="top">Открывать в полном окне браузера</option>
      <option value="parent"
        >Открывать во фрейме, который содержит виджет</option
      >
    </Select>
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Recommended
      limit="{limit}"
      max="{max}"
      period="{period}"
      verb="{verb}"
      sort="{sort}"
      target="{target}"
    />
  </FormItem>
</Form>
