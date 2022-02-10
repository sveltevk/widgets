<style>
  .page {
    position: relative;
    width: 100%;
    max-width: 663px;
    height: 442px;
    background: url(https://dev.vk.com//images/w_chat_dev_bg_2x.png) left;
    background-size: contain;
    background-position-x: left;
    background-position-y: top;
    border-bottom: 1px solid rgb(211, 217, 222);
  }
</style>

<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Select from '../components/Select.svelte';
  import Checkbox from '../components/Checkbox.svelte';
  import Code from '../components/Code.svelte';
  import { CommunityMessages } from '../../src/index.js';
  import { importComponent } from '../openapi';
  import { onMount } from 'svelte';

  let welcomeScreen;
  let group = 127607773;
  let expandTimeout;
  let expanded;
  let widgetPosition = 'right';
  let buttonType = 'blue_circle';
  let disableButtonTooltip;
  let tooltipButtonText;
  let disableNewMessagesSound;
  let disableExpandChatSound;
  let disableTitleChange;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutationRecord) => {
      if (mutationRecord.target.style.position !== 'absolute') {
        mutationRecord.target.style.position = 'absolute';
      }
    });
  });

  onMount(() => {
    const element = document.getElementById('vk_community_messages_1');
    observer.observe(element, { attributes: true, attributeFilter: ['style'] });
  });

  const componentName = 'CommunityMessages';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ${(group && `group={${group}} `) || ''}${
      (welcomeScreen && `welcomeScreen `) || ''
    }${(expandTimeout && `expandTimeout={${expandTimeout}} `) || ''}${
      (expanded && `expanded `) || ''
    }${
      (widgetPosition !== 'right' && `widgetPosition="${widgetPosition}" `) ||
      ''
    }${(buttonType !== 'blue_circle' && `buttonType="${buttonType}" `) || ''}${
      (disableButtonTooltip && `disableButtonTooltip `) || ''
    }${
      (tooltipButtonText && `tooltipButtonText="${tooltipButtonText}" `) || ''
    }${(disableNewMessagesSound && `disableNewMessagesSound `) || ''}${
      (disableExpandChatSound && `disableExpandChatSound `) || ''
    }${(disableTitleChange && `disableTitleChange `) || ''}/>`;
</script>

<h2>Код виджета</h2>

<Form>
  <FormItem text="Группа">
    <Input bind:value="{group}" type="number" />
  </FormItem>

  <FormItem>
    <Checkbox bind:checked="{welcomeScreen}"
      >Показывать экран приветствия</Checkbox
    >
  </FormItem>

  {#if !expanded}
    <FormItem text="Интервал до раскрытия виджета (ms)">
      <Input bind:value="{expandTimeout}" type="number" />
    </FormItem>
  {/if}

  <FormItem>
    <Checkbox bind:checked="{expanded}">Раскрыть сразу</Checkbox>
  </FormItem>

  <FormItem text="Расположение">
    <Select bind:value="{widgetPosition}">
      <option value="right">В правом углу</option>
      <option value="left">В левом углу</option>
    </Select>
  </FormItem>

  <FormItem text="Внешний вид кнопки">
    <Select bind:value="{buttonType}">
      <option value="blue_circle">Синий круг</option>
      <option value="no_button">Без кнопки</option>
    </Select>
  </FormItem>

  <FormItem>
    <Checkbox bind:checked="{disableButtonTooltip}"
      >Отключить всплывающую подсказку</Checkbox
    >
  </FormItem>

  {#if !disableButtonTooltip}
    <FormItem text="Текст всплывающей подсказки">
      <Input bind:value="{tooltipButtonText}" placeholder="Есть вопрос?" />
    </FormItem>
  {/if}

  <FormItem>
    <Checkbox bind:checked="{disableNewMessagesSound}"
      >Отключить звук о новом сообщении</Checkbox
    >
  </FormItem>
  <FormItem>
    <Checkbox bind:checked="{disableExpandChatSound}"
      >Отключить звук при раскрытии виджета</Checkbox
    >
  </FormItem>
  <FormItem>
    <Checkbox bind:checked="{disableTitleChange}"
      >Отключить изменение заголовка страницы, когда приходит новое сообщение</Checkbox
    >
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <div class="page">
      <CommunityMessages
        group="{group}"
        expandTimeout="{expandTimeout}"
        widgetPosition="{widgetPosition}"
        buttonType="{buttonType}"
        tooltipButtonText="{tooltipButtonText}"
        welcomeScreen="{welcomeScreen}"
        expanded="{expanded}"
        disableButtonTooltip="{disableButtonTooltip}"
        disableNewMessagesSound="{disableNewMessagesSound}"
        disableExpandChatSound="{disableExpandChatSound}"
        disableTitleChange="{disableTitleChange}"
      />
    </div>
  </FormItem>
</Form>
