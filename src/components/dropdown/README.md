# Dropdown Component

A reusable, theme-aware dropdown menu component with hover and click interactions.

## Usage

```astro
---
import Dropdown from '../dropdown/Dropdown.astro';

const items = [
  { label: 'Feature A', href: '/features/a' },
  { label: 'Feature B', href: '/features/b' }
];
---

<Dropdown label="Features" items={items} />
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | **Required** | The text label for the dropdown button. |
| `items` | `Array<{ label: string, href: string }>` | `[]` | List of links to display in the dropdown menu. |
| `class` | `string` | `""` | Additional CSS classes for the container. |

## Implementation Details

### 1. Web Component (`<starlight-dropdown>`)
Encapsulates logic for opening/closing the menu, handling click-outside events, and managing focus.

### 2. Interaction
- **Hover**: Opens on mouse enter, closes with a delay on mouse leave.
- **Click**: Toggles the menu (useful for touch devices).
- **Keyboard**: Supports `Escape` to close.

### 3. Theming
Uses Starlight's global CSS variables (`--sl-color-*`) and specific overrides (`--sl-dropdown-*`) to support light and dark modes seamlessly.
- **Light Mode**: White background, light blue hover (`#EFF1FF`).
- **Dark Mode**: Dark gray background and text.
