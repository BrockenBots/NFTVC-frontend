## Запуск проекта

Docker:
```docker-compose up --build -d```

Locally
```bash
bun install
bun dev | bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Архитектура

В проекте имеется next app router, поэтому ```src/app``` принадлежит для routing и layout

Но основной архитектурой является FSD - feature sliced design.

## Стек

- Nextjs
- NextUi
- Effector
