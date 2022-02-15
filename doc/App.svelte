<style>
  .page {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  main {
    padding: 0 40px 50px;
    max-width: 980px;
    background: #ffffff;
    border: 1px solid #e1e3e6;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 20px 0;
  }

  .left {
    top: 0px;
    position: sticky;
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100vh;
  }

  /* .left .header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 16px;
    font-weight: 500;
    margin: 15px 0 9px;
    padding: 0 16px;
    color: #818c99;
  } */

  .left a {
    color: #000;
    display: block;
    line-height: 20px;
    width: 240px;
    padding: 12px 16px;
    text-decoration: none;
    border-radius: 8px;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .left a:hover {
    color: #000;
    background: #ebedf0;
  }

  .left a.select {
    background: #ebedf0;
  }

  @media screen and (max-width: 1200px) {
    .page {
      flex-direction: column;
    }

    .left {
      display: flex;
      position: relative;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      max-height: none;
      width: 100%;
      flex-wrap: wrap;
      box-sizing: border-box;
    }

    main {
      max-width: 1200px;
    }
  }
</style>

<script>
  import Top from './Top.md';
  import Router from './components/Router.svelte';
  import RouterPage from './components/RouterPage.svelte';
  import AuthDoc from '../src/Auth/README.md';
  import AuthConstructor from './constructors/Auth.svelte';
  import BookmarksDoc from '../src/Bookmarks/README.md';
  import BookmarksConstructor from './constructors/Bookmarks.svelte';
  import PostDoc from '../src/Post/README.md';
  import PostConstructor from './constructors/Post.svelte';
  import ContactUsDoc from '../src/ContactUs/README.md';
  import ContactUsConstructor from './constructors/ContactUs.svelte';
  import LikeDoc from '../src/Like/README.md';
  import LikeConstructor from './constructors/Like.svelte';
  import PollDoc from '../src/Poll/README.md';
  import PollConstructor from './constructors/Poll.svelte';
  import PlaylistDoc from '../src/Playlist/README.md';
  import PlaylistConstructor from './constructors/Playlist.svelte';
  import SubscribeDoc from '../src/Subscribe/README.md';
  import SubscribeConstructor from './constructors/Subscribe.svelte';
  import AppDoc from '../src/App/README.md';
  import AppConstructor from './constructors/App.svelte';
  import ShareDoc from '../src/Share/README.md';
  import ShareConstructor from './constructors/Share.svelte';
  import AllowMessagesFromCommunityDoc from '../src/AllowMessagesFromCommunity/README.md';
  import AllowMessagesFromCommunityConstructor from './constructors/AllowMessagesFromCommunity.svelte';
  import RecommendedDoc from '../src/Recommended/README.md';
  import RecommendedConstructor from './constructors/Recommended.svelte';
  import TextLiveDoc from '../src/TextLive/README.md';
  import TextLiveConstructor from './constructors/TextLive.svelte';
  import ArticleDoc from '../src/Article/README.md';
  import ArticleConstructor from './constructors/Article.svelte';
  import PodcastDoc from '../src/Podcast/README.md';
  import PodcastConstructor from './constructors/Podcast.svelte';
  import CommunityMessagesDoc from '../src/CommunityMessages/README.md';
  import CommunityMessagesConstructor from './constructors/CommunityMessages.svelte';

  VK.init({
    apiId: 8054451,
    onlyWidgets: true,
  });

  let pages = [];
  let hash;
</script>

<div class="page">
  <div class="left">
    {#each pages as page}
      <a class:select="{'#' + page.link === $hash}" href="{'#' + page.link}"
        >{page.name}</a
      >
    {/each}
  </div>
  <main>
    <Top />

    <Router bind:hash let:this="{router}" bind:pages>
      <RouterPage router="{router}" name="Авторизация" link="Auth">
        <AuthDoc />
        <AuthConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Закладки" link="Bookmarks">
        <BookmarksDoc />
        <BookmarksConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Запись на стене" link="Post">
        <PostDoc />
        <PostConstructor />
      </RouterPage>

      <!-- Комментарии -->

      <RouterPage router="{router}" name="Напишите нам" link="ContactUs">
        <ContactUsDoc />
        <ContactUsConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Нравится" link="Like">
        <LikeDoc />
        <LikeConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Опрос" link="Poll">
        <PollDoc />
        <PollConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Плейлист" link="Playlist">
        <PlaylistDoc />
        <PlaylistConstructor />
      </RouterPage>

      <RouterPage
        router="{router}"
        name="Подписаться на автора"
        link="Subscribe"
      >
        <SubscribeDoc />
        <SubscribeConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Приложение" link="App">
        <AppDoc />
        <AppConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Публикация ссылок" link="Share">
        <ShareDoc />
        <ShareConstructor />
      </RouterPage>

      <RouterPage
        router="{router}"
        name="Разрешить сообщения от сообщества"
        link="AllowMessagesFromCommunity"
      >
        <AllowMessagesFromCommunityDoc />
        <AllowMessagesFromCommunityConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Рекомендации" link="Recommended">
        <RecommendedDoc />
        <RecommendedConstructor />
      </RouterPage>

      <RouterPage router="{router}" name="Репортаж" link="TextLive">
        <TextLiveDoc />
        <TextLiveConstructor />
      </RouterPage>

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
</div>
