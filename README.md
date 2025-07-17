# Vite + React Project

This project is set up using [Vite](https://vitejs.dev/) and [React](https://react.dev/), with a scalable folder structure for modern web applications.

## Folder Structure

```
api-pro/
│
├── public/                 # Static files
├── src/
│   ├── assets/             # Images, icons
│   ├── components/         # Reusable components (Navbar, Button, Card, etc.)
│   ├── layouts/            # Layout wrappers (Header + Footer)
│   ├── pages/              # Page-level components (Home, About, Pricing...)
│   ├── sections/           # Sections inside pages (Hero, Features, etc.)
│   ├── api/                # API fetch logic (e.g., team data)
│   ├── App.jsx             # Main app file
│   ├── main.jsx            # Entry point
│   └── styles/             # Global styles (optional, if using CSS Modules/Tailwind)
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Customization

- Add your static files to `public/`.
- Place images and icons in `src/assets/`.
- Create reusable UI components in `src/components/`.
- Use `src/layouts/` for layout wrappers (e.g., Header, Footer).
- Add page-level components in `src/pages/`.
- Organize page sections in `src/sections/`.
- Place API logic in `src/api/`.
- Add global or modular styles in `src/styles/`.
