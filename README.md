# stylist-svelte-svg

## Как добавить иконку

1. Положите файл `data/icon/<name>/index.svg`. `<name>` пишется в kebab-case, например `arrow-left`. Нужны `viewBox="0 0 24 24"` и `stroke="currentColor"`, без `width`/`height`, как у соседних иконок.
2. Из `stylist-svelte` выполните `node scripts/write-icon-names.mjs`. Скрипт перегенерирует union `TokenIconName` в `type/alias/icon-name`. Тест `test/unit/icon-name` падает, пока тип и файлы расходятся, и перечисляет недостающие имена.
3. Используйте иконку с числовым размером: `<Icon name="arrow-left" size={20} />`.

## Icon API

- `size`: `TokenIconSize` — число пикселей или токен из `TOKEN_ICON_SIZE` (`xs` 12, `sm` 16, `md` 20, `lg` 24, `xl` 32, `2xl` 40). Без значения берётся `md`. Svg всегда получает `width`/`height`, поэтому в flex-строке он не схлопнется в 0.
- `name`: `TokenIconName`. Если имя приходит из данных (БД, конфиг, пресет), сначала сузьте его через `isIconName` (`function/check/icon-name`). Неизвестное имя рендерит `box`, а в dev-режиме ещё и выдаёт `console.warn`.
- Направление задаётся только именем иконки: `chevron-left/right/up/down`, `arrow-up/down/right`. Для chevron-иконок `isOpen` переключает up/down.

## Third-party

Иконки joints и технологий ниже адаптированы из [Tabler Icons](https://github.com/tabler/tabler-icons) (MIT, Copyright (c) 2020-2026 Paweł Kuna). Сохранены контуры; размер приведён к общему формату без `width`/`height`, толщина линии — `1.7`, цвет — `currentColor`. Полный текст лицензии включён в каждый адаптированный SVG.

| Имя в реестре | Исходная иконка Tabler |
| ------------- | ---------------------- |
| `capture`     | `camera`               |
| `clone`       | `copy`                 |
| `composite`   | `hierarchy-2`          |
| `compute`     | `calculator`           |
| `create`      | `square-plus`          |
| `flag`        | `flag`                 |
| `json`        | `braces`               |
| `render`      | `device-desktop-code`  |
| `resolve`     | `route`                |
| `serialize`   | `list-numbers`         |
| `unit`        | `test-pipe`            |
| `rest`        | `api`                  |
| `graphql`     | `brand-graphql`        |
| `svelte`      | `brand-svelte`         |
| `css`         | `brand-css3`           |
| `html`        | `brand-html5`          |

`component` использует существующий знак из четырёх блоков.

Часть глифов в `data/icon` основана на контурах [Lucide](https://lucide.dev) (например, `chevron-*`, `eye`, `eye-off`, `external-link`, `file-text`, `package`, `rotate-ccw`, `volume-2`, `accessibility`, `keyboard`, `zap`). Lucide распространяется по лицензии ISC:

```
ISC License

Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT).
All other copyright (c) for Lucide are held by Lucide Contributors 2022.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```
