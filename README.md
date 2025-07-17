# Vite + React Project

This project is set up using [Vite](https://vitejs.dev/) and [React](https://react.dev/), with a scalable folder structure for modern web applications.

## Getting Started

To run this project locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at the local address shown in your terminal (typically http://localhost:5173).

## Folder Structure

```
api-pro/
│
├── public/                 # Static files (favicons, etc.)
├── src/
│   ├── assets/             # Images, icons, videos
│   ├── components/         # Reusable components (Navbar, Button, Card, etc.)
│   ├── layouts/            # Layout wrappers (Header + Footer)
│   ├── pages/              # Page-level components (Home, About, Pricing...)
│   ├── sections/           # Sections inside pages (Hero, Features, etc.)
│   ├── api/                # API fetch logic (e.g., team data)
│   ├── App.jsx             # Main app file
│   ├── main.jsx            # Entry point
│   └── styles/             # Global styles (typography, color palette)
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## AI Tools Used

- **Bolt (https://bolt.new/):**
  - Used to generate the initial main landing page with a detailed prompt, providing a strong design and content foundation.
- **Cursor:**
  - Used for code refactoring, splitting the main page into reusable sections and components according to best practices for maintainability.
  - Assisted in organizing the project structure, applying a consistent color palette and typography, and generating boilerplate for additional pages using the same styling as the main page.

## Key Project Decisions & Notes

- The main landing page was designed first, then modularized into sections and components for reusability and easier maintenance.
- A global color palette and typography system were established in `src/styles/` for visual consistency across all pages.
- All additional pages (About, Pricing, Contact, API Documentation) were generated using the same design system for a cohesive user experience.
- The project structure follows modern React best practices, with clear separation between components, sections, layouts, and pages.
- All static assets (images, icons, video) are stored in `src/assets/` or `public/` as appropriate.
- The favicon and site title can be customized in `index.html`.

## Customization

- Add your static files to `public/`.
- Place images and icons in `src/assets/`.
- Create reusable UI components in `src/components/`.
- Use `src/layouts/` for layout wrappers (e.g., Header, Footer).
- Add page-level components in `src/pages/`.
- Organize page sections in `src/sections/`.
- Place API logic in `src/api/`.
- Add global or modular styles in `src/styles/`.
