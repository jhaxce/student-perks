# Contributing to Student Perks

Thank you for contributing. To keep the project consistent and easy to maintain, please follow the rules below.

Short checklist
- Fork the repo and create a branch: `git checkout -b add/<perk-name>`
- Edit `README.md` only: add or update rows in the existing category tables.
- Keep each PR focused to a single perk or small related fixes.
- Open a Pull Request describing what you changed and why.

Repository conventions (important)
- The canonical content for the site lives in `README.md`. **All contributions must be edits to `README.md` only.**
- Do not add standalone pages, do not modify `/_layouts/default.html`, and do not change site assets.

How to add or edit a perk
1. Fork and create a descriptive branch name: `git checkout -b add/<perk-name>`
2. Open `README.md` and find the correct category table.
3. Add a new row following the existing table format (Name, Description, Benefits, Type, Role/Req, Link).
4. Place the new row alphabetically within the category where practical.
5. Commit and push your branch, then open a Pull Request.

Table row example

```markdown
| **Tool Name** | Short description of tool. | Specific benefit (e.g. Pro Plan). | **Free** | Student (Email) | [Link](https://...) |
```

PR guidance
- Keep PRs small and focused (one resource per PR is ideal).
- Provide verification details or a source link in the PR description.
- Avoid formatting or layout changes outside `README.md`.

Contact / Maintainer
- If unsure, open an issue or mention @jhaxce in your PR for guidance.

License
- By contributing you agree to license your contribution under the repository's MIT License.
# Contributing to Awesome Student Perks

First off, thank you for considering contributing to this project! It's people like you that make this tool useful for students around the world.

## ⚡ How to Contribute

1.  **Fork** the repository to your own GitHub account.
2.  **Clone** the project to your machine.
3.  **Create a branch** locally with a succinct name:
    * `git checkout -b add-tool-name`
4.  **Add your resource** to the `README.md` file (see guidelines below).
5.  **Commit** changes to the branch.
6.  **Push** changes to your fork.
7.  **Open a Pull Request** in our repository.

---

## 📏 Guidelines for Adding Tools

To keep this list high-quality and consistent, please follow these rules:

### 1. Alphabetical Order
Please add the new tool in **alphabetical order** within its specific category.

### 2. No Referral Links
We do not accept affiliate or referral links. Please link directly to the student benefit page (e.g., `https://www.notion.so/product/notion-for-education` instead of `ref=jhaxce`).

### 3. Valid Categories
Ensure you are adding the tool to the correct section (e.g., *Cloud* vs *Developer Tools*).

---

## 📝 Table Schema (Important!)

When adding a row to the table, please strictly adhere to these definitions for the **Type** and **Role** columns.

### The `Type` Column
| Value | Definition |
| :--- | :--- |
| **Free** | The product or license is completely free (e.g., GitHub Pro, JetBrains). |
| **Discount** | You still have to pay, but it is cheaper than the normal price (e.g., Adobe CC). |
| **Credit** | You get a specific monetary value to spend (e.g., $100 Azure Credit). |
| **Trial** | It is free for a limited time, then you must pay (e.g., Amazon Prime 6-months). |

### The `Role / Req` Column
| Value | Definition |
| :--- | :--- |
| **Student** | Any individual student can claim this with an email or ID. |
| **Faculty** | A teacher or school administrator must register/apply first. |

### Example Row
```markdown
| **Tool Name** | Short description of tool. | Specific benefit (e.g. Pro Plan). | **Free** | Student (Email) | [Link](https://...) |
```

---
## ♻️ Updating Existing Links
If you find a broken link or a benefit that has expired, please create a Pull Request to fix or remove it.

Thank you for your help! 🎓