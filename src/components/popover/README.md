# Popover Component

A lightweight, CSS-based popover component designed to display contextual information (like QR codes or tooltips) when interacting with a trigger element.

## Usage

### Import

```astro
import Popover from '../popover/Popover.astro';
```

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `placement` | `'top' \| 'bottom'` | `'top'` | The position of the popover content relative to the trigger. |
| `trigger` | `'hover' \| 'click'` | `'hover'` | The interaction event that triggers the popover. *Note: Currently optimized for hover via CSS.* |
| `class` | `string` | `''` | Additional CSS classes to apply to the main wrapper. |

### Slots

| Slot Name | Description |
| :--- | :--- |
| `default` | The trigger element (e.g., a Button or Text) that the user interacts with. |
| `content` | The content to display inside the popover (e.g., an Image or Text). Must use `slot="content"`. |

### Examples

**Basic Usage (QR Code)**
```astro
<Popover placement="top">
  <!-- Trigger -->
  <Button>Hover Me</Button>
  
  <!-- Content -->
  <img slot="content" src="/images/qrcode.png" width="128" height="128" />
</Popover>
```

**Bottom Placement**
```astro
<Popover placement="bottom">
  <span class="cursor-pointer">More Info</span>
  <div slot="content" class="text-sm p-2">
    Here is some extra information.
  </div>
</Popover>
```

## Implementation Details

### Architecture
The component uses a pure CSS approach for the "hover" state, utilizing the `:hover` pseudo-class on the container to toggle the visibility and opacity of the content. This ensures high performance and no client-side JavaScript overhead for basic usage.

### Key Logic
- **Positioning**: Uses absolute positioning (`position: absolute`) for the popover content relative to the container (`position: relative`).
- **Visibility**: Transitions `opacity` and `visibility` for a smooth fade-in effect.
- **Z-Index**: Sets `z-index: 50` to ensure the popover appears above other page content.
- **Arrows**: CSS borders are used to create a simple triangular arrow pointing to the trigger.

### Accessibility
- The popover content is hidden visually and interactively (`pointer-events: none`) until triggered.
- *Note: For comprehensive accessibility (screen readers, keyboard navigation), additional ARIA attributes and focus management would be required if this component were to handle complex interactive content.*
