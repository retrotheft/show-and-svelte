# Changelog

## [0.0.4] - UNRELEASED

- BREAKING CHANGE: `slideLock` now works correctly
- cleaned up superfluous code from `stage.ts`

## [0.0.3] - 2025-08-29

- rewrote rendering logic, now subdividing snippets instead of direct DOM manipulation
- rewrote styling logic, now just moving ID and scoped class instead of styles directly

- Wrote README
- Added MIT License
- Defined recommended build setup

- Added `PresentationViewer` and `ViewerOverlay`
- added `slideLock` attachment for internal slide state management
- implemented container units for stage, tied to `cqmin`
- checked for snippet change in `Mark.svelte` to prevent FOUC

## [0.0.2] - 2025-08-26

- Initial public alpha release! 🎉
