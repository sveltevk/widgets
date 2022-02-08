<style>
  main {
    padding: 0 40px 50px;
    max-width: 1080px;
    margin: auto;
  }
</style>

<script>
  import Top from './Top.md';
  import BookmarksDoc from '../src/Bookmarks/README.md';
  import BookmarksConstructor from './constructors/Bookmarks.svelte';
  import ContactUsDoc from '../src/ContactUs/README.md';
  import ContactUsConstructor from './constructors/ContactUs.svelte';
  import AppDoc from '../src/App/README.md';
  import AppConstructor from './constructors/App.svelte';
  import ArticleDoc from '../src/Article/README.md';
  import ArticleConstructor from './constructors/Article.svelte';
  import PodcastDoc from '../src/Podcast/README.md';
  import PodcastConstructor from './constructors/Podcast.svelte';

  VK.init({
    apiId: 8074433,
    onlyWidgets: true,
  });
</script>

<main>
  <Top />

  <!-- Авторизация -->
  <!-- Закладки -->
  <BookmarksDoc />
  <BookmarksConstructor />
  <!-- Запись на стене -->
  <!-- Комментарии -->
  <!-- Напишите нам -->
  <ContactUsDoc />
  <ContactUsConstructor />
  <!-- Нравится -->
  <!-- Опрос -->
  <!-- Плейлист -->
  <!-- Подписаться на автора -->
  <!-- Приложение -->
  <AppDoc />
  <AppConstructor />
  <!-- Публикация ссылок -->
  <!-- Разрешить сообщения от сообщества -->
  <!-- Рекомендации -->
  <!-- Репортаж -->
  <!-- Сообщения сообщества -->
  <!-- Сообщества -->
  <!-- Статья -->
  <ArticleDoc />
  <ArticleConstructor />
  <!-- Эпизод подкаста -->
  <PodcastDoc />
  <PodcastConstructor />
</main>
