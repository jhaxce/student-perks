<!-- Copilot Instructions for student-perks repository -->

# AI Agent Instructions

This repository is a Jekyll-based static site hosted on GitHub Pages. The canonical content lives in `README.md` and `VERIFICATION.md` at the repository root.

## Repository Architecture

```
Root (GitHub Repo)              ──► CI copies to docs/
├── README.md                   ──► docs/README.md
├── VERIFICATION.md             ──► docs/VERIFICATION/VERIFICATION.md
└── docs/
    ├── _config.yml             Jekyll config
    ├── _layouts/default.html   Site layout (nav, ads, footer)
    ├── assets/
    │   ├── css/main.css       Modern CSS design system
    │   └── js/main.js          Site functionality
    ├── index.md                Includes README.md
    └── verification/index.md   Includes VERIFICATION.md
```

## Key Rules

### What to Edit
| Safe to Edit | Do NOT Edit |
|--------------|-------------|
| `README.md` (tables, content) | `_layouts/default.html` |
| `VERIFICATION.md` | `assets/css/main.css` |
| `.github/CONTRIBUTING.md` | `assets/js/main.js` |
| | `_config.yml` |

### Table Format
Follow this exact column order when adding perks:

```markdown
| **Name** | Description | Benefits | **Type** | Role/Req | [Link](url) |
```

**Type values:** `Free`, `Discount`, `Credit`, `Trial`  
**Role values:** `Student (Email)`, `Student (GitHub Pack)`, `Faculty`

## CSS Design System

The site uses CSS variables for theming. Key variables:
- `--bg-primary`, `--bg-secondary` — backgrounds
- `--accent`, `--accent-hover` — link colors
- `--text-primary`, `--text-secondary` — text colors

The CSS supports both dark and light modes via `prefers-color-scheme`.

## Deployment

The CI workflow (`.github/workflows/deploy-site.yml`):
1. Copies `README.md` → `docs/README.md`
2. Copies `VERIFICATION.md` → `docs/VERIFICATION/VERIFICATION.md`
3. Builds Jekyll from `docs/`
4. Deploys to GitHub Pages

## Contribution Guidelines

1. Fork the repo and create a branch: `add/<perk-name>`
2. Edit only `README.md` — add rows to existing category tables
3. Keep PRs focused (one perk per PR is ideal)
4. Include source verification in PR description
5. Do not modify layout, ads, or CSS without maintainer approval

For questions, open an issue or mention @jhaxce.
