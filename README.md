# Сайт ИИ-консалтинга

Многостраничный сайт на Next.js 14 (App Router), TypeScript, Tailwind CSS и MDX.

## Запуск

```bash
npm install
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000).

Сборка и проверка:

```bash
npm run build
npm run start
npm run lint
```

## Структура

```
content/
  cases/          # MDX-кейсы
  articles/       # MDX-статьи
  knowledge/      # MDX-руководства базы знаний
src/
  app/
    page.tsx                  # главная-хаб: превью статей, базы знаний, тем и кейсов
    services/page.tsx         # услуги, подход, форма заявки
    cases/page.tsx            # список кейсов
    cases/[slug]/page.tsx     # страница кейса
    articles/page.tsx         # список статей
    articles/[slug]/page.tsx  # страница статьи
    knowledge/page.tsx        # база знаний
    knowledge/[slug]/page.tsx # страница руководства
    topics/page.tsx           # все темы
    topics/[slug]/page.tsx    # материалы по теме
    blog/page.tsx             # блог (заглушка)
  components/                 # header, footer, карточки, форма
  lib/
    cases.ts                  # getAllCases() и getCaseBySlug()
    articles.ts               # getAllArticles() и getArticleBySlug()
    knowledge.ts              # getAllGuides() и getGuideBySlug()
    topics.ts                 # список тем
```

## Как добавить кейс

Создайте файл `content/cases/my-case.mdx`:

```yaml
---
title: "Название кейса"
client: "Название клиента"
date: "2026-11-07"
metrics:
  - label: "Сокращение времени"
    value: "70%"
  - label: "Рост конверсии"
    value: "+45%"
---

# Проблема

Описание задачи.

# Решение

Что было сделано.

# Результат

Измеримый эффект.
```

Кейс автоматически появится в `/cases`, на главной и будет доступен по адресу
`/cases/my-case`. Разделы `#` в MDX рендерятся как `h2`.

## Как добавить статью

Создайте файл `content/articles/my-article.mdx`:

```yaml
---
title: "Название статьи"
excerpt: "Первые два предложения для превью на главной и в списке."
date: "2026-11-07"
topics:
  - "automation"
  - "strategy"
readingTime: "6 мин"
---

# Подзаголовок

Текст статьи.
```

Доступные темы задаются в `src/lib/topics.ts`. Статья появится в `/articles`,
на главной и на страницах своих тем.

## Как добавить материал в базу знаний

Создайте файл `content/knowledge/my-guide.mdx`:

```yaml
---
title: "Название руководства"
excerpt: "Короткое описание материала."
date: "2026-11-07"
category: "Чек-лист"
level: "Начальный"
readingTime: "8 мин"
topics:
  - "strategy"
---

# Раздел

Содержание руководства.
```

Материал появится в `/knowledge`, на главной и на страницах выбранных тем.

## Цвета

- Фон: графит `#29292D`
- Акцент: глубокий винный `#6B1428`
- Светлый акцент для текста: `#C8838B`
- Текст: белый / оттенки тёплого серого

## Примечание

Форма заявки находится на странице `/services#contact` и пока работает как
демонстрационная заглушка: данные не отправляются. Подключите API route или CRM,
чтобы принимать заявки.
