<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { TextLive } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let textLiveId = '1328';
  let textPostId = '0';
  let hash = '7509269c57de2ee7d4';
  let width;

  const componentName = 'TextLive';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} textLiveId="${textLiveId}" ${
      textPostId && textPostId !== '0' ? `textPostId="${textPostId}" ` : ''
    }hash="${hash}" ${width ? `width={${width}} ` : ''}/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Идентификатор репортажа">
    <Input bind:value="{textLiveId}" />
  </FormItem>

  <FormItem text="Идентификатор записи в репортаже">
    <Input bind:value="{textPostId}" />
  </FormItem>

  <FormItem text="Хэш">
    <Input bind:value="{hash}" />
  </FormItem>

  <FormItem text="Ширина">
    <Input bind:value="{width}" type="number" min="320" placeholder="100%" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <TextLive
      textLiveId="{textLiveId}"
      textPostId="{textPostId}"
      hash="{hash}"
      width="{width}"
    />
  </FormItem>
</Form>
