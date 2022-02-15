<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { Playlist } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let ownerId = -147845620;
  let playlistId = 5;
  let hash = 'c09c1c34cdf7190efb';
  let width;

  const componentName = 'Playlist';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} textLiveId="${ownerId}" playlistId="${playlistId}" hash="${hash}" ${
      width ? `width={${width}} ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Идентификатор владельца">
    <Input bind:value="{ownerId}" />
  </FormItem>

  <FormItem text="Идентификатор плейлиста">
    <Input bind:value="{playlistId}" />
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
    <Playlist
      ownerId="{ownerId}"
      playlistId="{playlistId}"
      hash="{hash}"
      width="{width}"
    />
  </FormItem>
</Form>
