# Голос громади

Сайт громадської ініціативи з новинною стрічкою, розділом зборів/подій, картою локацій та формою для волонтерів.

## Стек

- [Next.js](https://nextjs.org/) 16 + App Router
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- Markdown-файли для контенту (`gray-matter`, `remark`)
- [Leaflet](https://leafletjs.com/) для карти

## Локальний запуск

```bash
npm install
npm run dev
```

Сайт буде доступний за адресою [http://localhost:3000](http://localhost:3000).

## Як публікувати новину

1. Створіть файл `content/posts/<slug>.md`.
2. Додайте frontmatter:

```yaml
---
title: "Заголовок новини"
date: "2026-07-15"
excerpt: "Короткий опис, який показується в стрічці"
image: "https://example.com/image.jpg"
---

Текст новини у Markdown.
```

3. Зробіть `git commit` + `git push` — сайт оновиться автоматично після деплою.

## Як додати збір / подію

1. Створіть файл `content/events/<slug>.md`.

```yaml
---
title: "Назва збору"
date: "2026-07-18T11:00:00"
location: "Адреса або місце"
description: "Короткий опис"
coordinates: [50.4504, 30.5245]
link: "https://t.me/..."
---
```

Події з координатами автоматично з'являться на карті.

## Деплой

### Vercel

1. Завантажте репозиторій на GitHub.
2. Імпортуйте проєкт на [vercel.com](https://vercel.com/).
3. Натисніть **Deploy** — все інше налаштується автоматично.

### Netlify

1. Завантажте репозиторій на GitHub.
2. Імпортуйте на [netlify.com](https://netlify.com/).
3. Команда збірки: `npm run build`, публічна папка: `out` (якщо включено статичний експорт) або залиште за замовчуванням.

## Налаштування зображень

Щоб використовувати власні фото, покладіть їх у папку `public/images/` і вкажіть шлях `/images/photo.jpg` в frontmatter. Для зовнішніх URL додайте домен у `next.config.ts`.

## Наступні кроки

- Підключити реальну відправку форми (Formspree, Resend, Telegram-бот або власний API Route).
- Додати OG-зображення та мета-теги для соцмереж.
- Підключити аналітику (Plausible, Google Analytics).
- Замінити placeholder-зображення на реальні фото.
