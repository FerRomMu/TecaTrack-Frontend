## CRITICAL OPERATIONAL RULES

1. **NO TERMINAL COMMANDS:** Never execute any terminal commands (npm install, build, start, etc.).
2. **AUTHORIZED ACTIONS:** You are only allowed to **read/watch**, **create** or **edit** files and directories.
3. **COMMANDS:** If a command needs to be executed, ask the user to run it instead of executing it yourself.

# CONTRIBUTION STYLE

- **Incremental Changes:** Prioritize small, atomic code updates.
- **Avoid Bloat:** Avoid large-scale refactors or unnecessarily large code dumps unless explicitly requested.
- **Progressive Updates:** If a task is complex, break it into smaller steps and wait for feedback between iterations.

## Development Standards

- **Language & Formatting:** All code, comments, and documentation must be in **English**.
- **Component Usage:** Always prioritize AntD components.
- **Custom Styling:** Avoid custom CSS files. Use AntD's theme configuration or inline styles if they follow the design system.
- **Localization:** Use an i18n framework for all strings. Force locale to es-AR to ensure date formats (DD/MM/YYYY) and currency patterns align with Argentine standards.
- **TypeScript:** Use strict typing for all props and data models. NEVER use `Any`.
