# Olga Astro

## Запуск

```bash
npm install
npm run dev
```

## Картинки

Положить финальные изображения в `public/images/`:

- hero.webp
- who-am-i.webp
- where-to-go.webp
- relationships.webp
- future.webp
- emotions.webp
- health.webp
- education.webp

## Видео позже

Положить короткие loop-файлы в `public/video/`:

- hero.webm
- who-am-i.webm
- where-to-go.webm
- relationships.webm
- future.webm
- emotions.webm
- health.webm
- education.webm

Если видео нет, браузер покажет poster-картинку.


## Рукописный шрифт

В CSS уже заложен `font-family: "Betmo Cyr"` для красных рукописных акцентов.

Я не вкладываю файл шрифта в архив. Если есть лицензия:
1. создать папку `public/fonts/`
2. положить туда `BetmoCyr.woff2`
3. раскомментировать блок `@font-face` в `src/styles/global.css`

Без файла будет fallback на системный рукописный шрифт.


## v13: изображения уже добавлены

В `public/images/` уже лежат подготовленные `.webp`:

- hero.webp
- who-am-i.webp
- where-to-go.webp
- relationships.webp
- future.webp
- emotions.webp
- health.webp
- education.webp

Это первые рабочие кропы без впеченного текста. Текст теперь живой в Astro.


## v14 Typography

Типографика обновлена:

- Title: Cormorant Regular, 56px
- Script: Betmo Regular Cyr, 90px
- Subtitles / thesis: Montserrat Light, 18px
- CTA: Montserrat Medium, 14px, capitalize

Файл Betmo Regular Cyr.otf нужно положить локально в `public/fonts/`.


## v15

- изображения Ольги переведены в фон секций;
- больше нет media-card, из-за которого отбивка сбивала композицию;
- CTA теперь uppercase: `ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ`;
- Betmo Cyr оставлен с весом 400;
- отбивка визуально встроена между секциями и не сдвигает основное изображение внутри блока.


## v16

- картинки секций поставлены как `background-size: contain; background-position: center right;`
- внутри секции сетка `2fr 1fr`: 2/3 под текст, 1/3 пустой воздух справа
- градиент наложен только на левую 2/3 область: от молочно-белого к прозрачному
- чередование flip отключено: логика везде единая


## v17

Градиент вынесен в `::before` самой секции и стал видимым:
- поверх background-image;
- z-index ниже текста;
- ширина 72%;
- слева почти белый, справа прозрачный.

Старые `.hero__overlay` / `.story-section__overlay` выключены через `display:none`.


## v18

- добавлен блок оглавления услуг после Hero;
- обновлены названия секций и тезисы;
- оглавление отделяет Hero от основной истории услуг.
