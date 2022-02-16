<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Checkbox from '../components/Checkbox.svelte';
  import Code from '../components/Code.svelte';
  import { Auth, Group } from '../../src/index.js';
  import { VK_API_VERSION, importComponent } from '../openapi';
  import Select from '../components/Select.svelte';

  let loginStatus = '';

  const getLoginStatus = () =>
    VK.Auth.getLoginStatus(({ status }) => (loginStatus = status));

  getLoginStatus();

  let link = 'http://vk.com/public20003922';

  const getGroup = () => {
    const screen_name = new URL(link).pathname.substring(1);
    if (!screen_name) {
      return;
    }

    VK.Api.call(
      'utils.resolveScreenName',
      { screen_name: screen_name, v: VK_API_VERSION },
      (r) => {
        if (r.response && r.response.object_id && r.response.type === 'group') {
          groupId = r.response.object_id;
        }
      },
    );
  };

  let groupId = 20003922;
  let width = undefined;
  let height = undefined;
  let mode = 1;
  let noCover = false;
  let wide = false;
  let color1 = undefined;
  let color2 = undefined;
  let color3 = undefined;

  const componentName = 'Group';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} groupId={${groupId}} ${
      width === 'auto' ? `width="auto" ` : width ? `width={${width}} ` : ''
    }${height ? `height={${height}} ` : ''}${mode ? `mode={${mode}} ` : ''}${
      noCover ? `noCover ` : ''
    }${wide ? `wide ` : ''}${color1 ? `color1="${color1}" ` : ''}${
      color2 ? `color2="${color2}" ` : ''
    }${color3 ? `color3="${color3}" ` : ''}/>`;
</script>

<h2>Код виджета</h2>

<Form>
  {#if loginStatus === 'connected'}
    <FormItem text="Ссылка на страницу">
      <Input bind:value="{link}" on:change="{getGroup}" />
    </FormItem>
  {:else}
    <FormItem text="Авторизация">
      <p>
        Для автоматического определения индификатора из ссылки, необходима
        авторизация
      </p>
      <Auth onAuth="{getLoginStatus}" />
    </FormItem>
  {/if}

  <FormItem text="Идентификатор сообщества">
    <Input bind:value="{groupId}" type="number" min="0" />
  </FormItem>

  <FormItem text="Вид виджета">
    <Select bind:value="{mode}">
      <option value="{1}">Только название</option>
      <option value="{3}">Участники</option>
      <option value="{4}">Стена</option>
    </Select>
    <Checkbox bind:checked="{noCover}">Не использовать обложку</Checkbox>
    <Checkbox bind:checked="{wide}">Расширенный режим</Checkbox>
  </FormItem>

  <FormItem text="Ширина">
    <Input bind:value="{width}" />
  </FormItem>

  <FormItem text="Высота">
    <Input bind:value="{height}" type="number" min="200" max="1200" />
  </FormItem>

  <FormItem text="Цвет фона">
    <Input bind:value="{color1}" placeholder="FFFFFF" />
  </FormItem>
  <FormItem text="Цвет текста">
    <Input bind:value="{color2}" placeholder="000000" />
  </FormItem>
  <FormItem text="Цвет кнопок">
    <Input bind:value="{color3}" placeholder="5181B8" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Group
      groupId="{groupId}"
      width="{width}"
      height="{height}"
      mode="{mode}"
      noCover="{noCover}"
      wide="{wide}"
      color1="{color1}"
      color2="{color2}"
      color3="{color3}"
    />
  </FormItem>
</Form>
