<style>
  main {
    padding: 0 40px 50px;
    max-width: 1080px;
    margin: auto;
  }
</style>

<script>
  import Top from './Top.md';
  import Router from './components/Router.svelte';
  import RouterPage from './components/RouterPage.svelte';
  import BookmarksDoc from '../src/Bookmarks/README.md';
  import BookmarksConstructor from './constructors/Bookmarks.svelte';
  import ContactUsDoc from '../src/ContactUs/README.md';
  import ContactUsConstructor from './constructors/ContactUs.svelte';
  import LikeDoc from '../src/Like/README.md';
  import LikeConstructor from './constructors/Like.svelte';
  import AppDoc from '../src/App/README.md';
  import AppConstructor from './constructors/App.svelte';
  import AllowMessagesFromCommunityDoc from '../src/AllowMessagesFromCommunity/README.md';
  import AllowMessagesFromCommunityConstructor from './constructors/AllowMessagesFromCommunity.svelte';
  import ArticleDoc from '../src/Article/README.md';
  import ArticleConstructor from './constructors/Article.svelte';
  import PodcastDoc from '../src/Podcast/README.md';
  import PodcastConstructor from './constructors/Podcast.svelte';
  import CommunityMessagesDoc from '../src/CommunityMessages/README.md';
  import CommunityMessagesConstructor from './constructors/CommunityMessages.svelte';

  VK.init({
    apiId: 8074433,
    onlyWidgets: true,
  });

  let pages = [];
</script>

<main>
  <Top />

  <h2>Виджеты</h2>
  <ul>
    {#each pages as page}
      <li>
        <a href="{'#' + page.link}">{page.name}</a>
      </li>
    {/each}
  </ul>

  <Router let:this="{router}" bind:pages>
    <!-- Авторизация -->

    <RouterPage router="{router}" name="Закладки" link="Bookmarks">
      <BookmarksDoc />
      <BookmarksConstructor />
    </RouterPage>

    <!-- Запись на стене -->
    <!-- Комментарии -->

    <RouterPage router="{router}" name="Напишите нам" link="ContactUs">
      <ContactUsDoc />
      <ContactUsConstructor />
    </RouterPage>

    <RouterPage router="{router}" name="Нравится" link="Like">
      <LikeDoc />
      <LikeConstructor />
    </RouterPage>

    <!-- Опрос -->
    <!-- Плейлист -->
    <!-- Подписаться на автора -->

    <RouterPage router="{router}" name="Приложение" link="App">
      <AppDoc />
      <AppConstructor />
    </RouterPage>

    <!-- Публикация ссылок -->

    <RouterPage
      router="{router}"
      name="Разрешить сообщения от сообщества"
      link="AllowMessagesFromCommunity"
    >
      <AllowMessagesFromCommunityDoc />
      <AllowMessagesFromCommunityConstructor />
    </RouterPage>

    <!-- Рекомендации -->
    <!-- Репортаж -->

    <RouterPage
      router="{router}"
      name="Сообщения сообщества"
      link="CommunityMessages"
    >
      <CommunityMessagesDoc />
      <CommunityMessagesConstructor />
    </RouterPage>

    <!-- Сообщества -->

    <RouterPage router="{router}" name="Статья" link="Article">
      <ArticleDoc />
      <ArticleConstructor />
    </RouterPage>

    <RouterPage router="{router}" name="Эпизод подкаста " link="Podcast">
      <PodcastDoc />
      <PodcastConstructor />
    </RouterPage>
  </Router>
</main>
