# CV

This repository contains a single-page CV website (`index.html`) intended to be published via GitHub Pages as `username.github.io`.

To publish:

- Create a GitHub repository named `USERNAME.github.io` (replace `USERNAME` with your GitHub username).
- Push this local repo to GitHub (commands shown below).

Quick push commands (run locally):

```bash
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

Or, using GitHub CLI (if installed and authenticated):

```bash
gh repo create USERNAME.github.io --public --source=. --push
```
