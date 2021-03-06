# Обзор комментариев

При помощи виджета ВКонтакте вы можете за 5 минут добавить на ваш сайт
возможность комментирования статей и других материалов. Пользователи смогут
комментировать ваши материалы без дополнительной регистрации.

Виджет позволяет отображать комментарии со всех страниц вашего сайта
единым потоком. У каждого комментария есть ссылка на страницу сайта, где он был опубликован.

## Инициализация Open API

Данный виджет требует инициализацию Open API. В тело страницы сайта добавьте
следующий код:

```html
<script type="text/javascript">
  VK.init({
    apiId: ВАШ_API_ID,
    onlyWidgets: true,
  });
</script>
```

## Параметры

Компонент `CommentsBrowse` принимает следующие параметры:

| Параметр      | Тип                   | По умолчанию | Описание                                                                                                                                                                                                  |
| ------------- | --------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `width?`      | number                |              | Ширина блока в пикселах. Минимальное значение: 300. Если параметр не указан, виджет займёт всю доступную ширину                                                                                           |
| `height?`     | number                | `0`          | Максимальная высота блока в пикселах. Минимальное значение: 500. Если height = 0, то высота не ограничена. Если высота содержимого виджета больше максимально допустимой, появляется внутренняя прокрутка |
| `limit?`      | number                |              | Максимальное число комментариев на странице. Минимальное значение: 5, максимальное значение: 100.                                                                                                         |
| `mini?`       | 'auto' &#124; boolean | `'auto'`     | Минималистичный вид блока                                                                                                                                                                                 |
| `norealtime?` | boolean               |              | Обновление ленты комментариев в режиме реального времени                                                                                                                                                  |
