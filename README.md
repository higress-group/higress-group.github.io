# Higress Official Website

Welcome to the official repository for the [Higress](https://higress.io) website and documentation. This project is built using [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), featuring a modern, fast, and content-focused architecture.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) v5
- **Documentation Theme**: [Starlight](https://starlight.astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Language**: TypeScript

## 🛠 Getting Started

### Prerequisites

- Node.js (v18.17.1 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/higress-group/higress-group.github.io.git
   cd higress-group.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`.

### Build

To build the production version of the site:

```bash
npm run build
```

This command runs necessary pre-build scripts (like fetching GitHub data) and generates the static site in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```text
/
├── public/           # Static assets (images, robots.txt, etc.)
├── src/
│   ├── components/   # Reusable UI components (buttons, dropdowns, etc.)
│   ├── container/    # Section-level layout containers (e.g., Hero section)
│   ├── content/      # Markdown/MDX content (blog posts, documentation)
│   ├── layout/       # Page layouts
│   ├── pages/        # Astro pages and routes
│   └── styles/       # Global styles and Tailwind configuration
├── agent-doc/        # Development guidelines and conventions
├── astro.config.mjs  # Astro configuration
└── package.json      # Project dependencies and scripts
```

## 📝 Development Guidelines

Please refer to the documentation in the `agent-doc/` directory for detailed coding standards:

- [Component Conventions](./agent-doc/conventional-components.md): Guidelines for creating and structuring new components.
- [Commit Conventions](./agent-doc/conventional-commits.md): Standards for git commit messages.

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
