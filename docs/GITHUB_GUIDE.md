# GitHub Guide for Orbitoarium

## 1. Create the repository
1. Go to https://github.com/new
2. Repository name: **Orbitoarium**
3. Choose Public (or Private if your lecturer asks and you add them as a collaborator)
4. **Do not** tick "Add a README" or ".gitignore" (the project already has them)
5. Click **Create repository**

## 2. Initialize Git locally (inside the Orbitoarium folder)
```bash
git init
git add .
git commit -m "Initial commit: Expo project with navigation, datasets and theme"
git branch -M main
```
(`git init` may say the repo already exists; that is fine.)

## 3. Connect and push
```bash
git remote add origin https://github.com/<your-username>/Orbitoarium.git
git push -u origin main
```
GitHub does not accept your account password. Use a **Personal Access Token** (Settings → Developer settings → Tokens) or GitHub Desktop / VS Code sign-in. Never commit tokens or passwords.

## 4. Suggested commit history (commit regularly!)
Your lecturer wants to see regular commits. If you submit everything in one commit it looks suspicious, so add the project in stages and commit after each one:

```bash
git commit -m "Create Expo blank project and install React Navigation"
git commit -m "Add theme file and folder structure"
git commit -m "Add local datasets: planets, moons, quiz questions, space facts"
git commit -m "Add reusable components"
git commit -m "Implement Home screen"
git commit -m "Implement Planets list with search and filter"
git commit -m "Implement Planet Details screen with route params"
git commit -m "Implement Moons Explorer with detail view"
git commit -m "Implement Space Quiz"
git commit -m "Implement Space Facts screen"
git commit -m "Add AsyncStorage favourites and best score"
git commit -m "Add README and documentation"
```
Tip: when you are ready, `git add <files>` for only the files of that stage, commit, and push (`git push`).

## 5. Updating the repository later
```bash
git status
git add .
git commit -m "Describe what you changed"
git push
```

## 6. Before submitting
- `node_modules/` must NOT be in the repo (it is in `.gitignore`)
- Add screenshots to `docs/screenshots/`, then commit and push
- Check the repository page on github.com and copy the link for submission
