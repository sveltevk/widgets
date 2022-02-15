<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { Comments } from '../../src/index.js';
  import { importComponent } from '../openapi';
  import Checkbox from '../components/Checkbox.svelte';

  let attachGraffiti = true;
  let attachPhoto = true;
  let attachVideo = true;
  let attachAudio = true;
  let attachLink = true;

  $: attachAllCheck =
    attachGraffiti && attachPhoto && attachVideo && attachAudio && attachLink;

  $: attachText = [
    { name: 'graffiti', enabled: attachGraffiti },
    { name: 'photo', enabled: attachPhoto },
    { name: 'video', enabled: attachVideo },
    { name: 'audio', enabled: attachAudio },
    { name: 'link', enabled: attachLink },
  ]
    .filter((item) => {
      return item.enabled;
    })
    .map((item) => {
      return item.name;
    })
    .join(',');

  $: attach = attachAllCheck ? '*' : attachText ? attachText : false;

  let width = undefined;
  let height = undefined;
  let limit = undefined;
  let autoPublish = false;
  let norealtime = false;
  let pageUrl = undefined;
  let pageId = undefined;

  const componentName = 'Comments';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${width ? `width={${width}} ` : ''}${
      height ? `height={${height}} ` : ''
    }${limit ? `limit={${limit}} ` : ''}${
      attach === false
        ? `attach={false} `
        : attach !== '*'
        ? `attach="${attach}" `
        : ''
    }${autoPublish ? `autoPublish ` : ''}${norealtime ? `norealtime ` : ''}${
      pageUrl ? `pageUrl="${pageUrl}" ` : ''
    }${pageId ? `pageId="${pageId}" ` : ''}/>`;
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

  <FormItem text="Медиа">
    <Checkbox bind:checked="{attachGraffiti}">Граффити</Checkbox>
    <Checkbox bind:checked="{attachPhoto}">Фотографии</Checkbox>
    <Checkbox bind:checked="{attachVideo}">Видео</Checkbox>
    <Checkbox bind:checked="{attachAudio}">Аудио</Checkbox>
    <Checkbox bind:checked="{attachLink}">Ссылки</Checkbox>
  </FormItem>

  <FormItem>
    <Checkbox bind:checked="{autoPublish}"
      >Автоматическая публикация комментария</Checkbox
    >
    <Checkbox bind:checked="{norealtime}"
      >Не обновлять в реальном времени</Checkbox
    >
  </FormItem>

  <FormItem text="URL страницы">
    <Input bind:value="{pageUrl}" placeholder="{location.href}" />
  </FormItem>

  <FormItem text="Внутренний идентификатор страницы">
    <Input bind:value="{pageId}" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Comments
      width="{width}"
      height="{height}"
      limit="{limit}"
      autoPublish="{autoPublish}"
      norealtime="{norealtime}"
      pageUrl="{pageUrl}"
      pageId="{pageId}"
      attach="{attach}"
    />
  </FormItem>
</Form>
