# Design System — Community42

Полное описание всех дизайн-токенов и компонентов для унификации.

---

## 1. Цвета

### Базовые цвета

| Название    | HEX       | CSS Variable          |
| ----------- | --------- | --------------------- |
| Black       | `#141114` | `--color-black`       |
| White       | `#ffffff` | `--color-white`       |
| Gray Light  | `#bcbcc2` | `--color-gray-light`  |
| Gray Medium | `#96969c` | `--color-gray-medium` |
| Pink        | `#ff66d0` | `--color-pink`        |

### Хардкоднутые цвета (без переменных)

| Цвет               | HEX       | Где используется        |
| ------------------ | --------- | ----------------------- |
| Footer background  | `#1c1a2d` | Footer.module.css       |
| Logo active        | `#323859` | Logo.module.css         |
| Caret              | `#666666` | SearchInput.module.css  |
| Services underline | `#8d8c8f` | Footer.module.css       |
| New badge green    | `#04ca00` | ServicesList.module.css |
| New badge border   | `#025b15` | ServicesList.module.css |

### Градиенты

| Название          | Значение                                               |
| ----------------- | ------------------------------------------------------ |
| Pink gradient     | `linear-gradient(90deg, #b663fd 0%, #ffabf7 100%)`     |
| Border gradient   | `linear-gradient(to right, #fff1f1, #9f9dff, #ff66d0)` |
| Border hover      | `linear-gradient(0deg, #b663fd, #ffabf7)`              |
| RouterLink active | `linear-gradient(#010b42, #010b42)`                    |

### Прозрачности (Transparency Scale)

Каждый базовый цвет имеет 4 уровня прозрачности: `10`, `25`, `50`, `75`

```
--color-black-{10,25,50,75}
--color-white-{10,25,50,75}
--color-gray-light-{10,25,50,75}
--color-gray-medium-{10,25,50,75}
--color-pink-{10,25,50,75}
```

### Дополнительные rgba значения

| Значение                    | Где используется   |
| --------------------------- | ------------------ |
| `rgba(0, 0, 0, 0.9)`        | Overlay в Clients  |
| `rgba(200, 168, 216, 0.25)` | SearchButton hover |

---

## 2. Типографика

### Размеры шрифтов

| Размер  | Значение | Где используется                                       |
| ------- | -------- | ------------------------------------------------------ |
| xs      | `12px`   | Likes, ServicesList badge                              |
| sm      | `14px`   | Navbar, Footer copyright                               |
| base    | `16px`   | TagItem, SearchInput, Footer links, RouterLink actions |
| md      | `18px`   | Breadcrumbs, TextBlock, ProjectTeam, Footer title      |
| lg      | `20px`   | Typography h5/h6, Team persona gap                     |
| xl      | `22px`   | ProjectHeader summary, TextBlock                       |
| xxl     | `26px`   | ProjectTeam position, ProjectFeedback title/time       |
| display | `56px`   | Typography h2, ProjectHeader title                     |

### Насыщенность (Font Weight)

| Значение | Использование            |
| -------- | ------------------------ |
| `400`    | Regular — основной текст |
| `500`    | Medium — подзаголовки    |
| `600`    | Semibold — заголовки     |
| `700`    | Bold — крупные заголовки |

### Межстрочный интервал (Line Height)

| Значение | Где используется    |
| -------- | ------------------- |
| `120%`   | ServicesList, Likes |
| `130%`   | Footer description  |
| `140%`   | TextBlock           |

---

## 3. Отступы (Spacing)

### Gap (между элементами)

| Значение  | rem | Где используется                                                                                                 |
| --------- | --- | ---------------------------------------------------------------------------------------------------------------- |
| `4px`     | —   | Navbar между кнопками                                                                                            |
| `6px`     | —   | SearchInput border-bottom                                                                                        |
| `8px`     | —   | Breadcrumbs, SearchTags, Likes, TagItem wrapper                                                                  |
| `10px`    | —   | Logo animation, Clients client links                                                                             |
| `11.75px` | —   | ProjectsList project info                                                                                        |
| `12px`    | —   | Biography leftBlock                                                                                              |
| `15px`    | —   | ImgVertical, ProjectFeed                                                                                         |
| `16px`    | —   | MainTitle                                                                                                        |
| `20px`    | —   | ProjectsList, ImgSquares, ImgSquareUWide, ServicesList column, Team persona info margin, ProjectFeedback actions |
| `25px`    | —   | Footer services                                                                                                  |
| `27px`    | —   | Team leftBlock, Footer socials                                                                                   |
| `32px`    | —   | Team column-gap, Footer lastProject                                                                              |
| `35px`    | —   | Biography socials                                                                                                |
| `48px`    | —   | Team row-gap, ServicesList row                                                                                   |
| `54px`    | —   | Services section                                                                                                 |
| `63px`    | —   | AnimatedTitle, Clients sectionTitle                                                                              |
| `64px`    | —   | Team section                                                                                                     |
| `65px`    | —   | Clients section                                                                                                  |
| `6rem`    | —   | ProjectTeam teamWrapper                                                                                          |

