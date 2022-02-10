<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Code from '../components/Code.svelte';
  import { Like } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let type = 'full';
  let width = 350;
  let height = 22;
  let verb = false;
  let pageTitle = '';
  let pageUrl = '';
  let pageImage = '';
  let pageId = '';

  const heights = [18, 20, 22, 24, 30];

  const componentName = 'Like';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${type !== 'full' ? `type="${type}" ` : ''}${
      type === 'full' && width !== 350 ? `width={${width}} ` : ''
    }${height !== 22 ? `height={${height}} ` : ''}${verb ? `verb ` : ''}${
      pageTitle ? `pageTitle="${pageTitle}" ` : ''
    }${pageUrl ? `pageUrl="${pageUrl}" ` : ''}${
      pageImage ? `pageImage="${pageImage}" ` : ''
    }${pageId ? `pageId="${pageId}" ` : ''}/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Внешний вид кнопки">
    <Select bind:value="{type}">
      <option value="full">Кнопка с текстовым счётчиком</option>
      <option value="button">Кнопка с миниатюрным счётчиком</option>
      <option value="mini">Миниатюрная кнопка</option>
      <option value="vertical">Миниатюрная кнопка, счётчик сверху</option>
    </Select>
  </FormItem>

  {#if type === 'full'}
    <FormItem text="Ширина кнопки">
      <Input bind:value="{width}" type="number" placeholder="350" min="200" />
    </FormItem>
  {/if}

  <FormItem text="Высота кнопки">
    <Select bind:value="{height}">
      {#each heights as h}
        <option value="{h}">
          {h}px
        </option>
      {/each}
    </Select>
  </FormItem>

  <FormItem text="Надписи на кнопке">
    <Select bind:value="{verb}">
      <option value="{true}">Это интересно</option>
      <option value="{false}">Нравится</option>
    </Select>
  </FormItem>

  <FormItem text="Название страницы">
    <Input bind:value="{pageTitle}" placeholder="{document.title}" />
  </FormItem>
  <FormItem text="Адрес страницы">
    <Input bind:value="{pageUrl}" placeholder="{location.href}" />
  </FormItem>
  <FormItem text="URL картинки-миниатюры">
    <Input bind:value="{pageImage}" />
  </FormItem>

  <FormItem text="Внутренний идентификатор страницы">
    <Input bind:value="{pageId}" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Like
      type="{type}"
      width="{width}"
      height="{height}"
      verb="{verb}"
      pageTitle="{pageTitle}"
      pageUrl="{pageUrl}"
      pageImage="{pageImage}"
      pageId="{pageId}"
    />
  </FormItem>
</Form>
