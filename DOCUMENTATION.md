# Техническая Документация Проекта (Квест на 8 Марта)

## 1. Скрытые страницы с заданиями

Ниже представлен список всех скрытых страниц квеста. Поскольку мы используем `HashRouter` для корректной работы на GitHub Pages, все ссылки содержат `/#/` перед уникальным идентификатором задания.

**Важно:** Для колонки "QR URL" используйте ссылки из колонки "GitHub Pages URL" (после деплоя), предварительно заменив `<USERNAME>` и `<REPO>`.

| Team | Task | Type | Route | Local URL | GitHub Pages URL | QR URL |
|---|---|---|---|---|---|---|
| Розы 🌹 | 1 | rebus | `rose-7x2-petal` | `http://localhost:5173/8mart/#/rose-7x2-petal` | `https://<USERNAME>.github.io/<REPO>/#/rose-7x2-petal` | `https://<USERNAME>.github.io/<REPO>/#/rose-7x2-petal` |
| Розы 🌹 | 2 | binary | `pink-bloom-w8z` | `http://localhost:5173/8mart/#/pink-bloom-w8z` | `https://<USERNAME>.github.io/<REPO>/#/pink-bloom-w8z` | `https://<USERNAME>.github.io/<REPO>/#/pink-bloom-w8z` |
| Розы 🌹 | 3 | code | `gold-heart-9qm` | `http://localhost:5173/8mart/#/gold-heart-9qm` | `https://<USERNAME>.github.io/<REPO>/#/gold-heart-9qm` | `https://<USERNAME>.github.io/<REPO>/#/gold-heart-9qm` |
| Тюльпаны 🌷 | 1 | rebus | `tulip-sun-m4v` | `http://localhost:5173/8mart/#/tulip-sun-m4v` | `https://<USERNAME>.github.io/<REPO>/#/tulip-sun-m4v` | `https://<USERNAME>.github.io/<REPO>/#/tulip-sun-m4v` |
| Тюльпаны 🌷 | 2 | binary | `spring-breeze-k2l` | `http://localhost:5173/8mart/#/spring-breeze-k2l` | `https://<USERNAME>.github.io/<REPO>/#/spring-breeze-k2l` | `https://<USERNAME>.github.io/<REPO>/#/spring-breeze-k2l` |
| Тюльпаны 🌷 | 3 | code | `petal-dance-v7x` | `http://localhost:5173/8mart/#/petal-dance-v7x` | `https://<USERNAME>.github.io/<REPO>/#/petal-dance-v7x` | `https://<USERNAME>.github.io/<REPO>/#/petal-dance-v7x` |
| Лилии 🌸 | 1 | rebus | `lily-white-p3x8` | `http://localhost:5173/8mart/#/lily-white-p3x8` | `https://<USERNAME>.github.io/<REPO>/#/lily-white-p3x8` | `https://<USERNAME>.github.io/<REPO>/#/lily-white-p3x8` |
| Лилии 🌸 | 2 | binary | `morning-dew-4t9` | `http://localhost:5173/8mart/#/morning-dew-4t9` | `https://<USERNAME>.github.io/<REPO>/#/morning-dew-4t9` | `https://<USERNAME>.github.io/<REPO>/#/morning-dew-4t9` |
| Лилии 🌸 | 3 | code | `crystal-shine-8bn` | `http://localhost:5173/8mart/#/crystal-shine-8bn` | `https://<USERNAME>.github.io/<REPO>/#/crystal-shine-8bn` | `https://<USERNAME>.github.io/<REPO>/#/crystal-shine-8bn` |

## 2. Как генерировать QR коды

При сканировании QR кода камера смартфона просто считывает текст и, если это ссылка, предлагает её открыть.
Чтобы квест сработало автоматически, **QR код должен содержать полный URL страницы задания**, размещенного в интернете.

**Пример:**
Если ваш репозиторий называется `8mart`, а ваш ник `supercooldev`, то для первого задания команды "Тюльпаны" вы должны зашифровать в QR код такую строку:
`https://supercooldev.github.io/8mart/#/tulip-sun-m4v`

**Бесплатные генераторы QR кодов:**
Вы можете использовать любой бесплатный сервис, например:
1. **[The-QRCode-Generator](https://www.the-qrcode-generator.com/)** — удобный, минималистичный, без регистраций.
2. **[QR Coder](https://www.qrcoder.ru/)** — самый простой русскоязычный ресурс.
3. **[QR Code Generator](https://ru.qr-code-generator.com/)** — позволяет добавлять рамки или менять цвет.

*Инструкция:* Просто скопируйте каждую ссылку из столбца "QR URL" для конкретного задания, вставьте её в поле ввода генератора, скачайте изображение (PNG/SVG) и добавьте его на карточку для печати.

## 3. Проверка заданий

Перед тем, как распечатывать QR-коды для квеста, вы можете быстро проверить все задания локально на своем компьютере:
1. Откройте проект в редакторе (VS Code) и запустите терминал.
2. Выполните команду запуска сервера: `npm run dev`.
3. Просто копируйте локальные ссылки (из столбца `Local URL` в таблице выше) в адресную строку вашего браузера.
   *Например, перейдите по: `http://localhost:5173/8mart/#/petal-dance-v7x`*
4. Убедитесь, что:
   - Открывается нужный тип задания (для ребуса видна картинка).
   - Если это код-задание (`CodeTask`), покликайте на правильные и неправильные ответы, чтобы проверить отображение подсказок-feedback.
   - Если это двоичный код (`BinaryTask`), табличка с расшифровкой отображается без искажений.
