# Agent Rules & Guidelines

This document outlines the coding standards and project conventions for AI agents working on this codebase.

## 1. Component Structure

All new and refactored components within `src/components/` must adhere to the following directory structure:

### Requirement
Every component must reside in its own dedicated directory named after the component (in kebab-case or PascalCase matching the component, preferred lowercase for directory if generic, or PascalCase if strictly enforced by framework, but here we use **kebab-case** or **camelCase** directories for grouping, e.g., `src/components/select/`).

### Structure
```
src/components/
└── <component-name-dir>/
    ├── <ComponentName>.astro  (The source code)
    └── README.md              (Documentation)
```

**Example:**
For a component named `Switcher`:
```
src/components/switcher/
├── Switcher.astro
└── README.md
```

## 2. Documentation Standards

The `README.md` file accompanying each component is **mandatory**. It must contain:

### A. Usage Documentation
- **Description**: A brief summary of what the component does.
- **Props**: A table or list of all accepted props, their types, default values, and descriptions.
- **Code Examples**: Clear snippets showing how to import and use the component in an `.astro` file.

### B. Implementation Details (Realization)
- **Architecture**: How the component is built (e.g., Web Component, pure CSS, React wrapper).
- **Key Logic**: Explanations of complex parts (e.g., "The slider width is calculated via JS on mount to prevent layout thrashing").
- **Theming**: How the component handles light/dark mode (e.g., "Uses CSS variables `--sl-color-*`").
- **Accessibility**: Notes on ARIA attributes and keyboard navigation support.

## 3. General Style
- **Theming**: Always use the project's global CSS variables (defined in `src/styles/global.css`) for colors. Avoid hardcoded hex values unless defining a specific new theme variable.
- **Tailwind**: Use Tailwind utility classes where possible, but encapsulated `<style>` blocks are permitted for complex component-specific logic (like the Switcher's sliding track).
