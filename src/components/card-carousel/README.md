# CardCarousel Component

A responsive, infinite-looping card carousel component designed for showcasing customer cases or similar content.

## Features

- **Infinite Scrolling:** Seamlessly loops through items.
- **Auto-play:** Automatically advances slides with a configurable interval.
- **Dynamic Styling:** Implements a specific visual effect where cards have varying heights based on their position in the viewport (PC view).
- **Responsive:** Adapts to mobile devices with a native scroll experience.

## Usage

```astro
---
import CardCarousel from '../components/card-carousel/CardCarousel.astro';

const items = [
  {
    author: "Author Name",
    title: "Case Title",
    desc: "Case Description",
    link: "https://example.com",
    bgColor: "linear-gradient(...)",
    color: "#fff"
  },
  // ... more items
];
---

<CardCarousel items={items} autoPlayInterval={3000} />
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `Array<CaseCard>` | Required | Array of data objects for the cards. |
| `autoPlayInterval` | `number` | `3000` | Interval in milliseconds for auto-play. |

### CaseCard Interface

```typescript
interface CaseCard {
  author: string;
  title: string;
  desc: string;
  link: string;
  bgColor: string;
  color: string;
}
```
