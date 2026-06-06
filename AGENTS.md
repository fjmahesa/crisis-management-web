# AI Agent Guidance for crisis-management-web

## Project overview
- React application built with Vite and Tailwind CSS.
- Client-only frontend; no backend code is in this repository.
- Core behavior is driven by `src/App.jsx`, which loads maintenance mode state from `public/configMaintenanceMode.json`.
- Routing uses `react-router-dom` with `Home`, `AboutPage`, and a catch-all `NotFound` page.

## Key files and structure
- `src/App.jsx` - main app shell, maintenance mode gating, routes, and page layout.
- `src/main.jsx` - React entry point and theme provider setup.
- `src/pages/` - top-level page components.
- `src/components/` - reusable UI pieces and homepage sections.
- `src/context/ThemeContext.jsx` - site theme state and dark mode support.
- `public/configMaintenanceMode.json` - runtime maintenance flag.
- `package.json` - build, dev, lint scripts.

## Build and developer commands
- `npm run dev` - start Vite development server
- `npm run build` - create production build
- `npm run lint` - run ESLint on the project

## Agent guidance
- Preserve the maintenance mode loading behavior in `src/App.jsx`; the app intentionally uses `public/configMaintenanceMode.json` to decide whether to show the `Maintenance` page.
- Keep route paths and page structure consistent with current React Router usage.
- Prefer editing or extending components in `src/components/` and `src/pages/` rather than adding new global app shell logic unless necessary.
- Avoid changing the basic Tailwind + React + Vite setup unless the task explicitly requires it.
- For styling and layout changes, follow the existing Tailwind class patterns and component decomposition.

## Notes
- The repository currently has no dedicated test suite or backend service.
- `README.md` is a generic Vite React template description and does not contain project-specific architecture details.
