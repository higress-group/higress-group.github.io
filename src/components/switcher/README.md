# Switcher Component

A reusable, animated capsule-style toggle switch component that supports multiple options (N >= 2). It features a sliding background effect that dynamically adapts to the width of the selected option's text.

## Usage

```astro
---
import Switcher from '../Switcher.astro';

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' }
];
---

<Switcher 
  id="my-switcher" 
  value="a" 
  options={options} 
  theme="light" 
/>

<script>
  const switcher = document.getElementById('my-switcher');
  switcher?.addEventListener('change', (e) => {
    console.log('Selected value:', e.detail.value);
  });
</script>
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | `undefined` | Unique identifier for the component (useful for event listeners). |
| `value` | `string` | **Required** | The currently selected value. Must match one of the option values. |
| `options` | `Array<{ label: string, value: string }>` | **Required** | Array of options to display. Must contain at least 2 items. |
| `theme` | `'default' \| 'light'` | `'default'` | Visual theme variant. 'light' uses a white background and specific hover colors. |
| `class` | `string` | `""` | Additional CSS classes to apply to the container. |

## Events

### `change`

Dispatched when the user selects a new option.

- **Detail**: `{ value: string }` - The value of the selected option.
- **Bubbles**: `true`

## Implementation Details

### 1. N-Option Support
Unlike simple binary toggles, this component supports any number of options. It renders a list of `<button>` elements within a container.

### 2. Dynamic Sliding Background
The "slider" (background highlight) is not fixed-width. 
- **Flex Layout**: The container uses `display: flex`, allowing each option to take up its natural width based on text length.
- **JavaScript Positioning**: On initialization and window resize, the component calculates the `offsetWidth` and `offsetLeft` of the active button relative to the track.
- **Visuals**: It sets the slider's `width` and `transform: translateX(...)` styles to match the active button exactly.

### 3. Jitter Prevention (Flash of Unstyled Content)
To prevent the slider from jumping visually on page load (e.g., sliding from 0 to the correct position):
- **Initial State**: The slider has `opacity: 0` and a `.no-transition` class in the HTML.
- **Initialization**: 
    1. The JS calculates the correct position immediately.
    2. It sets `opacity: 1`.
    3. It forces a browser reflow (reading `offsetHeight`).
    4. It removes the `.no-transition` class.
- **Result**: The slider appears instantly in the correct place without animation on load, but animates smoothly for subsequent user interactions.

### 4. Theming
The component uses CSS variables for styling (`--switch-bg`, `--switch-text-active`, etc.).
- **Global Theme**: Supports Starlight's global dark/light mode via `:global([data-theme='...'])`.
- **Component Theme**: Supports a specific `theme="light"` prop which overrides standard variables with specific color codes (e.g., white background) regardless of the global theme, useful for specific UI sections like the header.
