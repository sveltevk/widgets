<script>
  import Form from '../components/Form.svelte';
  import FormItem from '../components/FormItem.svelte';
  import Input from '../components/Input.svelte';
  import Code from '../components/Code.svelte';
  import { Auth, Post } from '../../src/index.js';
  import { importComponent } from '../openapi';

  let loginStatus = '';

  const getLoginStatus = () =>
    VK.Auth.getLoginStatus(({ status }) => (loginStatus = status));

  getLoginStatus();

  let post = 'https://vk.com/wall1_45616';

  const getPost = () => {
    const e = post.match(/wall(-?\d+)_(\d+)(?:(?:\/|%2F)([a-z0-9A-Z]+))?/);
    if (!e) {
      return;
    }

    const posts = e[1] + '_' + e[2] + (e[3] && '_' + e[3]);
    VK.Api.call('wall.getById', { posts: posts, v: '5.131' }, (r) => {
      if (r.response) {
        postId = r.response[0].id;
        ownerId = r.response[0].owner_id;
        hash = r.response[0].hash;
      }
    });
  };

  let ownerId = 1;
  let postId = 45616;
  let hash = '5GJxomPDPE-WjYJPVoMZjectJImS';
  let width;

  const componentName = 'Post';
  $: getCode =
    importComponent(componentName) +
    `<${componentName} ownerId={${ownerId}} postId={${postId}} hash="${hash}" ${
      width ? `width={${width}} ` : ''
    }/>`;
</script>

<h2>Код виджета</h2>

<Form>
  {#if loginStatus === 'connected'}
    <FormItem text="Ссылка на запись">
      <Input bind:value="{post}" on:change="{getPost}" />
    </FormItem>
  {:else}
    <FormItem text="Авторизация">
      <p>Для работы конструктора, необходимо авторизоваться</p>
      <Auth onAuth="{getLoginStatus}" />
    </FormItem>
  {/if}

  <!-- <FormItem text="Идентификатор владельца">
    <Input bind:value="{ownerId}" type="number"/>
  </FormItem>

  <FormItem text="Идентификатор записи">
    <Input bind:value="{postId}" type="number" min="1"/>
  </FormItem>

  <FormItem text="Хэш">
    <Input bind:value="{hash}" />
  </FormItem> -->

  <FormItem text="Ширина">
    <Input bind:value="{width}" type="number" placeholder="100%" />
  </FormItem>

  <FormItem text="Код виджета">
    <Code text="{getCode}" />
  </FormItem>

  <FormItem text="Виджет">
    <Post ownerId="{ownerId}" postId="{postId}" hash="{hash}" width="{width}" />
  </FormItem>
</Form>
