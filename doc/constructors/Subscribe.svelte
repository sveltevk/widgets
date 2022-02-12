<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Checkbox from '../components/Checkbox.svelte';
  import Code from '../components/Code.svelte';
  import { Auth, Subscribe } from '../../src/index.js';
  import { VK_API_VERSION, importComponent } from '../openapi';
  import Select from '../components/Select.svelte';

  let loginStatus = '';

  const getLoginStatus = () =>
    VK.Auth.getLoginStatus(({ status }) => (loginStatus = status));

  getLoginStatus();

  let link = 'https://vk.com/durov';

  const getSubscribe = () => {
    const screen_name = new URL(link).pathname.substring(1);
    if (!screen_name) {
      return;
    }

    VK.Api.call(
      'utils.resolveScreenName',
      { screen_name: screen_name, v: VK_API_VERSION },
      (r) => {
        if (r.response && r.response.object_id) {
          switch (r.response.type) {
            case 'user':
              ownerId = r.response.object_id;
              break;
            case 'group':
              ownerId = -r.response.object_id;
              break;
          }
        }
      },
    );
  };

  let ownerId = 1;
  let mode = 0;
  let soft = false;

  const componentName = 'Subscribe';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ownerId={${ownerId}} ${mode ? `mode={${mode}} ` : ''}${
      soft ? `soft ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  {#if loginStatus === 'connected'}
    <FormItem text="Ссылка на страницу">
      <Input bind:value="{link}" on:change="{getSubscribe}" />
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

  <FormItem text="Идентификатор пользователя или сообщества">
    <Input bind:value="{ownerId}" type="number" />
  </FormItem>

  <FormItem text="Вид виджета">
    <Select bind:value="{mode}">
      <option value="{0}">Кнопка</option>
      <option value="{1}">Лёгкая кнопка</option>
      <option value="{2}">Ссылка</option>
    </Select>
    <Checkbox bind:checked="{soft}">Отображать только кнопку</Checkbox>
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Subscribe ownerId="{ownerId}" mode="{mode}" soft="{soft}" />
  </FormItem>
</Form>
