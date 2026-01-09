# Select Component

A custom, accessible dropdown select component built as a Web Component. It provides a modern, theme-aware UI that replaces the native `<select>` element while maintaining form compatibility.

## Usage

```astro
---
import Select from '../Select.astro';

const options = [
  { label: 'Version 1.0', value: 'v1' },
  { label: 'Version 2.0', value: 'v2', selected: true }
];
---

<Select 
  id="version-select" 
  label="Select Version" 
  options={options} 
  width="w-48"
/>

<script>
  document.addEventListener('change', (e) => {
    if (e.target.tagName === 'STARLIGHT-SELECT' && e.target.id === 'version-select') {
      console.log('Selected:', e.detail.value);
    }
  });
</script>
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | `undefined` | Unique identifier for the component. Used for the hidden native select `name` and event targeting. |
| `label` | `string` | `undefined` | Accessible label for the select button (screen reader only). |
| `options` | `Array<{ label: string, value: string, selected?: boolean }>` | **Required** | Array of options. |
| `width` | `string` | `'w-full'` | Tailwind width class for the container. |

## Events

### `change`

Dispatched when the user selects an option.

- **Detail**: `{ value: string }` - The value of the selected option.
- **Bubbles**: `true` - Can be caught by event delegation on `document`.

## Implementation Details

### 1. Web Component (`<starlight-select>`)
The logic is encapsulated in a custom element, ensuring isolation and reusability. It manages the state (open/closed), selection logic, and DOM updates.

### 2. Accessibility & Keyboard Navigation
- **Keyboard Support**:
    - `Enter` / `Space`: Toggles the dropdown.
    - `Escape`: Closes the dropdown.
    - `Up` / `Down` arrows (future enhancement): Can be added for list navigation.
- **ARIA Attributes**: Uses `aria-expanded`, `aria-haspopup`, `role="listbox"`, and `aria-selected` to ensure screen readers understand the component state.
- **Hidden Native Select**: A hidden `<select>` element is synchronized with the custom UI to support standard form submissions if used inside a `<form>`.

### 3. Theming
The component heavily relies on CSS variables defined in `global.css` (Starlight standard) to ensure seamless integration with light and dark modes.
- **Colors**: Uses `--sl-color-*` variables for background, text, borders, and hover states.
- **Focus**: The default focus ring is removed in favor of a subtle border color transition (`--sl-color-accent`) for a cleaner look.

### 4. Event Delegation
The custom `change` event bubbles, allowing you to attach a single listener to the `document` or a parent container to handle events from multiple select components dynamically.