### Padding

| Значение             | Где используется             |
| -------------------- | ---------------------------- |
| `4.5px 10px`         | TagItem button               |
| `0 19px`             | Navbar wrapper               |
| `4px 0`              | Copyright                    |
| `6px 11px`           | ServicesList new badge       |
| `6px 14px`           | Logo animation hover         |
| `7px`                | SearchButton                 |
| `12px 14px`          | Logo animation wrapper       |
| `20px 0`             | ProjectFeed                  |
| `25px 0`             | ProjectFeedback              |
| `0 42px`             | ProjectsList (desktop)       |
| `0 50px`             | ProjectsList (mobile)        |
| `2.75rem`            | ProjectPageLayout horizontal |
| `padding-top: 172px` | Main content                 |
| `padding-top: 182px` | Main search                  |
| `padding-top: 207px` | Home main                    |
| `padding-top: 220px` | Footer container             |

### Margin

| Значение              | Где используется                                          |
| --------------------- | --------------------------------------------------------- |
| `margin-top: 15px`    | Footer description title                                  |
| `margin-top: 20px`    | Biography socials, Team persona info                      |
| `margin-top: 30px`    | ProjectHeader header bottom                               |
| `margin-top: 38px`    | Footer bottomContent                                      |
| `margin-top: 40px`    | ProjectHeader header                                      |
| `margin-top: 46px`    | Services section                                          |
| `margin-top: 50px`    | Footer copyright, ProjectFeed                             |
| `margin-top: 52px`    | Footer separator                                          |
| `margin-top: 54px`    | TextBlock (tablet)                                        |
| `margin-top: 64px`    | TextBlock, Team                                           |
| `margin-top: 88px`    | Team section                                              |
| `margin-top: 100px`   | Footer noTopSpacing                                       |
| `margin-top: 108px`   | Clients                                                   |
| `margin-top: 110px`   | ProjectsList                                              |
| `margin-top: 155px`   | Footer container                                          |
| `margin-bottom: 2px`  | Footer services link                                      |
| `margin-bottom: 9px`  | TextBlock (tablet)                                        |
| `margin-bottom: 10px` | ProjectFeedback title                                     |
| `margin-bottom: 16px` | ProjectHeader title                                       |
| `margin-bottom: 20px` | ProjectFeedback description, ProjectFeedback creationInfo |
| `margin-bottom: 30px` | ProjectHeader header                                      |
| `margin-right: 40px`  | ProjectFeedback leftColumn                                |

---

## 4. Размеры блоков (Dimensions)

### Ширина (Width)

| Значение            | Где используется                    |
| ------------------- | ----------------------------------- |
| `max-width: 70px`   | Footer socials                      |
| `max-width: 154px`  | Team persona                        |
| `max-width: 226px`  | Footer description                  |
| `max-width: 280px`  | ServicesList item                   |
| `max-width: 390px`  | Navbar wrapper                      |
| `max-width: 399px`  | Team leftBlock                      |
| `max-width: 400px`  | Biography image                     |
| `max-width: 630px`  | ProjectFeedback description         |
| `max-width: 687px`  | Home subtitle h5                    |
| `max-width: 694px`  | Footer services                     |
| `max-width: 750px`  | Biography leftBlock                 |
| `max-width: 1100px` | CSS variable `--max-width`          |
| `max-width: 1180px` | Container, Footer lastProject image |
| `max-width: 1920px` | ProjectsList, ProjectPageLayout     |

### Высота (Height)

| Значение | Где используется                    |
| -------- | ----------------------------------- |
| `19px`   | RouterLink                          |
| `30px`   | SearchButton inner button           |
| `32px`   | Logo animated                       |
| `38px`   | RouterLink                          |
| `46px`   | Navbar wrapper                      |
| `50px`   | ProjectsList projectInfo min-height |
| `67px`   | Logo static                         |
| `309px`  | Biography image max-height          |
| `400px`  | Footer min-height                   |

### Aspect Ratios

| Значение  | Где используется                                          |
| --------- | --------------------------------------------------------- |
| `1 / 1`   | ImgSquares, Team persona image                            |
| `8 / 3`   | Footer lastProject image                                  |
| `10 / 15` | ImgVertical                                               |
| `16 / 9`  | ProjectsList project, ServicesList, ImgLarge, ProjectFeed |
| `21 / 10` | ImgSquareUWide wide item                                  |

