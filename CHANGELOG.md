# Changelog

All notable changes to this project will be documented in this file.

This project follows **Semantic Versioning (SemVer)**.

---

## [0.1.0] - 2026-04-24 - PoC Version

### Added

- Initial React + Vite frontend project setup.
- Ant Design (AntD) UI integration with design tokens usage.
- Dashboard layout split into reusable components.
- Total balance visualization card and related dashboard UI improvements.
- Receipt upload modal layout and UI flow.
- Receipt upload service integrated with backend receipt upload endpoint.
- Dashboard service and `useDashboardData` hook for loading account and balance data.
- API client abstraction for backend communication.
- Proxy configuration in Vite to avoid CORS issues during development.
- Basic i18n support and translations for dashboard and receipt upload UI.
- State feedback components for loading and error states.
- Mock Service Worker (MSW) integration for local development/testing.
- GitHub Actions CI pipeline.
- README updated for PoC scope and aligned with main repository documentation.
- Application icon asset referenced in documentation.
