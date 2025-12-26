# Contributing to Student Perks

Thank you for helping make this resource better for students everywhere! 🎓

## Quick Start

1. **Fork** the repository
2. **Create a branch**: `git checkout -b add/<perk-name>`
3. **Edit** `README.md` only — add your row to the appropriate category table
4. **Commit** and push your changes
5. **Open a Pull Request**

---

## What You Can Contribute

| ✅ Safe to Edit | ❌ Do NOT Edit |
|-----------------|----------------|
| `README.md` (tables) | `docs/_layouts/` |
| `VERIFICATION.md` | `docs/assets/css/` |
| | `docs/assets/js/` |

> **Note:** Layout, CSS, and JavaScript changes require maintainer approval. Open an issue first if you have suggestions.

---

## Table Row Format

When adding a new perk, follow this exact format:

```markdown
| **Tool Name** | Short description | Specific benefit | **Type** | Role (How to get) | [Link](https://...) |
```

### Column Definitions

| Column | What to Include |
|--------|-----------------|
| **Name** | Tool/service name in bold |
| **Description** | One-line summary of what it does |
| **Benefits** | What students get (e.g., "Pro Plan", "$100 Credit") |
| **Type** | `Free`, `Discount`, `Credit`, or `Trial` |
| **Role/Req** | `Student (Email)`, `Student (GitHub Pack)`, `Faculty`, etc. |
| **Link** | Direct link to the student offer page |

### Type Values Explained

| Value | Meaning |
|-------|---------|
| **Free** | Completely free for students |
| **Discount** | Reduced price (e.g., 50% off) |
| **Credit** | Monetary credits to spend (e.g., $100 Azure) |
| **Trial** | Free for limited time, then paid |

---

## PR Guidelines

- ✅ **One perk per PR** — keeps reviews quick
- ✅ **Include source link** — where can we verify this benefit?
- ✅ **Alphabetical order** — place row alphabetically in the category
- ✅ **No referral links** — link directly to the official page
- ❌ **No formatting changes** — don't adjust table alignment or styling

---

## Updating Expired or Broken Links

Found a dead link or expired benefit? Please:
1. Open an issue describing the problem, OR
2. Submit a PR to fix/remove the entry

---

## Need Help?

- Open an [issue](https://github.com/jhaxce/student-perks/issues)
- Mention [@jhaxce](https://github.com/jhaxce) in your PR

---

## License

By contributing, you agree to license your contribution under the [MIT License](../LICENSE).