---

## 5. Border Radius

| Значение | Где используется                                                                          |
| -------- | ----------------------------------------------------------------------------------------- |
| `6px`    | RouterLink                                                                                |
| `7.5px`  | ServicesList new badge                                                                    |
| `10px`   | ImgVertical, ProjectFeed, TagItem, Biography, SearchButton inner                          |
| `12px`   | ProjectsList, ServicesList, Team persona, Clients overlay, CSS variable `--border-radius` |
| `16px`   | Navbar, Logo, SearchButton, Video                                                         |
| `24px`   | ImgLarge, ImgSquares, ImgSquareUWide                                                      |
| `32px`   | Footer top corners                                                                        |
| `36px`   | Footer lastProject image                                                                  |

---

## 6. Z-Index

| Значение | CSS Variable                | Где используется   |
| -------- | --------------------------- | ------------------ |
| `1`      | —                           | Footer             |
| `2`      | —                           | Footer lastProject |
| `9`      | `--widget-z-index`          | Navbar, Header     |
| `99`     | `--page-transition-z-index` | Page transitions   |

---

## 7. Границы (Borders)

| Значение                             | Где используется                          |
| ------------------------------------ | ----------------------------------------- |
| `1px solid var(--color-white)`       | TagItem                                   |
| `1px solid var(--color-white-50)`    | Navbar wrapper, SearchInput, SearchButton |
| `1px solid var(--color-gray-medium)` | Logo animation                            |
| `1px solid var(--color-pink)`        | Clients overlay, Logo hover               |
| `1px solid transparent`              | RouterLink                                |
| `1px solid #8d8c8f`                  | Footer services underline                 |
| `2px solid #025b15`                  | ServicesList new badge                    |

---

## 8. Transitions & Animations

| Значение           | Где используется                                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| `0.2s`             | TagItem hover, Team persona, Clients client, ServicesList item, ProjectsList project, ProjectFeed project |
| `0.2s ease-in-out` | ProjectsList project transform                                                                            |
| `0.3s`             | SearchButton background                                                                                   |
| `0.5s ease`        | Clients overlay opacity                                                                                   |

---

## 9. Backdrop Filter

| Значение        | Где используется             |
| --------------- | ---------------------------- |
| `blur(19.65px)` | Navbar wrapper, SearchButton |

---

## 10. Компоненты — сводка

### Navbar (нижняя навигация)

- Ширина: `390px`
- Высота: `46px`
- Padding: `0 19px`
- Border-radius: `16px`
- Background: `var(--color-black-50)`
- Border: `1px solid var(--color-white-50)`
- Backdrop-filter: `blur(19.65px)`

### TagItem (тег)

- Padding: `4.5px 10px`
- Border-radius: `10px`
- Border: `1px solid var(--color-white)`
- Font-size: `16px`

### Card / Project Card

- Border-radius: `12px`
- Gap: `11.75px` (между image и info)
- Aspect-ratio image: `16 / 9`

### SearchButton

- Padding: `7px`
- Border-radius: `16px`
- Inner button: `30px × 30px`, border-radius: `10px`

### RouterLink (кнопка навигации)

- Размер: `38px × 19px`
- Border-radius: `6px`
- Gradient border

### Footer

- Background: `#1c1a2d`
- Border-radius: `32px 32px 0 0`
- Min-height: `400px`

---

## 11. Рекомендации по унификации

### Цвета — вынести в переменные:

- `#1c1a2d` → `--color-footer-bg`
- `#323859` → `--color-logo-active`
- `#666666` → `--color-caret`
- `#8d8c8f` → `--color-underline`
- `#04ca00` → `--color-badge-green`
- `#025b15` → `--color-badge-green-border`

### Border-radius — унифицировать:

```
--radius-sm: 6px      /* RouterLink */
--radius-md: 10px     /* TagItem, Cards small */
--radius-lg: 12px     /* Default cards */
--radius-xl: 16px     /* Navbar, Video */
--radius-2xl: 24px    /* Large images */
--radius-3xl: 32px    /* Footer */
```

### Spacing scale:

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
```

### Font sizes:

```
--text-xs: 12px
--text-sm: 14px
--text-base: 16px
--text-md: 18px
--text-lg: 20px
--text-xl: 22px
--text-2xl: 26px
--text-display: 56px
```

### Container widths:

```
--container-sm: 70px
--container-md: 400px
--container-lg: 690px
--container-xl: 1180px
--container-max: 1920px
```
