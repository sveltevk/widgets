# Приложение

Виджет приложения позволит в один клик добавить на ваш сайт возможность быстро
перейти в игру из каталога ВКонтакте.

Используйте полноценную карточку приложения или компактную кнопку, показывайте
пользователям играющих друзей — виджет аккуратно впишется в любой дизайн и
привлечёт новых игроков.

Обратите внимание, URL приложения сообщества должен быть указан в формате
`https://vk.com/app123456_-654321`. Для таких приложений доступен только вид
«Кнопка».

## Параметры

Компонент `Bookmarks` принимает следующие параметры:

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
|`url`|string||Идентификатор приложения|
|`mode?`|string|`1`|Тип виджета. <br>`1` — карточка (обложка, название, жанр, число участников и кнопка «Играть»), по умолчанию; <br>`2` — участники (дополнительно показываются аватары участников-друзей пользователя, если есть); <br>`3` — кнопка (только кнопка). Для приложений сообществ (с URL в формате 123456_-654321 доступен только этот режим).|
|`height?`|18&#124;20&#124;22&#124;24&#124;30|`24`|Высота кнопки (для mode = 3).|