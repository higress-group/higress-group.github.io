# Button Component

A versatile button component implemented as a Web Component, supporting multiple modes and custom sizing. It complies with the Higress design system using the primary gradient for emphasis.

## Usage

### Import

```astro
import Button from '../button/Button.astro';
```

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `mode` | `'primary' \| 'normal'` | `'primary'` | Visual style of the button. `primary` uses the brand gradient; `normal` is white with black text. |
| `width` | `string` | `undefined` | Custom width for the button (e.g., `'200px'`, `'100%'`). |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | The HTML `type` attribute for the button element. |
| `class` | `string` | `''` | Additional CSS classes to apply to the wrapper. |
| `...` | `any` | - | Any other attributes (e.g., `onclick`, `disabled`) are passed to the inner `<button>` element. |

### Examples

**Primary Button (Default)**
```astro
<Button>Get Started</Button>
```

**Normal Button**
```astro
<Button mode="normal">Learn More</Button>
```

**Full Width Button**
```astro
<Button width="100%">Sign Up</Button>
```

**Button with Click Handler**
```astro
<Button onclick="alert('Clicked!')">Click Me</Button>
```

## Implementation Details

### Architecture
The component is built using a lightweight Web Component wrapper `<higress-button>` to ensure encapsulation and future extensibility (e.g., for ripple effects). The core styling is applied via scoped CSS in the `.astro` file.

### Key Logic
- **Mode Handling**: The `mode` prop is reflected as a `data-mode` attribute on the custom element wrapper. CSS selectors target `higress-button[data-mode="..."]` to apply specific color schemes.
- **Sizing**: The `width` prop maps directly to an inline `style="width: ..."` on the inner button element to allow precise control without overriding classes.

### Theming
- **Primary Gradient**: Uses the global CSS variable `--higress-primary-gradient` defined in `src/styles/global.css`.
- **Colors**:
    - Primary text: Fixed `#ffffff` for contrast against the gradient.
    - Normal background: Fixed `#ffffff` with `#000000` text.
    - Transitions: Includes smooth transitions (`0.3s ease`) for `transform`, `box-shadow`, and `opacity`.

### Accessibility
- The component renders a semantic native `<button>` element inside the wrapper.
- All standard accessibility attributes (like `aria-label`, `disabled`) passed to the component are forwarded to the inner `<button>`.
- Focus states rely on the browser's default behavior unless explicitly overridden (currently uses `outline: none` but relies on visual feedback like `transform` and `box-shadow` for active states; *Note: ensuring a visible focus ring for keyboard navigation is recommended for future improvements*).
