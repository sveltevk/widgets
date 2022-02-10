# Svelte VK Widgets

Предоставьте посетителям сайта возможность авторизоваться через ВКонтакте, добавлять комментарии и плейлисты, общаться в сообщениях.

- [GitHub][github-url]
- [npm][npm-url]
- [Changelog][changelog-url]

## Установка

```sh
npm i @sveltevk/widgets
```

Для работоспособности виджетов необходимо в тег `<head>` добавить подключение [openapi.js](https://dev.vk.com/api/open-api/getting-started)

```svelte
<head>
  <script
    type="text/javascript"
    src="https://vk.com/js/api/openapi.js?168"
    charset="windows-1251"></script>
</head>
```

[npm]: https://img.shields.io/npm/v/@sveltevk/widgets.svg?color=blue
[npm-url]: https://npmjs.com/package/@sveltevk/widgets
[chat]: https://img.shields.io/badge/VK%20chat-%234a76a8.svg?logo=VK&logoColor=white
[chat-url]: https://vk.me/join/AJQ1d3IXhxgxghIc5PFNiLCd
[svelte]: https://img.shields.io/badge/svelte-v3-blueviolet.svg
[svelte-url]: https://svelte.dev
[license]: https://img.shields.io/github/license/sveltevk/widgets
[license-url]: https://github.com/sveltevk/widgets/blob/master/LICENSE
[site-url]: https://sveltevk.github.io/widgets/
[changelog-url]: https://github.com/sveltevk/widgets/releases
[github-url]: https://github.com/sveltevk/widgets
[repl]: https://img.shields.io/badge/svelte-REPL-red?logoColor=white&style=flat-square
