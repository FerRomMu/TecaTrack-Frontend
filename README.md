# TecaTrack Frontend

Welcome to the TecaTrack Frontend repository. This project is a modern web application built with a focus on premium design, performance, and developer experience.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: [TypeScript 6](https://www.typescriptlang.org/)
- **UI Component Library**: [Ant Design (AntD) 6](https://ant.design/)
- **Linting**: [ESLint 9](https://eslint.org/)
- **Formatting**: [Prettier 3](https://prettier.io/)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd TecaTrack-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📖 Project Structure

```text
src/
├── theme/          # Ant Design custom theme configuration
│   └── theme.tsx   # Global tokens and component overrides
├── components/     # Reusable UI components
├── App.tsx         # Main application component & layout
├── main.tsx        # Application entry point
├── index.css       # Global base styles
└── vite-env.d.ts   # TypeScript environment definitions
```

---

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server with HMR.
- `npm run build`: Runs TypeScript type checks (`tsc`) and builds the production bundle.
- `npm run lint`: Runs ESLint to find and fix code quality issues.
- `npm run preview`: Previews the production build locally.

---

## 🎨 Development Guidelines

### Styling & Theme
We use **Ant Design's Design Token** system for styling. Avoid writing raw CSS or using `!important` whenever possible.
- Customize the global look in `src/theme/theme.tsx`.
- Use `theme.useToken()` or component-level props (`styles`, `classNames`) to access the theme context in your components.

### Code Quality & Formatting
- **TypeScript**: Use strict typing. Avoid `any` where possible.
- **Prettier**: Formatting is enforced via Prettier. It is highly recommended to enable "Format on Save" in your editor.
- **ESLint**: Follow the project's linting rules. The CI will fail if there are linting errors.

### Component Design
- Prioritize **Rich Aesthetics**. Every UI element should feel premium and follow the established design language.
- Use **Semantic HTML** (Header, Main, Section, etc.) for better accessibility and SEO.

---

## 🤝 Onboarding for New Developers

1. **Configure your Editor**: Install the recommended extensions for VS Code (ESLint, Prettier).
2. **Explore the Theme**: Check `src/theme/theme.tsx` to understand the color palette and typography.
3. **Run Linting**: Run `npm run lint` before committing to ensure your code matches the style guide.
